import Image from 'next/image'

export default function Skills() {
  return (
    <section id="skills" className="about bg-gray-50 py-48">
      <div className="main-container flex flex-col items-center w-[92%] max-w-[120rem] mx-auto">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main uppercase tracking-[3px] text-center mb-14 text-[4rem] block relative after:content-[''] after:bg-primary after:rounded-md after:w-12 after:h-[5px] after:absolute after:top-[calc(100%+1.5rem)] after:left-1/2 after:transform after:-translate-x-1/2">
            My Skills
          </span>
          <span className="heading-sec__sub text-center text-gray-700 max-w-[80rem] mx-auto text-[2.2rem] font-medium leading-[1.6] block">
            With my diverse skillset, I offer a unique, attractive combination that sets me apart.
          </span>
        </h2>

        <div className="about__content grid grid-cols-1 lg:grid-cols-2 gap-40">
          <div className="about__content-skills">
            <div className="dev-skill-wrapper bg-purple-100 p-8 max-w-[1000px] mx-auto rounded-xl text-gray-800">
              <h1 className="dev-skill-title text-center text-[2.5rem] text-purple-800 mb-8">My Tech Stack</h1>

              <section className="dev-skill-section bg-purple-400 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="dev-skill-heading text-[1.5rem] text-white mb-4 text-center">Frontend Development</h2>
                <div className="dev-skill-icons flex justify-center flex-wrap gap-6">
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">HTML</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">CSS</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">JavaScript</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">React</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="Next.js" width={50} height={50} className="transition-transform hover:scale-110 filter invert" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Next.js</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Tailwind</span>
                  </div>
                </div>
              </section>

              <section className="dev-skill-section bg-purple-400 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="dev-skill-heading text-[1.5rem] text-white mb-4 text-center">Backend Development</h2>
                <div className="dev-skill-icons flex justify-center flex-wrap gap-6">
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Node.js</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" width={50} height={50} className="transition-transform hover:scale-110 filter invert" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Express</span>
                  </div>
                </div>
              </section>

              <section className="dev-skill-section bg-purple-400 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="dev-skill-heading text-[1.5rem] text-white mb-4 text-center">Programming Languages</h2>
                <div className="dev-skill-icons flex justify-center flex-wrap gap-6">
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">C</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">C++</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Python</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">JavaScript</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">MySQL</span>
                  </div>
                </div>
              </section>

              <section className="dev-skill-section bg-purple-400 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="dev-skill-heading text-[1.5rem] text-white mb-4 text-center">Database</h2>
                <div className="dev-skill-icons flex justify-center flex-wrap gap-6">
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">MongoDB</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">PostgreSQL</span>
                  </div>
                </div>
              </section>

              <section className="dev-skill-section bg-purple-400 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="dev-skill-heading text-[1.5rem] text-white mb-4 text-center">Developer Tools</h2>
                <div className="dev-skill-icons flex justify-center flex-wrap gap-6">
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">VSCode</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={50} height={50} className="transition-transform hover:scale-110 filter invert" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">GitHub</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Postman</span>
                  </div>
                  <div className="skill-item flex flex-col items-center">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width={50} height={50} className="transition-transform hover:scale-110" />
                    <span className="skill-name text-white text-sm mt-2 font-medium">Docker</span>
                  </div>
                </div>
              </section>

              <section className="dev-skill-section bg-purple-400 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="dev-skill-heading text-[1.5rem] text-white mb-4 text-center">DSA, AI & ML</h2>
                <p className="text-center text-lg font-normal">Strong foundation in Data Structures & Algorithms, AI concepts, and Machine Learning with Python.</p>
              </section>
            </div>
          </div>

          <div className="skills grid grid-cols-1 gap-8 p-8">
            <div className="skill-card bg-gray-100 rounded-xl shadow-lg p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="text-[1.8rem] mb-4 text-gray-800">CodeChef</h3>
              <a href="https://www.codechef.com/users/akb898" target="_blank" className="text-purple-700 font-semibold text-[2.4rem] hover:underline">
                ⭐ 2-Star (Max Rating: 1507)
              </a>
            </div>

            <div className="skill-card bg-green-400 rounded-xl shadow-lg p-2 text-center transition-transform hover:-translate-y-2">
              <h3 className="text-[1.8rem] mb-1 text-gray-800">GeeksforGeeks</h3>
              <a href="https://www.geeksforgeeks.org/user/akb898/" target="_blank" className="text-purple-700 font-semibold text-[2.4rem] hover:underline">
                Contest Rating: 1654
              </a>
            </div>

            <div className="skill-card bg-gray-100 flex items-center flex-col rounded-xl shadow-lg p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="text-[1.8rem] mb-4 text-gray-800">Codeforces</h3>
              <Image 
                src="https://codeforces-readme-stats.vercel.app/api/card?username=akb898" 
                alt="Codeforces Stats" 
                width={300}
                height={200}
                className="w-full max-w-[300px] rounded-lg mx-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>

            <div className="skill-card bg-gray-100  flex items-center flex-col rounded-xl shadow-lg p-1 text-center transition-transform hover:-translate-y-2">
              <h3 className="text-[1.8rem] mb-4 text-gray-800">LeetCode</h3>
              <a href="https://leetcode.com/akb898" target="_blank">
                <Image 
                  src="https://leetcode-stats.vercel.app/api?username=akb898&theme=Light" 
                  alt="LeetCode Stats" 
                  width={400}
                  height={200}
                  className="w-full max-w-[300px] rounded-lg mx-auto"
                
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
