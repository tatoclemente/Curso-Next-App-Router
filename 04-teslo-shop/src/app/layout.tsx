import type { Metadata } from 'next'
import { inter } from '@/config/fonts'

import './globals.css'


export const metadata: Metadata = {
  title: 'Teslo | Shop',
  description: 'Tienda virtal de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
