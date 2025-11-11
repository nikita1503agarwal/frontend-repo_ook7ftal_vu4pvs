export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          I'm a Computer Science undergraduate (2023–2027) with a GPA of 8.34/10 at Prince Dr. K. Vasudevan College of Engineering and Technology. I love building AI-powered applications, automations and clean user experiences. Comfortable across Python, C, MySQL and frameworks like LangChain, Agno, Streamlit, Docker and n8n.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Python', 'C', 'MySQL', 'LangChain', 'Agno', 'Streamlit', 'Docker', 'n8n', 'FastAPI', 'CrewAI', 'Qdrant', 'Ollama', 'OpenRouter', 'Whisper'
          ].map((skill) => (
            <div key={skill} className="rounded-lg border border-gray-200 p-4 text-gray-800 bg-white/70">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
