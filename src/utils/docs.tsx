import type { Doc, DocToC } from '@/app/[...slug]/DocsContext'
import * as components from '@/components/mdx'
import { rehypeCode } from '@/components/mdx/Code/rehypeCode'
import { Codesandbox1 } from '@/components/mdx/Codesandbox'
import { rehypeCodesandbox } from '@/components/mdx/Codesandbox/rehypeCodesandbox'
import { rehypeDetails } from '@/components/mdx/Details/rehypeDetails'
import { Entries } from '@/components/mdx/Entries'
import { rehypeGha } from '@/components/mdx/Gha/rehypeGha'
import { rehypeImg } from '@/components/mdx/Img/rehypeImg'
import { rehypeSandpack } from '@/components/mdx/Sandpack/rehypeSandpack'
import { rehypeSummary } from '@/components/mdx/Summary/rehypeSummary'
import { rehypeToc } from '@/components/mdx/Toc/rehypeToc'
import resolveMdxUrl from '@/utils/resolveMdxUrl'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'node:fs'
import { dirname } from 'node:path'
import { cache } from 'react'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGFM from 'remark-gfm'
import { ReleaseList } from './release-types'

/**
 * Checks for .md(x) file extension
 */
export const MARKDOWN_REGEX = /\.mdx?/

/**
 * Uncomments frontMatter from vanilla markdown
 */
const FRONTMATTER_REGEX = /^<!--[\s\n]*?(?=---)|(?!---)[\s\n]*?-->/g

/**
 * Removes multi and single-line comments from markdown
 */
const COMMENT_REGEX = /<!--(.|\n)*?-->|<!--[^\n]*?\n/g

/**
 * Removes <https://inline.links> formatting from markdown
 */
const INLINE_LINK_REGEX = /<(http[^>]+)>/g

/**
 * Recursively crawls a directory, returning an array of file paths.
 */
export async function crawl(dir: string, filter?: (dir: string) => boolean, files: string[] = []) {
  if (fs.lstatSync(dir).isDirectory()) {
    const filenames = fs.readdirSync(dir) as string[]
    await Promise.all(filenames.map(async (filename) => crawl(`${dir}/${filename}`, filter, files)))
  } else if (!filter || filter(dir)) {
    files.push(dir)
  }

  return files
}

/**
 * Fetches all docs, filters to a lib if specified.
 *
 * @param root - absolute or relative (to cwd) path to docs folder
 */

const MDX_BASEURL = process.env.MDX_BASEURL

// // TODO Fix this recursive type
// async function getWebAgentSRIHash(content: string) {
//   const regex = /<script[^>]+src=["']([^"']+)["'][^>]*>/
//   const match = content.match(regex)
//   const url = match ? match[1] : null
//   if (!url) return content
//   const sriHash = await getSRIHashIntegrity(url)
//   const updated = content.replace(
//     /integrity=\"\{\{SRI_HASH_INTEGRITY\}\}\"/,
//     `integrity=\"${sriHash}\"`,
//   )
//   return updated.replace(/integrity=\"\{\{SRI_HASH_INTEGRITY\}\}\"/, `integrity=\"${sriHash}\"`)
// }

async function getReleases(releaseUrl?: string): Promise<string | undefined> {
  if (releaseUrl) {
    try {
      // const { data } = await axios.get<ReleaseList>(releaseUrl, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/vnd.github+json',
      //     'X-GitHub-Api-Version': '2022-11-28',
      //     Authorization: `Bearer ${process.env.IDLERECORD_API_RELEASE_TOKEN}`,
      //   },
      // })
      // console.log(data)
      const response = await fetch(releaseUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `Bearer ${process.env.IDLERECORD_API_RELEASE_TOKEN}`,
        },
      })
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`)
        return
      }
      const data = (await response.json()) as ReleaseList
      const source = data.reduce((acc, cur) => {
        if (!cur) return acc
        const { tag_name, name, body } = cur
        const releaseName = name || tag_name
        const releaseBody = body || ''
        return `${acc}\n## ${releaseName}\n ${releaseBody}`
      }, '')
      return source
    } catch (error) {
      console.error('Error fetching release data:', error)
    }
  }
}

async function _getDocs(
  root: string,
  slugOfInterest: string[] | null,
  slugOnly = false,
): Promise<Doc[]> {
  const files = await crawl(
    root,
    (dir) => !dir.includes('node_modules') && MARKDOWN_REGEX.test(dir),
  )

  //
  // 1st pass for `entries`
  //

  const entries = await Promise.all(
    files.map(async (file) => {
      // Get slug from local path
      const path = file.replace(`${root}/`, '')
      const slug = [...path.replace(MARKDOWN_REGEX, '').toLowerCase().split('/')]

      const url = `/${slug.join('/')}`

      //
      // frontmatter
      //

      const str = await fs.promises.readFile(file, { encoding: 'utf-8' })
      const compiled = matter(str)
      const frontmatter = compiled.data

      const _lastSegment = slug[slug.length - 1]
      const title: string = frontmatter.title.trim() ?? _lastSegment.replace(/\-/g, ' ')

      const boxes: string[] = []

      // Sanitize markdown
      let content = compiled.content
        // Remove <!-- --> comments from frontMatter
        .replace(FRONTMATTER_REGEX, '')
        // Remove extraneous comments from post
        .replace(COMMENT_REGEX, '')
        // Remove inline link syntax
        .replace(INLINE_LINK_REGEX, '$1')

      await compileMDX({
        source: content,
        options: {
          mdxOptions: {
            rehypePlugins: [
              rehypeCodesandbox(boxes), // 1. put all Codesandbox[id] into `boxes`
            ],
          },
        },
      })
      // const newContent = await getWebAgentSRIHash(content)
      return {
        slug,
        url,
        title,
        boxes,
        //
        file,
        // content: newContent,
        content,
        frontmatter,
      }
    }),
  )

  //
  // 2nd pass for `docs`
  //

  const docs = await Promise.all(
    entries.map(async ({ slug, url, title, boxes, file, content, frontmatter }) => {
      const relFilePath = file.substring(root.length) // "/getting-started/tutorials/store.mdx"
      //
      // "Lightest" version of the doc (for `generateStaticParams`)
      //

      if (slugOnly) {
        return { slug } as Doc
      }

      //
      // Common infos (for every `docs`)
      //

      // editURL
      const EDIT_BASEURL = process.env.EDIT_BASEURL
      const editURL = EDIT_BASEURL?.length ? file.replace(root, EDIT_BASEURL) : undefined

      //
      // frontmatter
      //

      const description: string = frontmatter.description ?? ''

      const sourcecode: string = frontmatter.sourcecode ?? ''
      const SOURCECODE_BASEURL = process.env.SOURCECODE_BASEURL
      const sourcecodeURL = SOURCECODE_BASEURL?.length
        ? `${SOURCECODE_BASEURL}/${sourcecode}`
        : undefined

      const nav: number = frontmatter.nav ?? Infinity

      const frontmatterImage: string | undefined = frontmatter.image
      const srcImage = frontmatterImage || process.env.LOGO
      const image: string = srcImage ? resolveMdxUrl(srcImage, relFilePath, MDX_BASEURL) : ''

      //
      // MDX content
      //

      // Skip docs other than `slugOfInterest` -- better perfs)
      // if (JSON.stringify(slug) !== JSON.stringify(slugOfInterest)) {
      //   return {
      //     slug,
      //     url,
      //     editURL,
      //     title,
      //     description,
      //     nav,
      //   } as Doc
      // }

      //
      // inline images
      //
      const releases = await getReleases(frontmatter.release)
      const tableOfContents: DocToC[] = []
      const isCompilalble = await (async () => {
        if (releases) {
          try {
            await compileMDX({
              source: releases,
              options: {
                mdxOptions: {
                  remarkPlugins: [remarkGFM],
                  rehypePlugins: [
                    rehypeImg(relFilePath, MDX_BASEURL),
                    rehypeDetails,
                    rehypeSummary,
                    rehypeGha,
                    rehypePrismPlus,
                    rehypeCode(),
                    rehypeSandpack(dirname(file)),
                  ],
                },
              },
            })
            return true
          } catch (error) {
            console.error('Error compiling MDX:', error)
            return false
          }
        } else {
          return true
        }
      })()
      const { content: jsx } = await compileMDX({
        source: releases
          ? isCompilalble
            ? `# ${title}\n ${content}\n ${releases}`
            : `# ${title}\n ${content}\n Error: Release notes are not compilable right now`
          : `# ${title}\n ${content}`,
        options: {
          mdxOptions: {
            remarkPlugins: [remarkGFM],
            rehypePlugins: [
              rehypeImg(relFilePath, MDX_BASEURL),
              rehypeDetails,
              rehypeSummary,
              rehypeGha,
              rehypePrismPlus,
              rehypeCode(),
              rehypeSandpack(dirname(file)),
              rehypeToc(tableOfContents, url, title),
            ],
          },
        },
        // @ts-ignore
        components: {
          ...components,
          // ...actualComponents,
          Codesandbox: (props) => <Codesandbox1 {...props} boxes={boxes} />,
          Entries: () => <Entries items={entries} />,
        },
      }).catch((error) => {
        console.error('Error compiling MDX:', error)
        console.log(releases)
        return { content: '' }
      })
      return {
        slug,
        url,
        editURL,
        sourcecode,
        sourcecodeURL,
        title,
        image,
        description,
        nav,
        content: jsx,
        boxes,
        tableOfContents,
        pdf: frontmatter.pdf,
        cover: frontmatter.cover,
        // releases,
        // releaseJsx: releases ? await getReleaseJsx(releases) : undefined,
      }
    }),
  )

  return docs.sort((a, b) => a.nav - b.nav)
}
// export const getDocs = pMemoize(_getDocs, { cacheKey: ([lib]) => lib })
export const getDocs = cache(_getDocs)

// export const getDocs = cache(_getDocs)

async function _getData(...slug: string[]) {
  const { MDX } = process.env
  if (!MDX) throw new Error('MDX env var not set')

  const docs = await getDocs(MDX, slug)

  const url = `/${slug.join('/')}`.toLowerCase()
  const doc = docs.find((doc) => doc.url === url)

  if (!doc) throw new Error(`Doc not found: ${url}`)

  return { docs, doc }
}
export const getData = cache(_getData)
