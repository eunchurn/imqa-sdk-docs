import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  return Response.json({
    url: req.nextUrl.toString(),
    searchParams: Object.fromEntries(req.nextUrl.searchParams),
  })
}
