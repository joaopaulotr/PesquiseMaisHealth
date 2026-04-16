'use client'

import { useRef } from 'react'

const destinations = [
  { seed: 'bali99', region: '🌏 Southeast Asia', city: 'Bali, Indonesia', tagline: 'Temple trails & rice terraces' },
  { seed: 'tokyo77', region: '🗾 East Asia', city: 'Tokyo, Japan', tagline: 'Neon nights & ancient shrines' },
  { seed: 'patagonia55', region: '🌎 South America', city: 'Patagonia', tagline: "Raw wilderness at world's end" },
  { seed: 'marrakech33', region: '🌍 North Africa', city: 'Marrakech', tagline: 'Spice markets & riad escapes' },
  { seed: 'reykjavik11', region: '🌐 Northern Europe', city: 'Reykjavik', tagline: 'Aurora chasing & geothermal pools' },
  { seed: 'kyoto22', region: '🗾 East Asia', city: 'Kyoto, Japan', tagline: 'Bamboo forests & zen gardens' },
  { seed: 'santorini44', region: '🌍 Mediterranean', city: 'Santorini', tagline: 'White cliffs & infinite sunsets' },
]

export default function AdventuresSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' })
  }

  return (
    <section id="destinations" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <p className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-2">Explore</p>
            <h2 className="text-4xl font-extrabold text-slate-900">Adventures Planned</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
        >
          {destinations.map(({ seed, region, city, tagline }) => (
            <div
              key={seed}
              className="flex-shrink-0 w-64 rounded-3xl overflow-hidden relative group card-lift cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/400/480`}
                alt={city}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs font-medium text-white/70 mb-1">{region}</p>
                <h3 className="font-bold text-lg leading-tight">{city}</h3>
                <p className="text-sm text-white/75 font-light">{tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
