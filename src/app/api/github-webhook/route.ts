import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify GitHub webhook signature (recommended for production)
    const signature = request.headers.get('x-hub-signature-256')
    const event = request.headers.get('x-github-event')

    if (event !== 'release') {
      return NextResponse.json({ message: 'Event not handled' }, { status: 200 })
    }

    const body = await request.json()

    // Check if it's a release event
    if (body.action === 'published' || body.action === 'created') {
      // Revalidate release data cache
      revalidateTag('github-releases', { expire: 0 })

      console.log(`Revalidated cache for release: ${body.release?.name || body.release?.tag_name}`)

      return NextResponse.json({
        revalidated: true,
        release: body.release?.name || body.release?.tag_name,
      })
    }

    return NextResponse.json({ message: 'No action taken' }, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'GitHub webhook endpoint for release events',
    supported_events: ['release.published', 'release.created'],
  })
}
