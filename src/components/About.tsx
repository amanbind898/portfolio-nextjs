import { FileText, GraduationCap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const RESUME_URL =
  'https://drive.google.com/file/d/1-mtGBDUf57OxGE67i1RBZjJeMMJup9vB/view?usp=sharing'

const education = [
  {
    period: '2022 – 2026',
    title: 'B.Tech, Computer Science and Engineering',
    detail: 'Indian Institute of Information Technology, Bhagalpur · CGPA 7.85',
  },
  {
    period: '2021',
    title: 'Intermediate (12th), Science',
    detail: 'Little Flower House, Varanasi · 92%',
  },
  {
    period: '2019',
    title: 'High School (10th)',
    detail: 'New Cambridge School, Azamgarh · 91%',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m Aman Bind, a <strong>Game Developer at Ingenuity Gaming</strong> in Noida,
              where I build HTML5 slot games using TypeScript and PixiJS. I graduated in Computer
              Science and Engineering from IIIT Bhagalpur in 2026.
            </p>
            <p>
              Before games, I built full-stack products, including <strong>Sellary</strong>, a
              creator-commerce SaaS, and <strong>Trade 9:15</strong>, a trading platform used by
              50+ Indian traders. I enjoy 2D rendering, animation and performance work, as well as
              backend and system design.
            </p>
            <p>
              Outside work, I solve DSA problems (800+ across platforms) and contribute to open
              source.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              <FileText aria-hidden="true" /> View resume
            </a>
          </div>

          <div className="card">
            <h3 className="card__title">
              <GraduationCap aria-hidden="true" /> Education
            </h3>
            <ol className="timeline-list">
              {education.map((item) => (
                <li key={item.period} className="timeline-list__item">
                  <span className="timeline-list__period">{item.period}</span>
                  <p className="timeline-list__title">{item.title}</p>
                  <p className="timeline-list__detail">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
