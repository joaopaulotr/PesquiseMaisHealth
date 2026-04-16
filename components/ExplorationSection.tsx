const photos = [
  { seed: 'exp-1', h: 'h-52' },
  { seed: 'exp-2', h: 'h-36' },
  { seed: 'exp-3', h: 'h-36' },
  { seed: 'exp-4', h: 'h-44' },
  { seed: 'exp-5', h: 'h-36' },
  { seed: 'exp-6', h: 'h-36' },
]

export default function ExplorationSection() {
  return (
    <section className="dark-bg py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-brand-600/12 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: text */}
        <div className="reveal">
          <div className="eyebrow bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6">
            <span className="w-5 h-px bg-brand-400 inline-block" />
            O Futuro
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            O futuro das pesquisas<br />
            médicas começa com<br />
            <span className="text-brand-400">uma história.</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg leading-relaxed mb-10 max-w-md">
            Cada resposta que você dá contribui para avanços reais na medicina. Faça parte dessa história e ganhe enquanto muda o futuro da saúde.
          </p>
          <a
            href="#planos"
            className="inline-flex items-center gap-2 cta-gradient text-white font-bold pl-6 pr-2 py-2.5 rounded-full shadow-brand transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] text-sm"
          >
            Comece Agora
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Right: photo grid */}
        <div className="reveal-right">
          <div className="grid grid-cols-3 gap-3">
            {photos.map(({ seed, h }) => (
              <div key={seed} className={`rounded-2xl overflow-hidden ${h} group`}>
                <img
                  src={`https://picsum.photos/seed/${seed}/240/360`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
