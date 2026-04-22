'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#pesquisas',       label: 'Pesquisas' },
  { href: '#faq',             label: 'FAQ' },
  { href: '#depoimentos',     label: 'Depoimentos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
            <img src="/health_logo_hd%202.png" alt="Logo PesquiseMais" className="w-16 h-16 object-contain" />
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://health.pesquisemais.com.br/login"
          className="hidden md:inline-flex items-center cta-gradient text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
        >
          Cadastre-se
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4">
          <div className="space-y-1 mb-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2.5 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="https://health.pesquisemais.com.br/login"
            onClick={() => setOpen(false)}
            className="block cta-gradient text-white text-sm font-semibold text-center py-3 rounded-full"
          >
            Começar Grátis
          </a>
        </div>
      )}
    </header>
  )
}
