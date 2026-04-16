export default function FinalCTA() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white pointer-events-none" />
      <div className="orb w-96 h-96 bg-brand-200 -top-24 -right-24" />
      <div className="orb w-64 h-64 bg-cyan-100 bottom-0 -left-16" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: text + CTAs */}
        <div className="reveal">
          <div className="eyebrow bg-brand-50 text-brand-700 border border-brand-100 mb-6">Baixe Agora</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink leading-tight tracking-tight mb-5">
            Leve suas pesquisas<br />
            médicas para<br />
            <span className="gradient-text">onde quiser!</span>
          </h2>
          <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8 max-w-md">
            Baixe o Pesquise+Health e comece a participar de pesquisas médicas remuneradas. Disponível gratuitamente para iOS e Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#" className="inline-flex items-center gap-3 bg-ink hover:bg-ink-soft text-white font-bold px-6 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.03] active:scale-[0.97]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <p className="text-[11px] opacity-60 leading-none mb-0.5">Baixar na</p>
                <p className="text-base font-extrabold leading-none">App Store</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 bg-ink hover:bg-ink-soft text-white font-bold px-6 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.03] active:scale-[0.97]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M3.18 23.76c.33.19.72.2 1.08.02l12.94-7.47-2.9-2.9-11.12 10.35zM20.93 10.34l-2.71-1.56L15.1 12l3.12 3.12 2.74-1.58c.78-.45.78-1.75-.03-2.2zM1.67.27C1.31.54 1.07 1 1.07 1.56v20.89c0 .56.24 1.02.6 1.29l.1.08 11.7-11.7v-.27L1.67.27zM3.26.24l12.94 7.47-2.9 2.9L2.18.26c.36-.2.76-.2 1.08-.02z"/></svg>
              <div>
                <p className="text-[11px] opacity-60 leading-none mb-0.5">Disponível no</p>
                <p className="text-base font-extrabold leading-none">Google Play</p>
              </div>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 text-base">★★★★★</span>
              <strong className="text-ink font-bold">4.8</strong> App Store
            </span>
            <span className="w-px h-4 bg-zinc-200" />
            <span><strong className="text-ink font-bold">50K+</strong> participantes</span>
            <span className="w-px h-4 bg-zinc-200" />
            <span><strong className="text-ink font-bold">R$2M+</strong> pagos</span>
          </div>
        </div>

        {/* Right: phone */}
        <div className="flex justify-center reveal-right">
          <div className="relative">
            <div className="phone-frame w-56 h-[480px]">
              <img src="https://picsum.photos/seed/health-final-cta-v2/320/680" alt="Pesquise+Health App" />
              <div className="absolute inset-0 z-10 pt-8 px-4 pb-4">
                <div className="mt-4 bg-gradient-to-br from-brand-500/30 to-brand-700/30 backdrop-blur-sm border border-brand-400/30 rounded-2xl p-4 text-white text-center">
                  <div className="w-14 h-14 rounded-2xl logo-gradient flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-black text-xl">H</span>
                  </div>
                  <p className="font-extrabold text-base mb-0.5">Pesquise+Health</p>
                  <p className="text-[11px] text-white/70">Pesquisas Médicas Remuneradas</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 rounded-[48px] bg-brand-300/22 blur-3xl scale-110" />
          </div>
        </div>

      </div>
    </section>
  )
}
