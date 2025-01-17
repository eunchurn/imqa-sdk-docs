import cn from '@/lib/cn'
import { getData, getDocs } from '@/utils/docs'

export type Props = {
  params: { slug: string[] }
}

export async function generateMetadata({ params }: Props) {
  const slug = params.slug

  const { doc } = await getData(...slug)

  const title = `${doc.title} - ${process.env.NEXT_PUBLIC_LIBNAME}`
  const description = doc.description
  const url = doc.url
  const image = doc.image

  return {
    title,
    description,
    openGraph: {
      title,
      images: [{ url: image }],
      description,
      url,
      type: 'article',
    },
  }
}

export default async function Page({ params }: Props) {
  // console.log('page', params)

  const slug = params.slug

  const { doc } = await getData(...slug) // [ 'getting-started', 'introduction' ]

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

export async function generateStaticParams() {
  // console.log('generateStaticParams')

  // return [
  //   { slug: ['getting-started', 'authoring'] },
  //   { slug: ['getting-started', 'github-actions'] },
  //   { slug: ['getting-started', 'introduction'] },
  //   { slug: ['getting-started', 'real-user-monitoring'] },
  //   { slug: ['licenses', 'opensources'] },
  //   { slug: ['network-and-security', 'onpremise-vm'] },
  //   { slug: ['opentelemetry', 'glossary'] },
  //   { slug: ['web-agent', 'api'] },
  //   { slug: ['web-agent', 'installation'] },
  //   { slug: ['web-agent', 'web-agent'] },
  // ]

  const MDX = process.env.MDX
  if (!MDX) {
    console.warn('MDX env var not set')
    return []
  }

  const docs = await getDocs(MDX, null, true)
  const paths = docs.map(({ slug }) => ({ slug }))
  return paths
}
