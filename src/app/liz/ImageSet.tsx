'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { usePreloadImages } from '@/hooks/use-preload-images'

import { SerifTitle } from '@components/Typography'

import { customImageLoader } from '@lib/imageLoaders'

import CardPlayerControls from './CardPlayerControls'
import CardSkeleton from './CardSkeleton'

const sliderSpeed = 750
const debugPane = false

const isVideo = (src: string) => /\.(mp4|webm)$/.test(src)

const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{ border: '1px solid rgb(255 255 255 / 15%)' }}
    className="text-white w-full h-[500px] sm:h-[700px] sm:max-w-lg sm:mx-auto rounded-3xl relative overflow-hidden"
  >
    {children}
  </div>
)

export default function ImageSet(album: AlbumType) {
  const srcList = album.expand.photos.map(i => i.src)
  const { data, error, isLoading } = usePreloadImages(album)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    setPlaying(!playing)
  }

  useEffect(() => {
    if (!playing) return
    if (isLoading) return
    const timer = setInterval(() => {
      if (index < srcList.length - 1) {
        setIndex(state => state + 1)
      } else {
        setIndex(0)
      }
    }, sliderSpeed)

    return () => {
      clearInterval(timer)
    }
  }, [index, srcList, playing, isLoading])

  if (isLoading) {
    return (
      <Container>
        <CardSkeleton />
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <h1>{error.message}</h1>
      </Container>
    )
  }

  const renderMedia = (src: string, i: number) => {
    const commonClasses = `transition-opacity duration-300 ease-in-out object-cover object-bottom ${src !== srcList[index] ? 'opacity-0' : 'opacity-100'}`

    if (isVideo(src)) {
      return <video key={`${src}-${i}`} src={src} className={commonClasses} autoPlay loop muted />
    }

    return (
      <Image
        key={`${src}-${i}`}
        src={src}
        fill
        loader={customImageLoader}
        sizes="(max-width: 768) 100vw;"
        className={commonClasses}
        alt="some-picture"
      />
    )
  }

  return (
    <Container>
      {data?.map(renderMedia)}
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 bg-gradient-to-t from-[rgba(0,0,0,.45)] pt-8">
        <SerifTitle className="text-5xl">{album.title}</SerifTitle>
        <p className="font-thin text-lg">
          {album.subtitle}
          {debugPane && `::${index}`}
        </p>
      </div>
      <CardPlayerControls onClick={togglePlay} playing={playing} />
    </Container>
  )
}
