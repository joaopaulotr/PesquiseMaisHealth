export default function FooterCTA() {
  return (
    <section className="bg-[#0A0F1E] relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700/25 via-transparent to-brand-900/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-600/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="reveal">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.04] mb-8">
            The Future
            <br />
            of Exploration
            <br />
            <span className="text-brand-400">Starts Here.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md font-light">
            Join 500,000+ travelers who've already discovered a smarter, healthier, more meaningful way to explore the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-500 text-white font-extrabold px-8 py-4 rounded-full text-base shadow-xl shadow-brand-900/40 transition-all hover:scale-105 active:scale-95"
            >
              Start Your Journey
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all text-base"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Right: phone */}
        <div className="flex justify-center reveal">
          <div className="phone-frame w-56 h-[460px]" style={{ borderColor: '#1e3a5f' }}>
            <img src="https://picsum.photos/seed/footer-phone/350/720" alt="App" />
          </div>
        </div>
      </div>
    </section>
  )
}
