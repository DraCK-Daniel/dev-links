import { cn } from '@/lib/utils'
import '../styles/globals.css'

import { BackgroundImage } from '@/components/background-image'
import { inter } from '@/styles/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Rodrigues | Dev Links',
  description: 'Page to list all social links',
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'dark relative flex min-h-screen items-center justify-center bg-background font-sans text-foreground',
          inter.variable,
        )}
      >
        <BackgroundImage
          src="/glow-homepage-mobile.webp"
          className="md:hidden"
        />
        <BackgroundImage
          src="/glow-homepage-tablet.webp"
          className="hidden md:block lg:hidden"
        />
        <BackgroundImage
          src="/glow-homepage.webp"
          className="hidden lg:block"
        />

        {children}
      </body>
    </html>
  )
}
