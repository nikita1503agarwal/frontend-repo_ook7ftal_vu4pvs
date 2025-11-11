export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
        <p className="mt-3 text-gray-700">Open to internships, freelance and collaboration. Drop a message or connect via email.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <a href="mailto:gokulsoundarapandian22@gmail.com" className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50">gokulsoundarapandian22@gmail.com</a>
          <a href="tel:+919003099388" className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50">+91 90030 99388</a>
          <div className="rounded-xl border border-gray-200 p-5">Chennai, India</div>
        </div>
      </div>
    </section>
  )
}
