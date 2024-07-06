'use client'

import { ImageLoader } from 'next/image'

export const customImageLoader: ImageLoader = ({ src, width = 600, quality }) => {
  const query = new URLSearchParams()

  const imageOptimizationApi = String(process.env.NEXT_PUBLIC_IMAGE_API)

  if (width) query.set('width', String(width))
  if (quality) query.set('quality', String(quality))

  return `${imageOptimizationApi}/${src}?${query.toString()}`
}