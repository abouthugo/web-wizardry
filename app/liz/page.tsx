import type { Metadata } from 'next'

import BigCountdown from './BigCountdown'
import CardPlayer from './CardPlayer'
import ClientMessage from './ClientMessage'
import Counter from './Counter'

export const metadata: Metadata = {
  title: 'H&E',
  description: 'A love story',
  openGraph: {
    title: 'H&E',
    description: 'A love story',
    images: [
      {
        url: 'https://storage.googleapis.com/wizard-cdn-core/web-prev-liz.jpg',
        width: 1200,
        height: 630,
        alt: 'preview-page'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function LizPage() {
  return (
    <div className="pt-8">
      <Counter />
      <CardPlayer />
      <ClientMessage />
      <BigCountdown />
    </div>
  )
}
