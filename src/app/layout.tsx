import '../styles/globals.css'

import { inter } from '@/styles/fonts'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Daniel Rodrigues | Dev Links',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} bg-background text-foreground dark relative flex min-h-screen items-center justify-center font-sans`}
      >
        <div className="absolute inset-0 -z-10 h-auto w-auto">
          <Image
            src="/glow-homepage.webp"
            alt="Background gradient Home Page"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>

        {children}
      </body>
    </html>
  )
}
