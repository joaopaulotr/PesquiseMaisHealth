export default function DiscoverySection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left text ────────────────────────────── */}
        <div className="reveal">
          <p className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-4">Discovery</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            From Planning
            <br />
            to Discovery
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
            Every journey starts with a spark. TravelAI fans that spark into a fully-formed adventure — with
            local secrets, off-grid gems, and wellness pauses woven throughout.
          </p>
          <ul className="space-y-4 text-slate-600 mb-10">
            {[
              'Local Expert Recommendations & Hidden Gems',
              'Off-the-Beaten-Path Experiences',
              'Wellness & Mindfulness Integration',
              'Seasonal & Real-Time Event Discovery',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 active:scale-95"
          >
            Start Exploring
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>

        {/* ── Right: staggered photo grid ──────────── */}
        <div className="grid grid-cols-2 gap-4 reveal">
          <img
            src="https://picsum.photos/seed/disc-a/400/520"
            alt="Discovery"
            className="rounded-2xl object-cover w-full"
            style={{ height: 280 }}
          />
          <div className="flex flex-col gap-4">
            <img
              src="https://picsum.photos/seed/disc-b/400/300"
              alt="Discovery"
              className="rounded-2xl object-cover w-full"
              style={{ height: 130 }}
            />
            <img
              src="https://picsum.photos/seed/disc-c/400/300"
              alt="Discovery"
              className="rounded-2xl object-cover w-full"
              style={{ height: 130 }}
            />
          </div>
          <img
            src="https://picsum.photos/seed/disc-d/800/360"
            alt="Discovery"
            className="rounded-2xl object-cover w-full col-span-2"
            style={{ height: 140 }}
          />
        </div>
      </div>
    </section>
  )
}
