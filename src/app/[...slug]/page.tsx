import { Main } from '@/components/main'
import { getData, getDocs } from '@/utils/docs'

export type Props = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata(props: Props) {
  const { params } = props
  const slug = (await params).slug
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
  const slug = (await params).slug
  const { doc } = await getData(...slug) // [ 'getting-started', 'introduction' ]
  return <Main doc={doc} pdf={doc.pdf} />
}

export async function generateStaticParams() {
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
