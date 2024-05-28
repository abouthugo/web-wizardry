'use client'

import { useQuery } from '@tanstack/react-query'

import { getPhotos } from '@/api/photos'

const QUERY_KEY = 'photos'

export function getQueryKey() {
  return [QUERY_KEY]
}

export function useGetPhotos() {
  const query = useQuery({
    queryKey: getQueryKey(),
    queryFn: getPhotos
  })

  return query
}
