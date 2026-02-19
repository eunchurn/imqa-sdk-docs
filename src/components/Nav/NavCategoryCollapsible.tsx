'use client'

import { Doc } from '@/app/[...slug]/DocsContext'
import cn from '@/lib/cn'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ComponentProps, useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import Link from 'next/link'

const INDEX_PAGE = 'introduction'
const isDev = process.env.NODE_ENV === 'development'

export function NavCategoryCollapsible({
  category,
  docs,
  asPath,
}: {
  category: string
  docs: Record<string, Doc>
  asPath: string
}) {
  const docsEntries = Object.entries(docs)

  const docIndexEntry = docsEntries.find(([page]) => page === INDEX_PAGE)
  const categoryHref = docIndexEntry ? docIndexEntry[1].url : docsEntries[0][1].url

  const [open, setOpen] = useState(docsEntries.some(([, doc]) => doc.url === `/${asPath}`))

  useEffect(() => {
    const dur = '.2s'
    document.documentElement.style.setProperty('--collapsible-down-duration', dur)
    document.documentElement.style.setProperty('--collapsible-up-duration', dur)
  }, [])

  const nonIndexItems = docsEntries.filter(([page]) => page !== INDEX_PAGE)
  const rootTitle = docIndexEntry ? docIndexEntry[1].title : null
  return (
    <Collapsible.Root
      className={cn(
        'text-sm [--NavItem-pad:.75rem] [--arrow-size:theme(spacing.4)]',
        !docsEntries.some(([, doc]) => doc.url === `/${asPath}`) && 'opacity-50 dark:opacity-75',
      )}
      open={open}
      onOpenChange={setOpen}
    >
      <div className="relative">
        <NavItem
          href={categoryHref}
          className={cn('tracking-wide', 'flex items-center gap-3')}
          active={docIndexEntry && categoryHref === `/${asPath}`}
        >
          {rootTitle ?? category.replace(/\-/g, ' ')}
        </NavItem>
        {nonIndexItems.length > 0 && (
          <Collapsible.Trigger
            asChild
            className={cn('absolute right-0 top-1/2 transition-transform', open && 'rotate-90')}
          >
            <div className="-translate-y-1/2 p-[--NavItem-pad]">
              <IoIosArrowDown className="size-[--arrow-size] -rotate-90" />
            </div>
          </Collapsible.Trigger>
        )}
      </div>

      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <ul>
          {nonIndexItems.map(([page, doc]) => (
            <li key={page}>
              <NavItem href={doc.url} active={doc.url === `/${asPath}`} className="text-xs">
                <span className="flex items-center gap-2">
                  {doc.title}
                  {isDev && doc.draft && (
                    <span className="bg-yellow-100 text-yellow-800 inline-flex items-center rounded px-1 py-0.5 text-[10px] font-medium">
                      DRAFT
                    </span>
                  )}
                </span>
              </NavItem>
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

function NavItem({
  children,
  className,
  active,
  ...props
}: {
  active?: boolean
} & ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        'block cursor-pointer rounded-r-xl p-[--NavItem-pad] pl-[--rgrid-m] pr-[calc(2*var(--NavItem-pad)+var(--arrow-size))]',
        active ? 'interactive-bg-primary-container' : 'bg-surface',
        // 'interactive-bg-surface',
        // 'bg-white',
        className,
      )}
    >
      {children}
    </Link>
  )
}
