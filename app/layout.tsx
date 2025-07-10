import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sahayak',
  description: 'Sahayak',
  generator: 'Sahayak',
  icons: {
    icon: '/favicon2.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
