export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 p-6 bg-white/80">
            <h3 className="text-xl font-semibold">GenAI Intern – Maarga Systems</h3>
            <p className="text-gray-600">May 2025 – July 2025</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Built AI workflows: RAG, autonomous agents, process automation, FastAPI.</li>
              <li>Multi-agent development, model integration, Dockerized deployments.</li>
              <li>Tools: LangChain, Agno, CrewAI, Streamlit, Qdrant, n8n, Ollama, Whisper, OpenRouter.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white/80">
            <h3 className="text-xl font-semibold">Leadership & Achievements</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Team Lead – Smart India Hackathon (Internal Round).</li>
              <li>Participant – Google Solution Challenge: AI Agents Workshop.</li>
              <li>Recognized for teamwork, adaptability and creative problem-solving.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
