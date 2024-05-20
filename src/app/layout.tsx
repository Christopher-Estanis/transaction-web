import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2" lang="pt">
      <Head>
        <title>Centralized Layout</title>
        <meta name="description" content="A simple centralized layout in Next.js with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="flex flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mt-8 rounded-lg bg-white p-8 shadow-md">
          {children}
        </div>
      </body>
    </html>
  )
}
