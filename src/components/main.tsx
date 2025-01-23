'use client'

import type { Doc } from '@/app/[...slug]/DocsContext'
import cn from '@/lib/cn'

interface MainProps {
  doc: Doc
}

function Page(props: MainProps) {
  const { doc } = props
  return (
    <>
      <header className={cn('mb-6 mt-8 border-b', 'border-outline-variant/50')}>
        <h1 className="mb-2 text-5xl tracking-tighter">{doc.title}</h1>
        {!!doc?.description?.length && (
          <p className={cn('my-2 text-base leading-5', 'text-on-surface-variant/50')}>
            {doc.description}
          </p>
        )}
      </header>
      {doc ? <>{doc.content}</> : 'empty doc'}
    </>
  )
}

export function Main(props: MainProps) {
  const { doc } = props
  const Test = () => (
    <main>
      <h1>Hello</h1>
      <h2>world</h2>
      <p>this is paragraph</p>
    </main>
  )
  // ReactPDF.render(<Page doc={doc} />, `test.pdf`)
  return (
    <>
      <Page doc={doc} />
      {/* <PdfExporterNode><Test /></PdfExporterNode> */}
      {/* <PdfExporter content={''} /> */}
    </>
  )
}
