'use client'

const ENDPOINT = String(process.env.NEXT_PUBLIC_PHOTO_ENDPOINT)

export async function getPhotos() {
  const url = new URL(ENDPOINT)
  url.searchParams.append('expand', 'photos')
  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const data = (await response.json()) as PocketbaseResponseWrapper<AlbumType>
  return data.items
}
