import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import CTA from './sections/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
