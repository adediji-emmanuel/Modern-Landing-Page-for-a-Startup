import { Zap, Twitter, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Support', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'Compliance'],
  }

  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Nexus<span className="gradient-text">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">The intelligent infrastructure platform for modern startups. Build, deploy, and scale with confidence.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 NexusAI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500">Made with precision in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
