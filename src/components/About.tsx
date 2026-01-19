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
            I&apos;m <strong>Aman Bind</strong>, a passionate <em>4th-year</em> B.Tech student at <strong>IIIT Bhagalpur</strong>, pursuing <em>Computer Science and Engineering</em>.
            Originally from <strong>Azamgarh, Uttar Pradesh</strong>, I have a deep interest in <em>coding, web development, and problem-solving</em>.

            My journey in technology has been driven by curiosity and a desire to build impactful solutions.
            I enjoy working on <em>full-stack web development</em>, exploring <em>AI-driven applications</em>, and continuously refining my coding skills.
            Whether it&apos;s crafting scalable web applications or tackling complex problems, I thrive on challenges that push me to learn and innovate.

            As a final-year student actively looking for a <strong>stable, growth-oriented job opportunity</strong>, I&apos;m keen to apply my skills in a professional environment where I can contribute meaningfully.

            Beyond academics, I actively participate in <em>hackathons, coding competitions, and open-source projects</em>, aiming to expand my knowledge and collaborate with like-minded developers.
            I believe in lifelong learning and I&apos;m always open to new opportunities, collaborations, and exciting projects.

            Let&apos;s connect and build something amazing together! 🚀
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
                  <p>Currently in 4th year at Indian Institute of Information Technology, Bhagalpur.</p>
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
