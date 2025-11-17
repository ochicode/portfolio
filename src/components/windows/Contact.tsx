import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (This is a demo - connect your own backend)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-w-[450px] max-w-[600px]">
      <div className="mb-4 pb-2 border-b-2 border-win95-dark">
        <h2 className="text-base text-win95-text m-0">📧 Contact.app</h2>
      </div>

      <div className="flex flex-col gap-4">
        <p className="m-0 mb-4 text-[11px] win95-panel p-2">
          Let's connect! Reach out for collaboration, opportunities, or just to say hi.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="win95-panel flex gap-3 items-center p-2.5">
            <span className="text-2xl leading-none">📧</span>
            <div className="flex-1 min-w-0">
              <strong className="text-[11px] block mb-0.5">Email</strong>
              <p className="m-0 text-[10px] text-win95-active whitespace-nowrap overflow-hidden text-ellipsis">
                your.email@example.com
              </p>
            </div>
          </div>
          <div className="win95-panel flex gap-3 items-center p-2.5">
            <span className="text-2xl leading-none">💼</span>
            <div className="flex-1 min-w-0">
              <strong className="text-[11px] block mb-0.5">LinkedIn</strong>
              <p className="m-0 text-[10px] text-win95-active whitespace-nowrap overflow-hidden text-ellipsis">
                linkedin.com/in/yourprofile
              </p>
            </div>
          </div>
          <div className="win95-panel flex gap-3 items-center p-2.5">
            <span className="text-2xl leading-none">🐙</span>
            <div className="flex-1 min-w-0">
              <strong className="text-[11px] block mb-0.5">GitHub</strong>
              <p className="m-0 text-[10px] text-win95-active whitespace-nowrap overflow-hidden text-ellipsis">
                github.com/yourusername
              </p>
            </div>
          </div>
          <div className="win95-panel flex gap-3 items-center p-2.5">
            <span className="text-2xl leading-none">🐦</span>
            <div className="flex-1 min-w-0">
              <strong className="text-[11px] block mb-0.5">Twitter</strong>
              <p className="m-0 text-[10px] text-win95-active whitespace-nowrap overflow-hidden text-ellipsis">
                @yourhandle
              </p>
            </div>
          </div>
        </div>

        <div className="win95-panel p-3">
          <h3 className="text-xs m-0 mb-3 pb-2 border-b border-win95-dark">Send a Message</h3>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[11px] font-bold">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="win95-input"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[11px] font-bold">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="win95-input"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[11px] font-bold">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="win95-input resize-y min-h-[80px]"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="win95-button px-4 py-1.5 text-[11px] font-bold self-start">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
