'use client'

import cn from '@/lib/cn'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { IoDesktopOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

interface ThemeToggleProps {
  className?: string
}

type ThemeOption = 'light' | 'dark' | 'system'

const themeOptions: { value: ThemeOption; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: '라이트', icon: <IoSunnyOutline className="size-4" /> },
  { value: 'dark', label: '다크', icon: <IoMoonOutline className="size-4" /> },
  { value: 'system', label: '시스템', icon: <IoDesktopOutline className="size-4" /> },
]

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(className || 'hidden size-9 items-center justify-center lg:flex')}>
        <div className="size-4" />
      </div>
    )
  }

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return <IoDesktopOutline className="size-4" />
    }
    return resolvedTheme === 'dark' ? (
      <IoSunnyOutline className="size-4" />
    ) : (
      <IoMoonOutline className="size-4" />
    )
  }

  const getLabel = () => {
    if (theme === 'system') return '시스템 테마'
    return resolvedTheme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경'
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(className || 'hidden size-9 items-center justify-center lg:flex')}
        aria-label="테마 변경"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title={getLabel()}
      >
        {getCurrentIcon()}
      </button>

      {isOpen && (
        <div className="bg-surface-container absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-lg border border-outline-variant py-1 shadow-lg">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value)
                setIsOpen(false)
              }}
              className={cn(
                'flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-surface-container-high',
                theme === option.value && 'bg-surface-container-high text-primary',
              )}
              role="option"
              aria-selected={theme === option.value}
            >
              {option.icon}
              <span>{option.label}</span>
              {theme === option.value && <span className="ml-auto text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
