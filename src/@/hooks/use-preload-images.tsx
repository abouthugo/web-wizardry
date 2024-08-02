'use client'

import { useQuery } from '@tanstack/react-query'

import { preloadImage } from '@/api/preloadImage'

const QUERY_KEY = 'preloadImages'

type PartialPhoto = Pick<AlbumType, 'title' | 'subtitle'>
export function getQueryKey({ title, subtitle }: PartialPhoto) {
  return [QUERY_KEY, title, subtitle]
}
export function usePreloadImages({ expand, title, subtitle }: AlbumType) {
  const query = useQuery({
    queryKey: getQueryKey({ title, subtitle }),
    queryFn: () => Promise.all(expand.photos.map(photo => preloadImage(photo.src))),
    retry: 1,
    refetchOnWindowFocus: true
  })

  return query
}
