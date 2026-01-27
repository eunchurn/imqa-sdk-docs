import cn from '@/lib/cn'
import { ComponentProps } from 'react'

import sizeOf from 'image-size'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'path'

export async function Img({
  src,
  width,
  height,
  alt = '',
  className,
  ...props
}: ComponentProps<'img'>) {
  const dims = {
    width,
    height,
  }

  //
  // If image is from MDX folder, we can determine its dimensions
  //

  if (process.env.MDX_BASEURL && (src as string).startsWith(process.env.MDX_BASEURL)) {
    const path = resolve((src as string).replace(process.env.MDX_BASEURL, process.env.MDX!))
    if (existsSync(path)) {
      try {
        const buffer = readFileSync(path)
        const dimensions = sizeOf(buffer)
        const w = dimensions?.width
        const h = dimensions?.height
        const ratio = w && h ? w / h : undefined

        // If only one dimension is provided, calculate the other based on the image's aspect ratio
        dims.width ??= height && ratio ? Math.round(Number(height) * ratio) : w
        dims.height ??= width && ratio ? Math.round(Number(width) / ratio) : h
      } catch {
        // Failed to determine image dimensions, use provided values or defaults
      }
    }
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      decoding="async"
      loading="eager"
      alt={alt}
      className={cn('bg-surface-container inline-block rounded-lg', className)}
      {...dims}
      {...props}
    />
  )
}
