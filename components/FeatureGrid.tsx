const features = [
  {
    title: 'Smart Trip Builder',
    desc: 'Generate full itineraries in seconds with AI that understands your preferences, pace, and budget.',
    color: 'bg-brand-50 text-brand-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: 'Wellness Check-Ins',
    desc: 'Track health, sleep, and recovery across time zones with smart adaptive recommendations.',
    color: 'bg-rose-50 text-rose-500',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Local Discovery',
    desc: 'Uncover hidden gems, local restaurants, and off-the-beaten-path experiences curated just for you.',
    color: 'bg-amber-50 text-amber-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Budget Optimizer',
    desc: 'Set your budget and let AI find the best flights, hotels, and activities to maximize every dollar.',
    color: 'bg-emerald-50 text-emerald-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Travel Community',
    desc: 'Connect with like-minded travelers, share itineraries, and get authentic local tips from the community.',
    color: 'bg-violet-50 text-violet-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Offline Mode',
    desc: 'Download maps, itineraries, and guides for full access even without an internet connection abroad.',
    color: 'bg-slate-100 text-slate-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Everything You Need To
            <br />
            Travel Smarter
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-light">
            One intelligent platform that handles every dimension of modern travel — planning, wellness, and discovery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {features.map(({ title, desc, color, icon }) => (
            <div
              key={title}
              className="reveal card-lift bg-white border border-slate-100 rounded-2xl p-7 shadow-sm cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                {icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
