import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Code, Cpu, TrendingUp, ChevronRight } from 'lucide-react'

const HowItWorks = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const steps = [
    { icon: Code, title: '1. Integrate SDK', desc: 'Install our lightweight SDK with a single command. Supports React, Vue, Angular, and vanilla JS.' },
    { icon: Cpu, title: '2. Configure Pipeline', desc: 'Use our visual builder or YAML config to define your data pipelines and workflows.' },
    { icon: TrendingUp, title: '3. Scale Automatically', desc: 'Our AI optimizes resource allocation in real-time. You focus on product, we handle infrastructure.' },
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent" />
      <div className={`relative max-w-7xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">From Zero to Production in Minutes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="p-8 rounded-2xl glass text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  <step.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight size={32} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
