export default function CTASection() {
  return (
    <section className="cta-gradient relative overflow-hidden py-28 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 reveal">
        <p className="text-blue-200 font-bold text-xs uppercase tracking-widest mb-4">Get Started Today</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          One App, Every Destination —
          <br />
          See Your Plans Come Alive
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
          Download TravelAI today and start building journeys that are smarter, more soulful, and built entirely around you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-brand-700 font-extrabold px-7 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on iOS
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur border border-white/30 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.18 23.76c.33.19.72.2 1.08.02l12.94-7.47-2.9-2.9-11.12 10.35zM20.93 10.34l-2.71-1.56L15.1 12l3.12 3.12 2.74-1.58c.78-.45.78-1.75-.03-2.2zM1.67.27C1.31.54 1.07 1 1.07 1.56v20.89c0 .56.24 1.02.6 1.29l.1.08 11.7-11.7v-.27L1.67.27zM3.26.24l12.94 7.47-2.9 2.9L2.18.26c.36-.2.76-.2 1.08-.02z" />
            </svg>
            Get on Android
          </a>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center">
          <div className="phone-frame w-52 h-[420px] -mb-8 shadow-2xl shadow-blue-900/40" style={{ borderColor: '#1e3a5f' }}>
            <img src="https://picsum.photos/seed/cta-hero-phone/320/640" alt="App preview" />
          </div>
        </div>
      </div>
    </section>
  )
}
