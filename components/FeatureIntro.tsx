

export default function FeatureIntro() {
  return (
    <section id="como-funciona" className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">

        {/* Label */}
        <p className="reveal text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-6">
          Sobre a P+ Health
        </p>

        {/* Quote */}
        <blockquote className="reveal text-xl lg:text-[1.35rem] text-gray-600 font-light italic leading-relaxed mb-14 max-w-3xl mx-auto">
          "Somos dedicados a simplificar a participação em pesquisas médicas. Nossa plataforma conecta você a estudos verificados, facilita a participação e garante pagamentos rápidos. Seja para um questionário rápido ou um estudo clínico, tornamos tudo fácil, confiável e recompensador."
        </blockquote>

        {/* Wide image */}
        <div className="reveal rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
          <img
            src="/medicoCelular.jpg"
            alt="Médico usando celular"
            className="w-full h-[220px] lg:h-[380px] object-cover"
          />
        </div>

      </div>
    </section>
  )
}
