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
  title: 'Pesquise+Health — Pesquisas Médicas Remuneradas',
  description:
    'Participe de pesquisas médicas remuneradas, contribua com o avanço da medicina e receba pagamentos instantâneos via Pix.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
