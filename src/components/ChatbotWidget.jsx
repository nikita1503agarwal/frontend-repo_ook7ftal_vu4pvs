import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[320px] h-[420px] rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
          <div className="p-3 border-b bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">Portfolio Assistant</div>
          <iframe
            title="chatbot"
            src="https://librechat-flames.modal.run/embed/min?theme=dark&title=Gokul%20Assistant&subtitle=Ask%20about%20my%20work"
            className="w-full h-[calc(420px-44px)]"
          />
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg flex items-center justify-center hover:opacity-90">
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
