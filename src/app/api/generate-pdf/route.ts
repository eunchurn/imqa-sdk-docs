import puppeteer from 'puppeteer'

export async function POST(req: Request) {
  try {
    const browser = await puppeteer.launch({
      headless: 'shell', // headless 모드 사용
    })
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
