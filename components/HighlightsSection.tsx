const rows = [
  {
    tag: 'Feature 01',
    tagColor: 'text-brand-600',
    checkColor: 'bg-brand-100 text-brand-600',
    title: 'AI-Powered\nItinerary Builder',
    desc: 'Answer a few questions about your trip style and watch the AI generate a full multi-day plan with activities, restaurants, transport, and contingencies.',
    bullets: [
      'Day-by-day schedule with precise timing',
      'Restaurant and hotel recommendations',
      'Real-time budget tracking built-in',
    ],
    learnColor: 'text-brand-600',
    seed: 'feat-itinerary',
    reverse: false,
  },
  {
    tag: 'Feature 02',
    tagColor: 'text-rose-500',
    checkColor: 'bg-rose-100 text-rose-500',
    title: 'Wellness &\nRecovery Tracker',
    desc: 'Travel is demanding. Our wellness engine monitors your sleep, steps, hydration, and stress levels — and suggests recovery activities tailored to your destination.',
    bullets: [
      'Jet-lag management & sleep optimization',
      'Local yoga, spa, and nature recommendations',
      'Nutrition and hydration reminders',
    ],
    learnColor: 'text-rose-500',
    seed: 'feat-wellness',
    reverse: true,
  },
  {
    tag: 'Feature 03',
    tagColor: 'text-amber-600',
    checkColor: 'bg-amber-100 text-amber-600',
    title: 'Local Discovery\nEngine',
    desc: 'Forget generic tourist traps. Our discovery engine taps into live local data — events, openings, seasonal highlights — to serve you what\'s truly unmissable right now.',
    bullets: [
      'Hyperlocal event & festival finder',
      'Verified local reviews & insider tips',
      'Off-grid & hidden gem spotting',
    ],
    learnColor: 'text-amber-600',
    seed: 'feat-discovery',
    reverse: false,
  },
]

export default function HighlightsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
        {rows.map(({ tag, tagColor, checkColor, title, desc, bullets, learnColor, seed, reverse }) => (
          <div
            key={tag}
            className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}
          >
            <div className={`reveal ${reverse ? 'lg:[direction:ltr]' : ''}`}>
              <span className={`${tagColor} font-bold text-xs uppercase tracking-widest`}>{tag}</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-5 leading-tight whitespace-pre-line">
                {title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 font-light">{desc}</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full ${checkColor} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex items-center gap-2 ${learnColor} font-bold text-sm hover:gap-3 transition-all`}
              >
                Explore feature
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>

            <div className={`flex justify-center reveal ${reverse ? 'lg:[direction:ltr]' : ''}`}>
              <div className="phone-frame w-52 h-[420px]">
                <img src={`https://picsum.photos/seed/${seed}/320/640`} alt={title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
