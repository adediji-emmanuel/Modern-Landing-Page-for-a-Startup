import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UserPlus, Settings, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up in seconds with your email or Google account. No credit card required.',
  },
  {
    icon: Settings,
    title: 'Configure Project',
    description: 'Use our intuitive dashboard to set up your project with pre-built templates.',
  },
  {
    icon: Rocket,
    title: 'Deploy Instantly',
    description: 'Push to deploy. Your app goes live on our global edge network in seconds.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Automatically',
    description: 'Watch your app scale automatically as your user base grows. Zero config needed.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            How It Works
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            From idea to live in{' '}
            <span className="text-gradient">4 simple steps</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-primary-100 flex items-center justify-center shadow-lg shadow-primary-500/10">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
