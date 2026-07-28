import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">Nexus<span className="gradient-text">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.href)} className="text-sm text-gray-300 hover:text-white transition-colors">
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-strong mt-3 mx-6 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.href)} className="block w-full text-left text-gray-300 hover:text-white py-2">
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <button className="block w-full text-left text-gray-300">Sign In</button>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
