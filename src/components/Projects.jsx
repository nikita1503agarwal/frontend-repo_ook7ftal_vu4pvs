import { ExternalLink, Github, Play } from 'lucide-react'

const liveProjects = [
  {
    title: 'Grocery Store Management System',
    desc: 'Inventory, billing and user operations with Python + MySQL.',
    tags: ['Python', 'MySQL', 'CRUD'],
    live: '#',
    code: '#'
  },
  {
    title: 'Chatbot with External Tool Integration',
    desc: 'AI chatbot interacting with APIs using LangChain + Streamlit + n8n.',
    tags: ['LangChain', 'Streamlit', 'n8n'],
    live: '#',
    code: '#'
  },
  {
    title: 'RAG-based Chatbot with Tools',
    desc: 'Retrieval-augmented generation with integrated tools.',
    tags: ['RAG', 'LangChain'],
    live: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <a href="#contact" className="text-purple-600 hover:text-purple-700 font-semibold">Let’s collaborate</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProjects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-gray-200 bg-white/80 p-5 hover:shadow-xl transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <a href={p.live} className="p-2 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100" aria-label="Live"><ExternalLink size={18} /></a>
                  <a href={p.code} className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200" aria-label="Code"><Github size={18} /></a>
                </div>
              </div>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-200/40">
          <div className="flex items-center gap-3 text-purple-800">
            <Play size={20} />
            <p className="font-medium">Want to showcase a live demo? Share your links and I’ll wire them up.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
