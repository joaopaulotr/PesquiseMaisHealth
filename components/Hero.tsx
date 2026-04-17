import { AuroraBackground } from '@/components/ui/aurora-background'
import { HeroSection } from '@/components/ui/hero-section'

const avatars = [
  { src: 'https://i.pravatar.cc/150?img=47', alt: 'Participante 1', fallback: 'P1' },
  { src: 'https://i.pravatar.cc/150?img=32', alt: 'Participante 2', fallback: 'P2' },
  { src: 'https://i.pravatar.cc/150?img=21', alt: 'Participante 3', fallback: 'P3' },
  { src: 'https://i.pravatar.cc/150?img=56', alt: 'Participante 4', fallback: 'P4' },
]

const logos = [
  'Centros Universitários',
'Institutos de Pesquisa',
'Laboratórios',
'Clínicas Especializadas',
'Hospitais de Referência']

export default function Hero() {
  return (
    <AuroraBackground
      className="items-stretch justify-start bg-white overflow-hidden"
      showRadialGradient={true}
    >
      <div className="relative z-10 w-full">

        {/* Typewriter hero text + CTAs */}
        <HeroSection
          className="pb-6 lg:pb-4"
          title={
            <>
              Participe de pesquisas médicas,
            </>
          }
          animatedTexts={[
            'receba via Pix.',
            'de forma verificada.',
            'contribua com a ciência.',
            'no seu tempo livre.',
          ]}
          subtitle="Conectamos você a estudos médicos verificados. Compartilhe suas experiências, contribua com o avanço da medicina e receba pagamentos instantâneos."
          infoBadgeText="Renda média dos participantes: R$ 300+/mês"
          ctaButtonText="Cadastre-se"
          secondaryButtonText="Ver Como Funciona"
          secondaryButtonHref="https://health.pesquisemais.com.br/login"
          socialProofText="+95.000 já participaram de pesquisas"
          avatars={avatars}
          ctaHref="https://health.pesquisemais.com.br/login"
        />

        {/* Device image — large, centered */}
        <div className="flex justify-center pb-0">
          <img
            src="/device.png"
            alt="P+ Health App"
            className="w-[280px] md:w-[350px] lg:w-[420px] h-auto object-contain"
            style={{ filter: 'drop-shadow(0 40px 80px rgba(47,110,248,0.18)) drop-shadow(0 20px 40px rgba(0,0,0,0.14))' }}
          />
        </div>

        {/* Logo strip */}
        <div className="border-t border-gray-200/60 pt-7 pb-10 text-center">
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-[0.14em] mb-5">
            Mais de 95.000 participantes de pesquisas e crescendo
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 px-5">
            {logos.map(logo => (
              <span key={logo} className="text-gray-300 font-bold text-[13px] tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </AuroraBackground>
  )
}
