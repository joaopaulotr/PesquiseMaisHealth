const researches = [
  {
    title: 'Hospital das Clínicas — USP',
    type: 'Pesquisa Clínica',
    specialty: 'Cardiologia · São Paulo, SP',
    rating: '4.8',
    reviews: '124',
    price: 'R$ 800',
    remoto: 'R$ 150',
    unit: '/presencial',
    image: 'https://images.pexels.com/photos/8376233/pexels-photo-8376233.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Cardiologia',
  },
  {
    title: 'UNIFESP — Neuro Cognitivo',
    type: 'Questionário Digital',
    specialty: 'Neurologia · Online',
    rating: '4.7',
    reviews: '89',
    price: 'R$ 1.200',
    remoto: 'R$ 300',
    unit: '/presencial',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Neurologia',
  },
  {
    title: 'Instituto do Coração — InCor',
    type: 'Estudo Observacional',
    specialty: 'Clínica Médica · São Paulo, SP',
    rating: '4.9',
    reviews: '67',
    price: 'R$ 800',
    remoto: 'R$ 160',
    unit: '/presencial',
    image: 'https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Clínica Médica',
  },
]

export default function IntelligenceSection() {
  return (
    <section id="pesquisas" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-4">
            Por Especialidade
          </p>
          <h2 className="text-3xl lg:text-[2.2rem] font-extrabold text-gray-900 leading-tight">
            Pesquisas da sua área
          </h2>
          <p className="text-2xl lg:text-[1.6rem] font-light italic text-brand-500 mt-1">
            exclusivas para sua especialidade médica.
          </p>
        </div>

        {/* Research cards */}
        <div className="grid md:grid-cols-3 gap-5 stagger">
          {researches.map(({ title, type, specialty, rating, reviews, price, remoto, unit, image, badge }) => (
            <div
              key={title}
              className="reveal bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-40 relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {type}
                </span>
                <span className="absolute top-3 right-3 bg-brand-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-sm">
                  {badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 text-[13px] leading-tight flex-1">{title}</h3>
                  <div className="flex items-center gap-0.5 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-[11px] font-bold text-gray-700">{rating}</span>
                    <span className="text-[10px] text-gray-400 ml-0.5">({reviews})</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 mb-4">{specialty}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-extrabold text-gray-900 text-sm">{price}</span>
                    <span className="text-[11px] text-gray-400"> {unit}</span>
                    <span className="text-[10px] text-gray-300 mx-1">·</span>
                    <span className="text-[11px] text-gray-400">{remoto} remoto</span>
                  </div>
                  <a
                    href="https://health.pesquisemais.com.br/login"
                    className="cta-gradient text-white text-[11px] font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Participar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
