'use client'

import { useState } from 'react'

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

      const res = await fetch("https://script.google.com/macros/s/AKfycbyd5I2K92oFvQ7_tYsxdOce6344jsZl6g75g8NcBxmJYeA7PvWQP309TDAjYMm1nmZj/exec", {
        method: "POST",
        body: formDataToSend,
        mode: 'no-cors'
      })

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setMessage("✅ Message sent successfully!")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setMessage("❌ Error sending message.")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="contact py-48">
      <div className="main-container flex flex-col items-center w-[92%] max-w-[120rem] mx-auto">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main uppercase tracking-[3px] text-center mb-14 text-[4rem] block relative after:content-[''] after:bg-primary after:rounded-md after:w-12 after:h-[5px] after:absolute after:top-[calc(100%+1.5rem)] after:left-1/2 after:transform after:-translate-x-1/2">
            Contact
          </span>
          <span className="heading-sec__sub text-center text-gray-700 max-w-[80rem] mx-auto text-[2.2rem] font-medium leading-[1.6] block">
            Get in touch with me and let's start a conversation. I'm here to listen and collaborate with you.
          </span>
        </h2>

        <form
          className="contact-form-container w-[95%] max-w-[80rem] p-16"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-8 text-[1.6rem] border border-gray-300 rounded-md mb-8"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-8 text-[1.6rem] border border-gray-300 rounded-md mb-8"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-8 text-[1.6rem] border border-gray-300 rounded-md mb-8 h-40 resize-none"
            required
          />
          <div className="text-center">
            <button
              type="submit"
              className="contact__btn w-full md:w-[30%] px-16 py-8 text-[1.6rem] bg-gray-800 text-white border-none rounded-md cursor-pointer hover:bg-gray-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
          {message && (
            <p className="text-center mt-4 text-lg font-medium" style={{ color: message.includes('✅') ? '#28a745' : '#dc3545' }}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
