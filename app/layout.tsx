import './output.css'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import QueryProvider from '@/providers/query-provider'

import Footer from '@components/Footer'
import { NavBar } from '@components/NavBar'

import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-dvh">
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
