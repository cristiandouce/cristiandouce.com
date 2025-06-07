import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Viewport } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}
export const metadata = {
  title: {
    template: '%s | Cristian Douce',
    default: 'Cristian Douce',
  },
  description: 'Cristian Douce - Full-stack engineer from Buenos Aires, Argentina',
  icons: {
    icon: '/img/icons/moon.ico',
    apple: '/img/icons/moon-180-v.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 