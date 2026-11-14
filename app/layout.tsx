import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import '../style.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayesha Sadiqa | Computer Science Graduate & Developer',
  description: 'Ayesha Sadiqa is a Computer Science graduate exploring software development, web technology, cybersecurity, and AI.',
  generator: 'Ayesha Sadiqa Portfolio',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#fbfaf8',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
