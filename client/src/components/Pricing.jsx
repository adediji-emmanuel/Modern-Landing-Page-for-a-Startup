import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Check } from 'lucide-react'

const Pricing = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for side projects',
      monthly: 0,
      yearly: 0,
      features: ['5 Projects', '10K API calls/mo', 'Community support', 'Basic analytics', 'Shared infrastructure'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      desc: 'For growing startups',
      monthly: 49,
      yearly: 39,
      features: ['Unlimited Projects', '500K API calls/mo', 'Priority support', 'Advanced analytics', 'Custom domains', 'Team collaboration', 'Webhook integrations'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      desc: 'For scale-ups & teams',
      monthly: 199,
      yearly: 159,
      features: ['Everything in Pro', 'Unlimited API calls', 'Dedicated support', 'Custom integrations', 'SLA guarantee', 'SSO & SAML', 'Audit logs', 'On-prem option'],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-24 relative">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">Start free, upgrade when you grow. No hidden fees, no surprises.</p>

          <div className="inline-flex items-center gap-3 p-1 rounded-full glass">
            <button onClick={() => setAnnual(true)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}>
              Annual <span className="text-xs opacity-80">-20%</span>
            </button>
            <button onClick={() => setAnnual(false)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}>
              Monthly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-6 rounded-2xl ${plan.popular ? 'glass gradient-border glow' : 'glass'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.desc}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${annual ? plan.yearly : plan.monthly}</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25' : 'glass text-white hover:bg-white/10'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
