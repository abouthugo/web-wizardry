'use client'

import { useQuery } from '@tanstack/react-query'

import { preloadImage } from '@/api/preloadImage'

const QUERY_KEY = 'preloadImages'

type PartialPhoto = Pick<IPhoto, 'title' | 'subTitle'>
export function getQueryKey({ title, subTitle }: PartialPhoto) {
  return [QUERY_KEY, title, subTitle]
}
export function usePreloadImages({ srcList, title, subTitle }: IPhoto) {
  const query = useQuery({
    queryKey: getQueryKey({ title, subTitle }),
    queryFn: () => Promise.all(srcList.map(src => preloadImage(src))),
    retry: 1,
    refetchOnWindowFocus: true
  })

  return query
}
