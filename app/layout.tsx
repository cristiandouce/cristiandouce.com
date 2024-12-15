import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cristian Douce',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
} 