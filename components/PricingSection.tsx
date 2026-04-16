export default function PricingSection() {
  return (
    <section id="planos" className="bg-white py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="download-cta-bg rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 items-center">

            {/* Left: Text + CTAs */}
            <div className="p-8 lg:p-12">
              <p className="text-[11px] font-bold text-brand-300 uppercase tracking-[0.14em] mb-4">
                Acesse a Plataforma
              </p>
              <h2 className="text-2xl lg:text-[1.9rem] font-extrabold text-white leading-tight mb-4">
                Comece agora e participe das pesquisas médicas remuneradas!
              </h2>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
                Crie sua conta grátis e explore centenas de pesquisas disponíveis. Sem compromisso, cancele quando quiser.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-5 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl text-[13px]"
                >
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.954-.467-3.8-1.297-5.432A11.952 11.952 0 0112 2.714z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-gray-400 leading-none mb-0.5 font-normal">Comece agora</p>
                    <p className="leading-none">Criar Conta Grátis</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-bold px-5 py-3.5 rounded-xl transition-all hover:bg-white/20 text-[13px]"
                >
                  <svg className="w-5 h-5 text-brand-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-brand-200 leading-none mb-0.5 font-normal">Já tem conta?</p>
                    <p className="leading-none">Acessar Plataforma</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Real device asset */}
            <div className="relative flex justify-center items-end py-6 pr-8 pl-4 overflow-hidden min-h-[320px]">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 65% 55%, rgba(6,182,212,0.18), transparent 65%)' }}
              />
              <img
                src="/device.png"
                alt="Pesquise+Health App"
                className="relative z-10 w-[180px] md:w-[200px] h-auto object-contain"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }}
              />
              {/* Floating badge */}
              <div className="absolute right-6 bottom-12 z-20 bg-white rounded-xl shadow-lg px-3 py-2">
                <p className="text-[9px] text-gray-400">Pagamento recebido!</p>
                <p className="text-[11px] font-bold text-green-600">+R$ 80,00 via Pix</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
