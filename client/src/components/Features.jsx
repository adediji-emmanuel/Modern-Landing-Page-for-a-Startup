import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Zap, Shield, BarChart3, Globe, Users, Database } from 'lucide-react'

const Features = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Edge-deployed infrastructure ensures sub-50ms response times globally.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 Type II certified with end-to-end encryption and zero-trust architecture.' },
    { icon: BarChart3, title: 'Real-time Analytics', desc: 'Live dashboards and insights powered by our proprietary AI engine.' },
    { icon: Globe, title: 'Global CDN', desc: '200+ edge locations worldwide. Content delivered from the nearest node.' },
    { icon: Users, title: 'Team Collaboration', desc: 'Built-in workspaces, role-based access, and real-time sync across teams.' },
    { icon: Database, title: 'Auto-scaling DB', desc: 'Serverless databases that scale from zero to millions of requests automatically.' },
  ]

  return (
    <section id="features" ref={ref} className="py-24 relative">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Everything You Need to Scale</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Powerful features designed for modern engineering teams who move fast and break nothing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
