'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { ArrowRight, FileText, MapPin } from 'lucide-react'

const RESUME_URL =
  'https://drive.google.com/file/d/1-mtGBDUf57OxGE67i1RBZjJeMMJup9vB/view?usp=sharing'

const stats = [
  { value: '800+', label: 'DSA problems solved' },
  { value: '50+', label: 'traders on Trade915' },
  { value: '2', label: 'live SaaS products' },
]

const stack = ['TypeScript', 'PixiJS', 'Next.js', 'Node.js', 'PostgreSQL']

export default function Hero() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12'
    script.onload = () => {
      // @ts-expect-error Typed.js is loaded dynamically and not typed
      new window.Typed('.rolling', {
        strings: ['Game Developer', 'Full-Stack Engineer', 'Frontend Developer', 'Problem Solver'],
        loop: true,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1400,
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <section id="home" className="hero">
      <span className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <span className="pill">
            <span className="pill__dot" aria-hidden="true" />
            Game Developer · Ingenuity Gaming
          </span>

          <h1 className="hero__title">
            Hey, I&apos;m Aman.
            <br />I build <span className="hero__script">flawless</span> digital experiences.
          </h1>

          <p className="hero__role">
            I&apos;m a <span className="rolling" />
          </p>

          <p className="hero__sub">
            By day I build HTML5 slot games with TypeScript and PixiJS. Before that, I shipped
            full-stack products like Sellary and Trade915.
          </p>

          <div className="hero__ctas">
            <a href="#projects" className="button button--primary">
              View projects <ArrowRight aria-hidden="true" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--ghost"
            >
              <FileText aria-hidden="true" /> Resume
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <div className="id-card">
            <Image
              src="/apple-icon.png"
              alt="Illustrated portrait of Aman Bind"
              width={192}
              height={192}
              className="id-card__avatar"
              priority
            />
            <p className="id-card__name">Aman Bind</p>
            <p className="id-card__role">Game Developer</p>
            <p className="id-card__meta">
              <MapPin aria-hidden="true" /> Noida, India
            </p>
            <ul className="id-card__stack" aria-label="Main stack">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <span className="float-chip float-chip--a" aria-hidden="true">🎮 HTML5 games</span>
          <span className="float-chip float-chip--b" aria-hidden="true">🚀 SaaS builder</span>
        </div>
      </div>
    </section>
  )
}
