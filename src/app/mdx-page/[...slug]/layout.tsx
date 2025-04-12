import { Cover } from '@/components/cover'
import { TocPDF } from '@/components/mdx/Toc'
import cn from '@/lib/cn'
import { getData } from '@/utils/docs'
import type { Props } from '../../[...slug]/layout'
interface MDXPageLayoutProps {
  children: React.ReactNode
}
const NEXT_PUBLIC_LIBNAME = process.env.NEXT_PUBLIC_LIBNAME
const NEXT_PUBLIC_LIBNAME_SHORT = process.env.NEXT_PUBLIC_LIBNAME_SHORT
const NEXT_PUBLIC_LIBNAME_DOTSUFFIX_LABEL = process.env.NEXT_PUBLIC_LIBNAME_DOTSUFFIX_LABEL
const NEXT_PUBLIC_LIBNAME_DOTSUFFIX_HREF = process.env.NEXT_PUBLIC_LIBNAME_DOTSUFFIX_HREF

export default async function MDXPageLayout(props: Props) {
  const { params, children } = props
  const slug = (await params).slug
  const {
    doc: { cover, tableOfContents },
  } = await getData(...slug)
  const toc = <TocPDF toc={tableOfContents.filter(({ level }) => level > 0)} />
  return (
    <div className={`print:bg-white`}>
      <div className="min-h-screen">
        <header className="w-full border-b bg-white print:pb-8">
          {cover ? <Cover kind={cover} /> : null}
          <div className="mx-auto max-w-[850px] px-6 py-8">
            <div className="flex items-center justify-between">
              <span className="font-bold">
                {NEXT_PUBLIC_LIBNAME_SHORT && (
                  <span className="inline lg:hidden">{NEXT_PUBLIC_LIBNAME_SHORT}</span>
                )}
                <span className={cn(NEXT_PUBLIC_LIBNAME_SHORT ? 'hidden' : undefined, 'lg:inline')}>
                  {NEXT_PUBLIC_LIBNAME}
                </span>
                {NEXT_PUBLIC_LIBNAME_DOTSUFFIX_LABEL ? (
                  <span className="font-normal">
                    .
                    {NEXT_PUBLIC_LIBNAME_DOTSUFFIX_HREF ? (
                      <a href={NEXT_PUBLIC_LIBNAME_DOTSUFFIX_HREF}>
                        {NEXT_PUBLIC_LIBNAME_DOTSUFFIX_LABEL}
                      </a>
                    ) : (
                      NEXT_PUBLIC_LIBNAME_DOTSUFFIX_LABEL
                    )}
                  </span>
                ) : null}
              </span>
              <div className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[850px] px-6 py-8">
          <div className="max-w-none print:prose-sm">{children}</div>
        </main>

        <footer className="w-full border-t print:mt-8">
          <div className="mx-auto max-w-[850px] px-6 py-4">
            <div className="text-gray-500 text-center text-sm">
              © {new Date().getFullYear()} ONYCOM. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
