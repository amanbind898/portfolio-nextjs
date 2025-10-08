'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentMessage, setCurrentMessage] = useState('Hello')

  useEffect(() => {
    const languages = ["hello", "नमस्ते ", "নমস্কার", "வனக்கம்", "ನಮಸ್ಕಾರ ", "నమస్కారం"]
    let index = 0
    
    const interval = setInterval(() => {
      setCurrentMessage(languages[index])
      index++
      
      if (index >= languages.length) {
        clearInterval(interval)
        
        // Check if user has visited before
        const hasVisited = localStorage.getItem('visited') === 'true'
        
        if (hasVisited) {
          setIsVisible(false)
        } else {
          setTimeout(() => {
            setIsVisible(false)
            localStorage.setItem('visited', 'true')
          }, 3000)
        }
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      id="preloader"
      className="fixed top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center z-[1100]"
    >
      <h1 
        id="message"
        className="text-5xl font-bold text-zinc-900"
      >
        {currentMessage}
      </h1>
    </div>
  )
}
