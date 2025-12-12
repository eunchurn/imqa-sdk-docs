'use client'

import cn from '@/lib/cn'
import Image from 'next/image'
import { Card, CardContent } from './card'

interface CoverProps {
  kind: 'android' | 'ios' | 'web' | 'user-guide' | 'admin-guide'
}

interface Assets {
  background: string
  onycom: string
  imqa: string
  q: string
  x: string
  typo: string
  typoWidth: string
}

const getAssets = (kind: CoverProps['kind']): Assets => {
  switch (kind) {
    case 'android':
      return {
        background: 'bg-[url(/cover/bg-android-sdk.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        typo: '/cover/android-sdk-typo.svg',
        typoWidth: 'w-[80%]',
      }
    case 'ios':
      return {
        background: 'bg-[url(/cover/bg-ios-sdk.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        typo: '/cover/ios-sdk-typo.svg',
        typoWidth: 'w-[80%]',
      }
    case 'web':
      return {
        background: 'bg-[url(/cover/bg-web-agent.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        typo: '/cover/web-agent-typo.svg',
        typoWidth: 'w-[80%]',
      }
    case 'user-guide':
      return {
        background: 'bg-[url(/cover/bg-user-guide.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        typo: '/cover/user-guide-typo.svg',
        typoWidth: 'w-[80%]',
      }
    case 'admin-guide':
      return {
        background: 'bg-[url(/cover/bg-admin-guide.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        typo: '/cover/admin-guide-typo.svg',
        typoWidth: 'w-[80%]',
      }
  }
}
export function Cover({ kind }: CoverProps) {
  const { background, onycom, imqa, q, x, typo, typoWidth } = getAssets(kind)
  return (
    <div className="flex min-h-screen w-full flex-row justify-center bg-transparent">
      <Card className="aspect-[1/1.414] w-full max-w-[1200px] border-0">
        <CardContent
          className={cn(['relative h-full w-full', background, 'bg-cover bg-center p-0'])}
        >
          <p className="absolute bottom-[9%] left-[6.5%] text-[clamp(0.8em,1.3vw,16px)] font-normal leading-[normal] tracking-[0] text-white">
            Copyright © 2024-{new Date().getFullYear()} by ONYCOM. Inc. All Rights Reserved.
          </p>

          <div className="absolute bottom-[4.8%] left-[6.5%] w-[50%]">
            <p className="text-[clamp(0.8em,1.3vw,16px)] font-normal leading-[1.5] tracking-[0] text-white">
              본 문서는 어니컴(주)이 발행하는 문서이며 저작권법에 의해 보호를 받는 저작물이므로
              발행처의 허가 없이 무단 전재나 복제를 금합니다 .
            </p>
          </div>

          <Image
            className={cn(['absolute left-[6.5%] top-[4.7%] h-auto', typoWidth])}
            alt="sdk-typo"
            src={typo}
            width={970}
            height={300}
            unoptimized
          />

          <div className="absolute bottom-[6%] right-[6.5%] w-[24%]">
            <div className="relative">
              <Image
                className="absolute left-[44%] top-1 h-[10px] w-[10px]"
                alt="Vector"
                src={x}
                width={10}
                height={10}
                unoptimized
              />

              <div className="relative w-full">
                <Image
                  className="absolute right-0 top-[3px] h-auto w-[47%]"
                  alt="svg"
                  src={onycom}
                  width={200}
                  height={50}
                  unoptimized
                />

                <div className="absolute left-0 w-[37%]">
                  <Image
                    className="h-auto w-[21%]"
                    alt="q"
                    src={q}
                    width={50}
                    height={50}
                    unoptimized
                  />

                  <Image
                    className="absolute right-0 top-[2px] h-auto w-[65%]"
                    alt="imqa"
                    src={imqa}
                    width={150}
                    height={50}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
