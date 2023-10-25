import { JetBrains_Mono as FontMono, Inter as FontSans } from 'next/font/google'

export const inter = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const jetBrains = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})
