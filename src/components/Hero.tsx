'use client'

import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    // Initialize Typed.js for the rolling text animation
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12'
      script.onload = () => {
        // @ts-expect-error Typed.js is loaded dynamically and not typed
        new window.Typed('.rolling', {
          strings: [
            "Student @ IIIT BH",
            "Web Developer",
            "Student @ IIIT BH",
            "Frontend Developer",
            "Coder",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
        })
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section className="home-hero " style={{ position: 'relative', overflow: 'hidden' } }>
   
      <div className="home-hero__content">
        <h2 className="heading-primary">
          <span className="clr fd">Hey I&apos;m Aman</span>
          <div className="hero-section-heading">
            I am a <span className="rolling"></span>
          </div>
          
          <div className="home-hero__info">
            <h1>
              I love to create <br />
              <span className="crsv">&quot;flawless&quot;</span>
              products.
            </h1>
          </div>
          
          <div className="home-hero__cta">
            <a href="#about" className="btn btn--bg">
              About Me &gt;
            </a>
          </div>
        </h2>

      </div>

    </section>
  )
}
