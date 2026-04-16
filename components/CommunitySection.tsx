'use client'

import { useRef } from 'react'

const researchers = [
  { seed: 'doc-1', name: 'Dr. Ricardo Alves',   specialty: 'Cardiologista',    institution: 'USP',      studies: 12 },
  { seed: 'doc-2', name: 'Dra. Cláudia Santos', specialty: 'Oncologista',      institution: 'FMUSP',    studies: 28 },
  { seed: 'doc-3', name: 'Dr. Paulo Mendes',    specialty: 'Neurologista',     institution: 'UNIFESP',  studies: 9  },
  { seed: 'doc-4', name: 'Dra. Ana Lima',       specialty: 'Pediatra',         institution: 'HC-USP',   studies: 17 },
  { seed: 'doc-5', name: 'Dr. Carlos Neto',     specialty: 'Endocrinologista', institution: 'USP',      studies: 23 },
  { seed: 'doc-6', name: 'Dra. Mariana Costa',  specialty: 'Psiquiatra',       institution: 'UNICAMP',  studies: 14 },
  { seed: 'doc-7', name: 'Dr. Felipe Torres',   specialty: 'Reumatologista',   institution: 'UNIFESP',  studies: 8  },
]

export default function CommunitySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'left' | 'right') =>
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 264 : -264, behavior: 'smooth' })

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-lg">
            <div className="eyebrow bg-brand-50 text-brand-700 border border-brand-100 mb-5">Comunidade</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-ink leading-tight tracking-tight">
              Pesquisas apoiadas por<br />
              <span className="gradient-text">profissionais reais.</span>
            </h2>
            <p className="text-zinc-500 font-light mt-4 text-base leading-relaxed max-w-sm">
              Médicos e pesquisadores renomados confiam na Pesquise+Health para conduzir seus estudos clínicos.
            </p>
          </div>
          {/* Scroll controls */}
          <div className="flex gap-2 flex-shrink-0 pb-1">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all duration-200 text-zinc-500"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full cta-gradient text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Doctor cards — horizontal scroll */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {researchers.map(({ seed, name, specialty, institution, studies }) => (
            <div
              key={seed}
              className="flex-shrink-0 w-52 group cursor-pointer"
            >
              {/* Double-bezel card */}
              <div className="bezel p-1.5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)]">
                <div className="bezel-inner rounded-[calc(1.75rem-5px)]">
                  <div className="relative overflow-hidden rounded-[calc(1.75rem-5px)]">
                    <img
                      src={`https://picsum.photos/seed/${seed}/300/380`}
                      alt={name}
                      className="w-full h-60 object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-sm leading-tight mb-0.5">{name}</p>
                      <p className="text-xs text-white/70 font-light">{specialty}</p>
                      <div className="flex items-center justify-between mt-2.5">
                        <span className="text-[10px] bg-brand-500/35 text-brand-200 px-2.5 py-0.5 rounded-full font-semibold">{institution}</span>
                        <span className="text-[10px] text-white/55 font-light">{studies} estudos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-6 h-2 rounded-full bg-brand-500" />
          {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-zinc-200" />)}
        </div>
      </div>
    </section>
  )
}
