'use client'

import { useState } from 'react'

const faqs = [
  { q: 'Como funciona o pagamento das pesquisas?', a: 'Após concluir uma pesquisa, o pagamento é creditado automaticamente em seu saldo. Você pode sacar via Pix a qualquer momento.' },
  { q: 'Esta plataforma é para profissionais de saúde?', a: 'Sim. O Pesquise+Health é exclusivo para profissionais de saúde. Se você é paciente ou faz parte da população geral, acesse nosso app Pesquise+Health voltado para participação pública.' },
  { q: 'Meus dados pessoais estão seguros?', a: 'Sim. Seguimos rigorosamente a LGPD. Seus dados são criptografados e nunca compartilhados sem seu consentimento explícito. Você pode solicitar exclusão a qualquer momento.' },
  { q: 'Posso cancelar minha conta a qualquer momento?', a: 'Sim. Você pode cancelar sem cobranças adicionais. Seu histórico e saldo pendente continuam acessíveis por 30 dias após o cancelamento.' },
  { q: 'Tem suporte ao vivo disponível 24/7?', a: 'Sim! Suporte por chat 24 horas por dia, 7 dias por semana.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <p className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-[2.1rem] font-extrabold text-gray-900 leading-tight">
            Perguntas Frequentes sobre nossa
          </h2>
          <p className="text-3xl lg:text-[2.1rem] font-extrabold italic text-brand-500 leading-tight">
            Plataforma Pesquise+Health
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-100 reveal">
          {faqs.map(({ q, a }, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left group transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[13.5px] font-semibold text-gray-800 group-hover:text-brand-600 pr-4 transition-colors leading-snug">
                  {q}
                </span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                    open === i
                      ? 'border-brand-500 bg-brand-500 text-white rotate-45'
                      : 'border-gray-200 text-gray-400 group-hover:border-brand-300 group-hover:text-brand-400'
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                  </svg>
                </span>
              </button>
              <div className={`faq-body ${open === i ? 'open' : ''}`}>
                <p className="pb-5 text-[13px] text-gray-500 font-light leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
