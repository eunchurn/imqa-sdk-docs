'use client'

import type { Doc } from '@/app/[...slug]/DocsContext'
import { TocPDF } from '@/components/mdx/Toc'
import { PDFIcon } from '@/components/ui/icons'
import { useToast } from '@/hooks/use-toast'
import cn from '@/lib/cn'
import fileSaver from 'file-saver'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

interface MainProps {
  doc: Doc
  pdf?: boolean
}

function Page(props: MainProps) {
  const { doc, pdf } = props
  const { toast } = useToast()
  const params = useParams()
  const pathname = usePathname()
  const isPDFPrinting = pathname.startsWith('/mdx-page')
  const [printing, setPrinting] = React.useState(false)
  const handleDownload = React.useCallback(async () => {
    setPrinting(true)
    toast({
      title: 'PDF 생성 중...',
      description: (
        <div className="mt-2">
          <div className="progress-indeterminate bg-secondary h-2 w-full rounded-full" />
        </div>
      ),
      duration: 100000, // Long duration that will be dismissed when complete
    })
    try {
      const data = await fetch('/api/generate-pdf', {
        method: 'POST',
        body: JSON.stringify(params),
      })
      setPrinting(false)
      fileSaver(await data.blob(), `${doc.title}.pdf`)
      toast({
        title: 'PDF 생성 완료',
        description: 'PDF가 다운로드됩니다.',
        duration: 3000,
      })
    } catch {
      toast({
        title: '오류 발생',
        description: 'PDF 생성 중 문제가 발생했습니다.',
        variant: 'destructive',
      })
      setPrinting(false)
    }
  }, [doc.title, params, toast])
  const toc = <TocPDF toc={doc.tableOfContents.filter(({ level }) => level > 0)} />
  return (
    <>
      <header className={cn('mb-6 mt-8 border-b', 'border-outline-variant/50')}>
        <h1 className="mb-2 text-5xl tracking-tighter">{doc.title}</h1>
        <div className="flex justify-between">
          {!!doc?.description?.length && (
            <p className={cn('my-2 text-base leading-5', 'text-on-surface-variant/50')}>
              {doc.description}
            </p>
          )}
          {isPDFPrinting ? null : !pdf ? null : (
            <div className="flex items-center gap-4">
              <button
                // className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 bg-tip-container inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={handleDownload}
                disabled={printing}
              >
                <PDFIcon width={20} printing={printing} />
              </button>
            </div>
          )}
        </div>
      </header>
      {isPDFPrinting ? toc : null}
      {doc ? <>{doc.content}</> : 'empty doc'}
    </>
  )
}

export function Main(props: MainProps) {
  // const { doc, pdf, releases } = props
  return (
    <>
      <Page {...props} />
    </>
  )
}
