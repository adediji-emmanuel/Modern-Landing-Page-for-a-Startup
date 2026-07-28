import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for side projects and experiments.',
    features: [
      'Up to 3 projects',
      '10,000 API calls/month',
      'Community support',
      'Basic analytics',
      'Shared infrastructure',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'For growing startups that need more power.',
    features: [
      'Unlimited projects',
      '100,000 API calls/month',
      'Priority support',
      'Advanced analytics',
      'Dedicated infrastructure',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'For large teams with advanced requirements.',
    features: [
      'Everything in Pro',
      'Unlimited API calls',
      '24/7 phone support',
      'Custom integrations',
      'SLA guarantee',
      'SSO & SAML',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Pricing
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Simple, transparent{' '}
            <span className="text-gradient">pricing</span>
          </h3>
          <p className="text-lg text-slate-600">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105 lg:scale-110 z-10'
                  : 'bg-white border border-slate-200 shadow-lg'
              }`}
            >
              {plan.popular &&
