import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Content Freshness Alerter — Alert When Content Becomes Outdated',
  description: 'Monitor blog posts, docs, and marketing content for outdated information using AI. Get automated alerts when your content needs updating.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c466deac-d157-4ff4-9492-c172c759a61b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
