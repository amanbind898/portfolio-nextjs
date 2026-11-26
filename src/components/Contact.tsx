'use client'

import { useState } from 'react'
import { Github, Linkedin, Send, Youtube } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Create form data for Google Apps Script
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('message', formData.message)

      const res = await fetch("https://script.google.com/macros/s/AKfycbwZWReGaNVWKtLTgYh9kSLmdOJbsWfXUXOUclg4lzaQpw1_JilQMlQ0VpYILf0RUdPY/exec", {
        method: "POST",
        body: formDataToSend,
        // Remove mode: 'no-cors' to read the response
      })

      const result = await res.json()
      if (result.status === "success") {
        setMessage("✅ Message sent successfully!")
        setFormData({ name: '', email: '', message: '' })
      } else {
        setMessage("❌ Something went wrong. Try again!")
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage("❌ Error sending message.")
    }

    setLoading(false)
  }

  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amankumarbind', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/amanbind898', Icon: Github },
    { label: 'YouTube', href: 'https://www.youtube.com/@technologicalaman', Icon: Youtube },
  ]

  return (
    <section id="contact" className="section">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let's build something"
            sub="Have a role, a project or just a question? Send a message and I'll get back to you."
          />
          <ul className="contact-links">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Icon aria-hidden="true" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field__label">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span className="field__label">Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span className="field__label">Message</span>
            <textarea
              name="message"
              placeholder="Tell me a little about it"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="button button--primary button--block" disabled={loading}>
            {loading ? 'Sending…' : (<>Send message <Send aria-hidden="true" /></>)}
          </button>
          {message && (
            <p
              className={`form-status ${message.includes('✅') ? 'form-status--ok' : 'form-status--err'}`}
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
