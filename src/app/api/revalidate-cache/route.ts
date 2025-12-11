import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify the request is authorized (optional but recommended)
    const authHeader = request.headers.get('authorization')
    const expectedToken = process.env.REVALIDATE_SECRET

    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get tags to revalidate from request body
    const body = await request.json().catch(() => ({}))
    const tags = body.tags || ['github-releases']

    // Revalidate the specified tags
    for (const tag of tags) {
      revalidateTag(tag, { expire: 0 })
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      now: Date.now(),
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Cache revalidation endpoint',
    usage: 'POST with { "tags": ["tag1", "tag2"] }',
  })
}
