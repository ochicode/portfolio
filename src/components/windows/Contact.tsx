import React, { useState } from 'react'
import './Contact.css'

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
    <div className="window-section contact-section">
      <div className="section-header">
        <h2>📧 Contact.app</h2>
      </div>

      <div className="contact-content">
        <p className="contact-intro">
          Let's connect! Reach out for collaboration, opportunities, or just to say hi.
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <span className="method-icon">📧</span>
            <div className="method-info">
              <strong>Email</strong>
              <p>your.email@example.com</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="method-icon">💼</span>
            <div className="method-info">
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/yourprofile</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="method-icon">🐙</span>
            <div className="method-info">
              <strong>GitHub</strong>
              <p>github.com/yourusername</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="method-icon">🐦</span>
            <div className="method-info">
              <strong>Twitter</strong>
              <p>@yourhandle</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="form-title">Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
