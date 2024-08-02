'use client'

import { useGetPhotos } from '@/hooks/use-get-photos'

import CardSkeleton from './CardSkeleton'
import ImageSet from './ImageSet'

const LoadingSkeleton = () => {
  return (
    <div
      style={{ border: '1px solid rgb(255 255 255 / 15%)' }}
      className="text-white w-full h-[500px] sm:h-[700px] sm:max-w-lg sm:mx-auto rounded-3xl relative overflow-hidden"
    >
      <CardSkeleton />
    </div>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-2 px-1 mx-auto mt-12 mb-4">{children}</div>
)

export default function CardPlayer() {
  const { isPending, isError, data } = useGetPhotos()

  if (isPending)
    return (
      <Container>
        <LoadingSkeleton />
        <LoadingSkeleton />
      </Container>
    )

  if (isError)
    return (
      <Container>
        <div>Error happened</div>
      </Container>
    )

  return (
    <Container>
      {data.map(album => {
        return <ImageSet key={album.id} {...album} />
      })}
    </Container>
  )
}
