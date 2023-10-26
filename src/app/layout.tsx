import '../styles/globals.css'

import { BackgroundImage } from '@/components/background-image'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { inter } from '@/styles/fonts'
import { Analytics } from '@vercel/analytics/react'
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
          'relative flex h-[100dvh] items-center justify-center bg-background font-sans text-foreground',
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute right-6 top-6">
            <ModeToggle />
          </div>

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

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
