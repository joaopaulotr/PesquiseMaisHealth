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

          {/* Card 1: Specialty matching */}
          <div className="reveal bg-gray-50 rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1.5 leading-snug">
                Pesquisas filtradas pela sua especialidade médica
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Cadastre sua especialidade e veja automaticamente estudos relevantes para a sua área.
              </p>
            </div>

            {/* Specialty pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Cardiologia', active: true },
                { label: 'Neurologia', active: false },
                { label: 'Oncologia', active: false },
                { label: 'Ortopedia', active: false },
                { label: 'Pediatria', active: false },
                { label: 'Clínica Médica', active: false },
              ].map(({ label, active }) => (
                <span
                  key={label}
                  className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    active
                      ? 'bg-brand-500 text-white border-brand-500 shadow-sm shadow-brand-200'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-brand-300 hover:text-brand-600'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Result rows */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
              {[
                { title: 'Estudo de Hipertensão Resistente', institution: 'InCor · USP', value: 'R$ 120', tag: 'Presencial' },
                { title: 'Arritmias em Adultos — UNIFESP', institution: 'UNIFESP · Online', value: 'R$ 40', tag: 'Remoto' },
                { title: 'Biomarcadores Cardíacos — FIOCRUZ', institution: 'Fiocruz · RJ', value: 'R$ 80', tag: 'Presencial' },
              ].map(({ title, institution, value, tag }) => (
                <div key={title} className="flex items-center gap-3 px-3.5 py-2.5">
                  <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11.5px] font-semibold text-gray-800 truncate">{title}</p>
                    <p className="text-[10px] text-gray-400">{institution}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-[9.5px] font-medium px-2 py-0.5 rounded-full ${tag === 'Remoto' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {tag}
                    </span>
                    <span className="text-[11px] font-bold text-gray-900">{value}</span>
                  </div>
                </div>
              ))}
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

          {/* Card 4: Scientific Feed */}
          <div className="reveal bg-gray-50 rounded-2xl p-6 overflow-hidden flex items-center gap-5 min-h-[210px]">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">
                Feed de artigos científicos e papers de alta relevância
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Acompanhe as publicações mais recentes de periódicos como NEJM, Lancet e Nature Medicine, curadas por especialidade.
              </p>
            </div>
            <div className="w-52 h-56 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm flex-shrink-0 -mr-24">
              <img src="/artigoExemplo.png" alt="Exemplo de artigo científico" className="w-full h-full object-cover object-left-top" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
