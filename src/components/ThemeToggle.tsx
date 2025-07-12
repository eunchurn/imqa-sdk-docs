'use client'

import cn from '@/lib/cn'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(className || 'hidden size-9 items-center justify-center lg:flex')}>
        <div className="size-4" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(className || 'hidden size-9 items-center justify-center lg:flex')}
      aria-label="테마 변경"
      title={theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경'}
    >
      {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  )
}
