import chromium from '@sparticuz/chromium'
import puppeteer, { type Browser } from 'puppeteer'
import puppeteerCore, { type Browser as BrowserCore } from 'puppeteer-core'

chromium.setGraphicsMode = false

export const maxDuration = 60

export async function POST(req: Request) {
  try {
    let browser: Browser | BrowserCore | null = null
    if (process.env.NODE_ENV === 'production') {
      browser = await puppeteerCore.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        defaultViewport: chromium.defaultViewport,
        headless: chromium.headless,
        // headless: 'shell', // headless 모드 사용
      })
    } else if (process.env.NODE_ENV === 'development') {
      browser = await puppeteer.launch({
        headless: 'shell',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      })
    }
    if (!browser) {
      throw new Error('브라우저 생성 실패')
    }
    const page = await browser.newPage()
    const url = new URL(req.url)
    const { slug } = (await req.json()) as { slug: string[] }

    const targetURL = `${url.origin}/mdx-page/${slug.join('/')}`
    await page.goto(targetURL, { waitUntil: 'networkidle0' })

    // PDF 생성
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // Tailwind 스타일 유지
    })

    await browser.close()

    // PDF 반환
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=mdx-output.pdf',
      },
    })
  } catch (error) {
    console.error('PDF 생성 오류:', error)
    return new Response(JSON.stringify({ error: 'PDF 생성 실패' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
