'use client'

import { useState } from 'react'

const specialties = [
  { label: 'Cardiologia',    presencial: 'R$ 800',   remoto: 'R$ 150' },
  { label: 'Neurologia',     presencial: 'R$ 1.200', remoto: 'R$ 300' },
  { label: 'Oncologia',      presencial: 'R$ 1.000', remoto: 'R$ 300' },
  { label: 'Ortopedia',      presencial: 'R$ 800',   remoto: 'R$ 200' },
  { label: 'Cirurgia',       presencial: 'R$ 1.000', remoto: 'R$ 400' },
  { label: 'Pediatria',      presencial: 'R$ 800',   remoto: 'R$ 180' },
  { label: 'Clínica Médica', presencial: 'R$ 800',   remoto: 'R$ 160' },
]

export default function SpecialtyFilter() {
  const [active, setActive] = useState('Cardiologia')
  const selected = specialties.find(s => s.label === active)!

  return (
    <div className="flex flex-col gap-3">
      {/* Pills */}
      <div className="flex flex-wrap gap-1.5">
        {specialties.map(({ label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
              active === label
                ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                : 'bg-white text-gray-500 border-gray-200 hover:border-brand-300 hover:text-brand-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Value display */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
        <div className="flex items-center gap-3 px-3.5 py-3">
          <div className="w-6 h-6 rounded-md bg-brand-50 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
          </div>
          <p className="text-[12px] font-semibold text-gray-800 flex-1">{selected.label}</p>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
              Presencial {selected.presencial}
            </span>
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
              Remoto {selected.remoto}
            </span>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 font-light text-center">
        Selecione sua especialidade e confira os valores disponíveis
      </p>
    </div>
  )
}
