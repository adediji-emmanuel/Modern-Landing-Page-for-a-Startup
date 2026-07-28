import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage
