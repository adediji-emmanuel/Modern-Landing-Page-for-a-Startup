import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Zap, ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Now with AI-powered analytics</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Faster with<br />
          <span className="gradient-text">Intelligent Infrastructure</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          The all-in-one platform that helps startups scale from idea to IPO. 
          Automated workflows, real-time analytics, and enterprise-grade security.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all flex items-center gap-2">
            Start Building Free
            <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
            <Play size={18} fill="currentColor" />
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<50ms', label: 'API Latency' },
            { value: '$2M+', label: 'Funding Raised' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30" />
          <div className="relative glass rounded-2xl p-1 overflow-hidden">
            <div className="bg-gray-900/80 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-32 rounded-lg bg-white/5 animate-pulse" />
                <div className="h-32 rounded-lg bg-white/5 animate-pulse" />
                <div className="h-24 rounded-lg bg-white/5 animate-pulse" />
                <div className="h-24 rounded-lg bg-white/5 animate-pulse" />
                <div className="h-24 rounded-lg bg-white/5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
