import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeatureIntro from '@/components/FeatureIntro'
import FeaturesSection from '@/components/FeaturesSection'
import IntelligenceSection from '@/components/IntelligenceSection'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureIntro />
      <FeaturesSection />
      <IntelligenceSection />
      <FAQSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
