import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full pt-24 pb-16 grid md:grid-cols-2 gap-10">
        <div className="backdrop-blur-sm">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200/60 mb-4">AI • Automation • Software Engineering</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Gokul Soundarapandian
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            Motivated Computer Science undergraduate building intelligent and scalable solutions. Hands-on with GenAI agents, RAG, workflow automation, and containerized deployments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-600/20 hover:opacity-95 transition">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-800 font-semibold border border-gray-200 hover:bg-gray-50 transition">
              Contact
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Chennai, India • gokulsoundarapandian22@gmail.com • +91 90030 99388
          </div>
        </div>
      </div>
    </section>
  )
}
