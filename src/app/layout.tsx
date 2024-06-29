import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '../components/Sidebar'
import Toggle from '../components/Toggle/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app ">
          <Sidebar />
          <Toggle className="fixed bottom-4 right-10 z-10 cursor-pointer lg:absolute lg:right-8 lg:top-8 lg:z-50" />
          <main className="mx-auto max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:max-w-7xl lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
