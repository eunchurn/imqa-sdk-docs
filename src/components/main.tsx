'use client'

import type { Doc } from '@/app/[...slug]/DocsContext'
import cn from '@/lib/cn'
import fileSaver from 'file-saver'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

interface MainProps {
  doc: Doc
}

function Page(props: MainProps) {
  const { doc } = props
  const params = useParams()
  const pathname = usePathname()
  const isPDFPrinting = pathname.startsWith('/mdx-page')
  const handleDownload = React.useCallback(async () => {
    const data = await fetch('/api/generate-pdf', {
      method: 'POST',
      body: JSON.stringify(params),
    })
    fileSaver(await data.blob(), `${doc.title}.pdf`)
  }, [])

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
          {isPDFPrinting ? null : (
            <div className="flex items-center gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 bg-tip-container inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={handleDownload}
              >
                PDF Download
              </button>
            </div>
          )}
        </div>
      </header>
      {doc ? <>{doc.content}</> : 'empty doc'}
    </>
  )
}

export function Main(props: MainProps) {
  const { doc } = props
  return (
    <>
      <Page doc={doc} />
    </>
  )
}
