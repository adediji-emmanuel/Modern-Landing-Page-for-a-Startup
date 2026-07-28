import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjBWMGg2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJFOEYwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>Now with AI-powered insights</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Build your startup{' '}
              <span className="text-gradient">10x faster</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              The all-in-one platform that helps founders launch, scale, and manage their startups with powerful tools and real-time analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-2xl transition-all shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-1"
              >
                Start Building Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl transition-all hover:-translate-y-1"
              >
                <Play className="w-5 h-5 text-primary-600" />
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">10k+</div>
                <div className="text-sm text-slate-500">Active Users</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <div className="text-sm text-slate-500">Uptime</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-500">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200/60 bg-white">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto h-7 bg-white rounded-lg border border-slate-200 flex items-center px-3 text-xs text-slate-400">
                    app.launchpad.io/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-slate-50/50">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    { icon: BarChart3, label: 'Revenue', value: '$48,290', change: '+12.5%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { icon: Shield, label: 'Security Score', value: '98/100', change: '+2.3%', color: 'text-primary-600', bg: 'bg-primary-50' },
                    { icon: Zap, label: 'Performance', value: '99ms', change: '-15ms', color: 'text-violet-600', bg: 'bg-violet-50' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                          <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                      <div className={`text-xs font-medium mt-1 ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-primary-600'}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-slate-700">Growth Overview</div>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-md font-medium">Monthly</div>
                    </div>
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">New Signup</div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">+24.5%</div>
                  <div className="text-xs text-slate-500">This week</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
