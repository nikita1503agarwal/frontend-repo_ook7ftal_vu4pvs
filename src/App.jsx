import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Freelance from './components/Freelance'
import Contact from './components/Contact'
import ChatbotWidget from './components/ChatbotWidget'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple navbar */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg">Gokul S.</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-purple-700">About</a>
            <a href="#projects" className="hover:text-purple-700">Projects</a>
            <a href="#experience" className="hover:text-purple-700">Experience</a>
            <a href="#freelance" className="hover:text-purple-700">Freelance</a>
            <a href="#contact" className="hover:text-purple-700">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Freelance />
        <Contact />
      </main>

      <ChatbotWidget />

      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Gokul Soundarapandian</footer>
    </div>
  )
}

export default App
