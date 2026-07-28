import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../services/api'

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    try {
      await api.post('/subscribers', { email })
      toast.success('Welcome aboard! Check your email for confirmation.')
      setEmail('')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={ref} className="py-24 relative">
      <div className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative p-8 md:p-16 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
          <div className="absolute inset-0 glass" />
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20" />
          
          <div className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Ship Faster?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Join 10,000+ developers who are already building the future with NexusAI. No credit card required.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Subscribing...' : 'Get Started'}
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">Free forever tier available. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
