import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'P+ Health — Pesquisas Médicas Remuneradas',
  description:
    'Participe de pesquisas médicas remuneradas, contribua com o avanço da medicina e receba pagamentos instantâneos via Pix.',
  icons: {
    icon: '/health_logo_hd%202.png',
    shortcut: '/health_logo_hd%202.png',
    apple: '/health_logo_hd%202.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className={inter.className}>
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  )
}
