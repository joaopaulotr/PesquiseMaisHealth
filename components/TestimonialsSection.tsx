'use client'

import { useState } from 'react'

const testimonials = [
  {
    tab: 'Participante',
    name: 'Ana Paula Santos',
    role: 'Participante Regular',
    quote: 'A plataforma transformou completamente minha experiência com pesquisas médicas. A interface é incrivelmente simples, e participar dos estudos é muito fácil e rápido. Com certeza é minha principal fonte de renda extra e contribuição com a ciência.',
    seed: 'testimonial-ana',
    imageSeed: 'medical-person-1',
  },
  {
    tab: 'Profissional de Saúde',
    name: 'Dr. Carlos Mendes',
    role: 'Médico Cardiologista',
    quote: 'Como médico, recomendo a P+ Health para meus pacientes que querem contribuir com a ciência. Os estudos são éticos, o processo é transparente e os pagamentos são garantidos. Uma iniciativa que realmente faz diferença para a medicina brasileira.',
    seed: 'testimonial-carlos',
    imageSeed: 'medical-person-2',
  },
  {
    tab: 'Pesquisador',
    name: 'Profa. Juliana Rocha',
    role: 'Pesquisadora em Neurologia',
    quote: 'A P+ Health nos permitiu recrutar participantes de forma muito mais eficiente. A qualidade dos dados é excelente e a plataforma facilita todo o processo ético. Altamente recomendável para pesquisadores que buscam engajamento real.',
    seed: 'testimonial-juliana',
    imageSeed: 'medical-person-3',
  },
]

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="depoimentos" className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <p className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl lg:text-[2.1rem] font-extrabold text-gray-900">
            Veja o que nossos usuários têm a dizer!
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 border-b border-gray-100 reveal">
          {testimonials.map(({ tab }, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-sm font-semibold border-b-2 -mb-px transition-all ${
                active === i
                  ? 'border-brand-500 text-brand-600'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Testimonial */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center reveal visible">

          {/* Left: text */}
          <div>
            <p className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-4">
              Depoimento
            </p>
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-900 mb-1">{t.name}</h3>
            <p className="text-sm text-gray-400 mb-5">{t.role}</p>
            <Stars />
            <blockquote className="mt-5 text-gray-600 font-light leading-relaxed text-[15px]">
              "{t.quote}"
            </blockquote>
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-gray-100">
              <img
                src={`https://picsum.photos/seed/${t.seed}/48/48`}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-bold text-sm text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[280px] lg:h-[340px]">
            <img
              src={`https://picsum.photos/seed/${t.imageSeed}/600/500`}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
