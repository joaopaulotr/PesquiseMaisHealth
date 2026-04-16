export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-4">
            Funcionalidades
          </p>
          <h2 className="text-3xl lg:text-[2.2rem] font-extrabold text-gray-900 leading-tight">
            Explore nossas funcionalidades exclusivas para
          </h2>
          <p className="text-3xl lg:text-[2.2rem] font-extrabold italic text-brand-500 leading-tight">
            pesquisas sem complicações.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5 stagger">

          {/* Card 1: Personalized suggestions */}
          <div className="reveal bg-gray-50 rounded-2xl p-6 flex items-center gap-5">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">
                Pesquisas personalizadas baseadas no seu perfil e disponibilidade
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Algoritmo inteligente que sugere pesquisas relevantes ao seu perfil, localização e disponibilidade de tempo.
              </p>
            </div>
            <div className="phone-frame w-28 h-48 flex-shrink-0">
              <img src="https://picsum.photos/seed/feat-suggest-v2/180/320" alt="" />
              <div className="absolute inset-0 z-10 pt-6 px-2 flex flex-col gap-1.5 mt-1">
                <div className="bg-white/93 rounded-lg p-1.5 shadow-sm">
                  <p className="text-[6.5px] text-gray-400 uppercase tracking-wide">Sugerida</p>
                  <p className="text-[8.5px] font-bold text-gray-900">Cardio · R$40</p>
                </div>
                <div className="bg-white/93 rounded-lg p-1.5 shadow-sm">
                  <p className="text-[6.5px] text-gray-400">Compatibilidade</p>
                  <p className="text-[8.5px] font-bold text-brand-600">94%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Search */}
          <div className="reveal bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">
              Busque pesquisas, atividades e experimentos com facilidade
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
              Filtros por especialidade, remuneração e duração para encontrar a pesquisa ideal.
            </p>
            <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
              <p className="text-[10px] text-gray-400 font-medium mb-2.5">Buscar pesquisa</p>
              <div className="bg-gray-50 rounded-lg px-3 py-2 mb-2">
                <p className="text-[9px] text-gray-400">Cidade / Especialidade</p>
                <p className="text-[11px] font-semibold text-gray-800">São Paulo, SP</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-gray-50 rounded-lg px-2.5 py-2">
                  <p className="text-[9px] text-gray-400">Início</p>
                  <p className="text-[10px] font-semibold text-gray-800">Mai 15, 2025</p>
                  <p className="text-[9px] text-gray-400">2 semanas</p>
                </div>
                <div className="bg-gray-50 rounded-lg px-2.5 py-2">
                  <p className="text-[9px] text-gray-400">Participantes</p>
                  <p className="text-[10px] font-semibold text-gray-800">Adultos</p>
                </div>
              </div>
              <button className="w-full cta-gradient text-white text-[11px] font-bold py-2 rounded-lg hover:opacity-90 transition-opacity">
                Buscar Pesquisas
              </button>
            </div>
          </div>

          {/* Card 3: Payments */}
          <div className="reveal bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">
              Receba pagamentos seguros via Pix para transações instantâneas
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-5">
              Transferência automática após cada pesquisa. Sem taxas ocultas, sem espera desnecessária.
            </p>
            <div className="space-y-2.5">
              <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#32BCAD]/10 rounded-lg flex items-center justify-center">
                    <span className="text-[9px] font-black text-[#32BCAD]">PIX</span>
                  </div>
                  <span className="text-sm font-bold text-gray-700">Pix</span>
                </div>
                <span className="text-xs text-gray-400 font-light">Instantâneo</span>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">Transferência Bancária</span>
                </div>
                <span className="text-xs text-gray-400 font-light">24h úteis</span>
              </div>
            </div>
          </div>

          {/* Card 4: Exclusive */}
          <div className="reveal bg-gray-50 rounded-2xl p-6 flex items-center gap-5">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">
                Desbloqueie pesquisas exclusivas com recompensas especiais
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Assinantes Premium têm acesso a estudos de alto valor, com remuneração até 3× maior.
              </p>
            </div>
            <div className="phone-frame w-28 h-48 flex-shrink-0">
              <img src="https://picsum.photos/seed/feat-premium-v2/180/320" alt="" />
              <div className="absolute inset-0 z-10 pt-6 px-2 flex flex-col gap-1.5 mt-1">
                <div className="bg-brand-500 rounded-lg p-1.5 shadow-sm">
                  <p className="text-[6.5px] text-brand-100 uppercase tracking-wide">Premium</p>
                  <p className="text-[8.5px] font-bold text-white">Exclusiva</p>
                </div>
                <div className="bg-white/93 rounded-lg p-1.5 shadow-sm">
                  <p className="text-[6.5px] text-gray-400">Recompensa</p>
                  <p className="text-[8.5px] font-bold text-brand-600">R$120</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
