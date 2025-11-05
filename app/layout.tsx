import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CardioLife Heart Hospital - Advanced Cardiac Care',
  description: 'Leading heart hospital providing world-class cardiovascular treatment and care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
