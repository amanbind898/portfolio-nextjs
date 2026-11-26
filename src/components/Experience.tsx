import { Briefcase } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const roles = [
  {
    period: 'Oct 2026 – Present',
    role: 'Game Developer',
    company: 'Ingenuity Gaming',
    current: true,
    points: [
      'Building HTML5 slot games with TypeScript and PixiJS.',
      'Focused on 2D rendering, animation, and performance.',
    ],
  },
  {
    period: 'Apr 2026 – Oct 2026',
    role: 'Trainee Developer',
    company: 'Ingenuity Gaming',
    current: false,
    points: [
      'Contributed to HTML5 game development at Ingenuity Gaming.',
      'Worked with the game development team before moving into the Game Developer role.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Experience"
          title="Where I work"
          sub="Game development at Ingenuity Gaming."
        />

        <ol className="xp">
          {roles.map((item) => (
            <li key={item.period} className="xp__item">
              <span className={`xp__dot ${item.current ? 'xp__dot--current' : ''}`} aria-hidden="true">
                <Briefcase />
              </span>
              <div className="card xp__card">
                <div className="xp__top">
                  <h3 className="xp__role">
                    {item.role} <span className="xp__company">· {item.company}</span>
                  </h3>
                  <span className="xp__period">{item.period}</span>
                </div>
                <ul className="xp__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
