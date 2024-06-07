import type { Metadata } from 'next'

import HeroSection from '@components/HeroSection'

import PastExperienceSection from './PastExperience'

export const metadata: Metadata = {
  title: 'Hugo Perdomo',
  description: 'Software developer based in the Philly area',
  openGraph: {
    title: 'Hugo Perdomo',
    description: 'Software developer based in the Philly area',
    images: [
      {
        url: 'https://storage.googleapis.com/wizard-cdn-core/web-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'preview-page'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-full min-w-0 py-0 md:py-14 md:mb-6">
        <HeroSection />
      </div>
      <PastExperienceSection />
    </>
  )
}
