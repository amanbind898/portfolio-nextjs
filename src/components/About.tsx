import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">
            About <span style={{ color: 'rgb(55, 0, 255)' }}>Me</span>
          </span>
          <span className="heading-sec__sub">
            I&apos;m Aman Bind, a Game Developer at Ingenuity Gaming in Noida, where I build HTML5 slot games using TypeScript and PixiJS. I graduated in Computer Science and Engineering from IIIT Bhagalpur in 2026. Before games, I built full-stack products, including Sellary, a creator-commerce SaaS, and Trade 9:15, a trading platform used by 50+ Indian traders. I enjoy 2D rendering, animation, and performance work, as well as backend and system design. Outside work, I solve DSA problems (800+ across platforms) and contribute to open source.
          </span>
        </h2>

        <div className="about__content">
          <div className="about__content-skills">
            <Image
              src="/assets/code-typing.svg"
              alt="Description of the image"
              width={400}
              height={400}
            />
          </div>
          <div className="about__content-main">
            <h3 className="about__content-title">Educational Qualifications :</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year" style={{ fontSize: 'large' }}>2022–2026</div>
                <div className="timeline-content">
                  <h3>B.Tech. Computer Science and Engineering</h3>
                  <p>Graduated 2026 · CGPA 7.85 at Indian Institute of Information Technology, Bhagalpur.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2021</div>
                <div className="timeline-content">
                  <h3>Intermediate 12th</h3>
                  <p>Completed 12th from Little Flower House, Varanasi in Science with 92% marks.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2019</div>
                <div className="timeline-content">
                  <h3>High School 10th</h3>
                  <p>Completed 10th from New Cambridge School, Azamgarh with 91% marks.</p>
                </div>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1-mtGBDUf57OxGE67i1RBZjJeMMJup9vB/view?usp=sharing"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              Resume 📄
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
