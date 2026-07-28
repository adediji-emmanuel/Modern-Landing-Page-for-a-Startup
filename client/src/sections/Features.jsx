import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Globe, Layers, Cpu, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized infrastructure that delivers sub-100ms response times globally.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption with SOC 2 Type II compliance built-in.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Deploy to 35+ edge locations worldwide with automatic failover.',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Auto-scaling infrastructure that grows with your user base seamlessly.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Built-in machine learning models for analytics and user predictions.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'GDPR compliant with full data ownership and zero-knowledge architecture.',
    color: 'bg-cyan-50 text-cyan-600',
  },
]

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="features" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Features
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything you need to{' '}
            <span className="text-gradient">scale</span>
          </h3>
          <p className="text-lg text-slate-600">
            Powerful features designed for modern startups. No complex setup, just results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
