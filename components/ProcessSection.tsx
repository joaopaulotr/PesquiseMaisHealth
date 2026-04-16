const steps = [
  {
    num: '01',
    title: 'Cadastre-se no Aplicativo',
    desc: 'Crie sua conta gratuitamente em menos de 2 minutos. Complete seu perfil de saúde para receber pesquisas relevantes.',
    accent: true,
  },
  {
    num: '02',
    title: 'Participe das Pesquisas',
    desc: 'Escolha entre dezenas de pesquisas disponíveis. Responda perguntas, compartilhe experiências e contribua com a medicina.',
    accent: false,
  },
  {
    num: '03',
    title: 'Receba Seus Pagamentos',
    desc: 'Seus ganhos aparecem imediatamente no app após cada pesquisa concluída. Saque via Pix em qualquer momento.',
    accent: false,
  },
]

export default function ProcessSection() {
  return (
    <section id="como-funciona-detalhe" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left: steps */}
        <div className="reveal">
          <div className="eyebrow bg-brand-50 text-brand-700 border border-brand-100 mb-6">Como Funciona</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink mb-12 leading-tight tracking-tight">
            Do cadastro ao pagamento<br />
            <span className="gradient-text">em segundos.</span>
          </h2>

          <div className="space-y-0">
            {steps.map(({ num, title, desc, accent }, i) => (
              <div key={num} className="flex gap-5 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-lg ${
                    accent ? 'cta-gradient text-white shadow-brand' : 'bg-zinc-100 text-zinc-400'
                  }`}>
                    {num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-10 mt-3 mb-3" style={{ background: 'linear-gradient(to bottom, #e4e4e7, transparent)' }} />
                  )}
                </div>
                <div className={`pt-3 ${i < steps.length - 1 ? 'pb-10' : ''}`}>
                  <h3 className="font-extrabold text-ink mb-2 text-lg">{title}</h3>
                  <p className="text-zinc-500 font-light text-[15px] leading-relaxed max-w-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#" className="inline-flex items-center gap-2.5 bg-ink hover:bg-ink-soft text-white font-bold px-5 py-3 rounded-2xl shadow-md transition-all hover:scale-[1.03] active:scale-[0.97] text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="#" className="inline-flex items-center gap-2.5 bg-ink hover:bg-ink-soft text-white font-bold px-5 py-3 rounded-2xl shadow-md transition-all hover:scale-[1.03] active:scale-[0.97] text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.18 23.76c.33.19.72.2 1.08.02l12.94-7.47-2.9-2.9-11.12 10.35zM20.93 10.34l-2.71-1.56L15.1 12l3.12 3.12 2.74-1.58c.78-.45.78-1.75-.03-2.2zM1.67.27C1.31.54 1.07 1 1.07 1.56v20.89c0 .56.24 1.02.6 1.29l.1.08 11.7-11.7v-.27L1.67.27zM3.26.24l12.94 7.47-2.9 2.9L2.18.26c.36-.2.76-.2 1.08-.02z"/></svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="flex justify-center reveal-right">
          <div className="relative">
            <div className="phone-frame w-56 h-[460px]">
              <img src="https://picsum.photos/seed/health-process-v2/320/660" alt="Processo" />
              <div className="absolute inset-0 z-10 pt-8 px-4 pb-4 flex flex-col gap-2.5">
                <div className="bg-white/96 rounded-2xl p-3.5 mt-3 shadow-sm">
                  <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-wide mb-2">Pesquisa Concluída!</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-ink">+R$ 35,00 creditado</p>
                      <p className="text-[9px] text-zinc-400">Saldo disponível para saque</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/96 rounded-2xl p-3 shadow-sm">
                  <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-wide mb-2">Próximas Pesquisas</p>
                  {['Estudo Cardiológico · R$40', 'Pesquisa Nutricional · R$25'].map((item) => (
                    <div key={item} className="flex items-center justify-between py-1.5 border-b border-zinc-100 last:border-0">
                      <p className="text-[9px] text-zinc-600 font-medium">{item.split('·')[0]}</p>
                      <span className="text-[9px] font-bold text-brand-600">{item.split('·')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 rounded-[48px] bg-brand-300/18 blur-3xl scale-110" />
          </div>
        </div>

      </div>
    </section>
  )
}
