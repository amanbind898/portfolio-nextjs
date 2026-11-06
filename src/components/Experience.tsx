export default function Experience() {
  return (
    <section id="experience" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">
            Experience
          </span>
          <span className="heading-sec__sub">
            Game development at Ingenuity Gaming.
          </span>
        </h2>

        <div className="space-y-12">
          <article className="flex flex-col gap-4 md:flex-row md:gap-12">
            <p className="w-56 shrink-0 text-[1.6rem] font-semibold text-purple-700">Oct 2026 – Present</p>
            <div>
              <h3 className="text-[2.4rem] font-bold text-gray-900">Game Developer · Ingenuity Gaming</h3>
              <p className="mt-3 text-[1.8rem] leading-relaxed text-gray-700">Building HTML5 slot games with TypeScript and PixiJS.</p>
              <p className="text-[1.8rem] leading-relaxed text-gray-700">Focused on 2D rendering, animation, and performance.</p>
            </div>
          </article>

          <article className="flex flex-col gap-4 md:flex-row md:gap-12">
            <p className="w-56 shrink-0 text-[1.6rem] font-semibold text-purple-700">Apr 2026 – Oct 2026</p>
            <div>
              <h3 className="text-[2.4rem] font-bold text-gray-900">Trainee Developer · Ingenuity Gaming</h3>
              <p className="mt-3 text-[1.8rem] leading-relaxed text-gray-700">Contributed to HTML5 game development at Ingenuity Gaming.</p>
              <p className="text-[1.8rem] leading-relaxed text-gray-700">Worked with the game development team before moving into the Game Developer role.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}