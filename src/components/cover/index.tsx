'use client'

import cn from '@/lib/cn'
import Image from 'next/image'
import { Card, CardContent } from './card'

interface CoverProps {
  kind: 'android' | 'ios' | 'web' | 'user-guide' | 'admin-guide'
}

interface Assets {
  subtitle: string
  background: string
  clipBackground: string
  onycom: string
  imqa: string
  q: string
  x: string
  clip: string
  clipOffset: string
  typo: string
  typoWidth: string
}

const getAssets = (kind: CoverProps['kind']): Assets => {
  switch (kind) {
    case 'android':
      return {
        subtitle: '설치 가이드',
        background: 'bg-[url(/cover/bg-sdk.svg)]',
        clipBackground: 'bg-[url(/cover/bg-sdk-clip.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        clip: '/cover/android-clip.svg',
        clipOffset: '',
        typo: '/cover/android-sdk-typo.svg',
        typoWidth: 'w-[60%]',
      }
    case 'ios':
      return {
        subtitle: '설치 가이드',
        background: 'bg-[url(/cover/bg-sdk.svg)]',
        clipBackground: 'bg-[url(/cover/bg-sdk-clip.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        clip: '/cover/ios-sdk-clip.svg',
        clipOffset: '',
        typo: '/cover/ios-sdk-typo.svg',
        typoWidth: 'w-[60%]',
      }
    case 'web':
      return {
        subtitle: '설치 가이드',
        background: 'bg-[url(/cover/bg-sdk.svg)]',
        clipBackground: 'bg-[url(/cover/bg-sdk-clip.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        clip: '/cover/web-agent-clip.svg',
        clipOffset: '',
        typo: '/cover/web-agent-typo.svg',
        typoWidth: 'w-[60%]',
      }
    case 'user-guide':
      return {
        subtitle: '사용자 가이드',
        background: 'bg-[url(/cover/bg-user-guide.svg)]',
        clipBackground: '',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        clip: '/cover/user-guide-clip.svg',
        clipOffset: 'top-[2%]',
        typo: '/cover/user-guide-typo.svg',
        typoWidth: 'w-[45%]',
      }
    case 'admin-guide':
      return {
        subtitle: '관리자 가이드',
        background: 'bg-[url(/cover/bg-admin-guide.svg)]',
        clipBackground: 'bg-[url(/cover/bg-admin-guide-clip.svg)]',
        onycom: '/cover/onycom.svg',
        imqa: '/cover/imqa.svg',
        q: '/cover/q.svg',
        x: '/cover/x.svg',
        clip: '/cover/admin-guide-clip.svg',
        clipOffset: 'left-[14%]',
        typo: '/cover/admin-guide-typo.svg',
        typoWidth: 'w-[50%]',
      }
  }
}
export function Cover({ kind }: CoverProps) {
  const {
    subtitle,
    background,
    clipBackground,
    onycom,
    imqa,
    q,
    x,
    clip,
    clipOffset,
    typo,
    typoWidth,
  } = getAssets(kind)
  return (
    <div className="flex min-h-screen w-full flex-row justify-center bg-transparent">
      <Card className="aspect-[1/1.414] w-full max-w-[1200px] border-0">
        <CardContent
          className={cn(['relative h-full w-full', background, 'bg-cover bg-center p-0'])}
        >
          <div className="absolute bottom-[17%] left-[10%] whitespace-nowrap text-[clamp(2em,4vw,48px)] font-normal leading-[1.2] tracking-[0] text-[#8080ff]">
            {subtitle}
          </div>

          <p className="absolute bottom-[12%] left-[10%] text-[clamp(0.8em,1.8vw,21.6px)] font-normal leading-[normal] tracking-[0] text-white">
            Copyright © 2024-{new Date().getFullYear()} by ONYCOM. Inc. All Rights Reserved.
          </p>

          <div className="absolute bottom-[5%] left-[10%] w-[48%]">
            <p className="text-[clamp(0.8em,1.8vw,21.6px)] font-normal leading-[1.5] tracking-[0] text-white">
              본 문서는 어니컴(주)이 발행하는 문서이며 저작권법에 의해 보호를 받는 저작물이므로
              발행처의 허가 없이 무단 전재나 복제를 금합니다 .
            </p>

            {/* <p className="mt-1 text-[1.8vh] font-normal leading-[1.5] tracking-[0] text-white">
              보호를 받는 저작물이므로 발행처의 허가 없이 무단 전재나 복제를 금합니다 .
            </p> */}
          </div>

          <Image
            className={cn(['absolute bottom-[25%] left-[10%] h-auto', typoWidth])}
            alt="sdk-typo"
            src={typo}
            width={800}
            height={200}
            unoptimized
          />

          <div className="absolute left-[10%] top-[6%] w-[23%]">
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

          <div
            className={cn([
              'absolute left-[10%] top-[9%] h-[55%] w-[80%]',
              clipBackground,
              'bg-cover bg-center',
            ])}
          >
            <Image
              className={cn(['absolute top-[3%] h-[96%] w-full', clipOffset])}
              alt="clip"
              src={clip}
              width={1000}
              height={600}
              unoptimized
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
