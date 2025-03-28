import { Inter } from 'next/font/google'
import Script from 'next/script'

import { cn } from '@/lib/utils'
import QueryProvider from '@/providers/query-provider'

import Footer from '@components/Footer'
import { NavBar } from '@components/NavBar'

import styles from './layout.module.css'

import './output.css'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-dvh">
      <head>
        <Script
          async
          src="https://analytics-v2.abouthugo.dev/script.js"
          data-website-id="e45d1448-d12c-4b40-9be7-4f4c4c772d59"
        />
      </head>
      <QueryProvider>
        <body className="flex min-h-full flex-col">
          <div className={cn(inter.className, styles.base)}>
            <header className="">
              <NavBar />
            </header>
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </body>
      </QueryProvider>
    </html>
  )
}
