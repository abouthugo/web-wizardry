'use client'

export async function preloadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => resolve(src)
    image.onerror = () => reject(new Error(`Failed to load image: ${src}`))
  })
}
