import chromium from '@sparticuz/chromium'
import { type Browser, executablePath } from 'puppeteer'
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
      })
    } else {
      console.log(executablePath())
      console.log(chromium.defaultViewport)
      browser = await puppeteerCore.launch({
        executablePath: executablePath(),
        // defaultViewport: chromium.defaultViewport,
        // executablePath: await chromium.executablePath(
        //   path.resolve(process.cwd(), './node_modules/@sparticuz/chromium/bin'),
        // ),
        // defaultViewport: chromium.defaultViewport,
        // headless: false,
        headless: 'shell',
        // args: ['--no-sandbox', '--disable-setuid-sandbox'],
        args: [
          //   '--allow-pre-commit-input',
          //   '--disable-background-networking',
          //   '--disable-background-timer-throttling',
          //   '--disable-backgrounding-occluded-windows',
          //   '--disable-breakpad',
          //   '--disable-client-side-phishing-detection',
          //   '--disable-component-extensions-with-background-pages',
          //   '--disable-component-update',
          //   '--disable-default-apps',
          //   '--disable-dev-shm-usage',
          //   '--disable-extensions',
          //   '--disable-hang-monitor',
          //   '--disable-ipc-flooding-protection',
          //   '--disable-popup-blocking',
          //   '--disable-prompt-on-repost',
          //   '--disable-renderer-backgrounding',
          //   '--disable-sync',
          //   '--enable-automation',
          //   '--enable-blink-features=IdleDetection',
          //   '--export-tagged-pdf',
          //   '--force-color-profile=srgb',
          //   '--metrics-recording-only',
          //   '--no-first-run',
          //   '--password-store=basic',
          //   '--use-mock-keychain',
          //   '--disable-domain-reliability',
          //   '--disable-print-preview',
          //   '--disable-speech-api',
          //   '--disk-cache-size=33554432',
          //   '--mute-audio',
          //   '--no-default-browser-check',
          //   '--no-pings',
          //   '--single-process',
          '--font-render-hinting=none',
          //   '--disable-features=Translate,BackForwardCache,AcceptCHFrame,MediaRouter,OptimizationHints,AudioServiceOutOfProcess,IsolateOrigins,site-per-process',
          //   '--enable-features=NetworkServiceInProcess2,SharedArrayBuffer',
          //   '--hide-scrollbars',
          //   '--ignore-gpu-blocklist',
          //   '--in-process-gpu',
          //   '--window-size=1920,1080',
          //   '--disable-webgl',
          //   '--allow-running-insecure-content',
          //   '--disable-setuid-sandbox',
          //   '--disable-site-isolation-trials',
          //   '--disable-web-security',
          '--no-sandbox',
          //   '--no-zygote',
        ],
      })
    }
    console.log({ browser })
    if (!browser) {
      throw new Error('브라우저 생성 실패')
    }
    const page = await browser.newPage()
    console.log({ page })
    const url = new URL(req.url)
    const { slug } = (await req.json()) as { slug: string[] }

    const targetURL = `${url.origin}/mdx-page/${slug.join('/')}`
    await page.goto(targetURL, { waitUntil: 'networkidle0' })

    // PDF 생성
    const pdfBuffer = await page.pdf({
      format: 'A3',
      printBackground: true, // Tailwind 스타일 유지
      preferCSSPageSize: true,
    })

    // await browser.close()

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
