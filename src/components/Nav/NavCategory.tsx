import { Doc } from '@/app/[...slug]/DocsContext'
import cn from '@/lib/cn'
import Link from 'next/link'
import { ComponentProps } from 'react'

const INDEX_PAGE = 'introduction'
const isDev = process.env.NODE_ENV === 'development'

export function NavCategory({
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

  const nonIndexItems = docsEntries.filter(([page]) => page !== INDEX_PAGE)
  const rootTitle = docIndexEntry ? docIndexEntry[1].title : null
  return (
    <div
      className={cn(
        'text-sm',
        // !docsEntries.some(([, doc]) => doc.url === `/${asPath}`) && 'opacity-50',
      )}
    >
      <div className="relative">
        <NavItem
          href={categoryHref}
          className={cn('font-bold tracking-wide', 'flex items-center gap-3')}
          active={docIndexEntry && categoryHref === `/${asPath}`}
        >
          {rootTitle ?? category.replace(/\-/g, ' ')}
        </NavItem>
      </div>

      <ul>
        {nonIndexItems.map(([page, doc]) => {
          return (
            <li key={page}>
              <NavItem href={doc.url} active={doc.url === `/${asPath}`} className="pl-10 text-xs">
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
          )
        })}
      </ul>
    </div>
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
        'block cursor-pointer p-3 pl-8',
        active ? 'bg-primary-container' : 'interactive-bg-surface',
        className,
      )}
    >
      {children}
    </Link>
  )
}
