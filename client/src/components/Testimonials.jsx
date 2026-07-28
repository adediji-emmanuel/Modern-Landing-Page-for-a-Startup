import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const testimonials = [
    { name: 'Sarah Chen', role: 'CTO at TechFlow', text: 'NexusAI reduced our infrastructure costs by 60% while improving performance. The auto-scaling is genuinely magical.', avatar: 'SC' },
    { name: 'Marcus Johnson', role: 'Founder at DataSync', text: 'We went from prototype to production in 3 days. The SDK is incredibly well-designed and the docs are world-class.', avatar: 'MJ' },
    { name: 'Elena Rodriguez', role: 'VP Engineering at CloudScale', text: 'The analytics dashboard alone is worth the subscription. We caught a critical bug before it reached production thanks to real-time alerts.', avatar: 'ER' },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className={`relative max-w-7xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Loved by Engineers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl glass hover:bg-white/5 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
