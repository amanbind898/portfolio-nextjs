import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

type Skill = { name: string; icon?: string }

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS', icon: `${DEVICON}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      { name: 'Vue.js', icon: `${DEVICON}/vuejs/vuejs-original.svg` },
    ],
  },
  {
    title: 'Game Development',
    skills: [{ name: 'PixiJS' }, { name: 'HTML5 Canvas' }],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'Express', icon: `${DEVICON}/express/express-original.svg` },
      { name: 'FastAPI', icon: `${DEVICON}/fastapi/fastapi-original.svg` },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
      { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg` },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg` },
      { name: 'Postman', icon: `${DEVICON}/postman/postman-original.svg` },
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section--soft">
      <div className="wrap">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          sub="From game rendering to full-stack products, plus a strong foundation in DSA, AI and machine learning with Python."
        />

        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title} className="card skills-card">
              <h3 className="card__title">{group.title}</h3>
              <ul className="chips">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="chip">
                    {skill.icon ? (
                      <Image src={skill.icon} alt="" width={20} height={20} className="chip__icon" />
                    ) : (
                      <span className="chip__mono" aria-hidden="true">
                        {skill.name[0]}
                      </span>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="subhead">Competitive programming</h3>
        <div className="profiles-grid">
          <a
            href="https://www.codechef.com/users/akb898"
            target="_blank"
            rel="noopener noreferrer"
            className="card profile-stat"
          >
            <span className="profile-stat__site">CodeChef</span>
            <span className="profile-stat__value">2★</span>
            <span className="profile-stat__label">Max rating 1505</span>
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/akb898/"
            target="_blank"
            rel="noopener noreferrer"
            className="card profile-stat"
          >
            <span className="profile-stat__site">GeeksforGeeks</span>
            <span className="profile-stat__value">1654</span>
            <span className="profile-stat__label">Contest rating</span>
          </a>
          <a
            href="https://codeforces.com/profile/akb898"
            target="_blank"
            rel="noopener noreferrer"
            className="card profile-card"
          >
            <span className="profile-stat__site">Codeforces</span>
            <Image
              src="https://codeforces-readme-stats.vercel.app/api/card?username=akb898"
              alt="Codeforces stats for akb898"
              width={300}
              height={200}
              className="profile-card__img"
            />
          </a>
          <a
            href="https://leetcode.com/akb898"
            target="_blank"
            rel="noopener noreferrer"
            className="card profile-card"
          >
            <span className="profile-stat__site">LeetCode</span>
            <Image
              src="https://leetcode-stats.vercel.app/api?username=akb898&theme=Light"
              alt="LeetCode stats for akb898"
              width={400}
              height={200}
              className="profile-card__img"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
