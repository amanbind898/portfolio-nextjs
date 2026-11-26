type Props = {
  eyebrow: string
  title: React.ReactNode
  sub?: React.ReactNode
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, sub, align = 'center' }: Props) {
  return (
    <header className={`section-head section-head--${align}`}>
      <span className="section-head__eyebrow">{eyebrow}</span>
      <h2 className="section-head__title">{title}</h2>
      {sub && <p className="section-head__sub">{sub}</p>}
    </header>
  )
}
