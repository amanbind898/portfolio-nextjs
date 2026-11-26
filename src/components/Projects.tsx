import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Projects() {
  const projects = [
    {
      image: "/images/sellary.png",
      title: "Sellary — Creator Commerce SaaS Platform 2026",
      description: "Built an end-to-end digital commerce platform enabling creators to sell digital products with automated payment verification and secure post-payment delivery using Razorpay webhooks. Implemented a customizable storefront and mobile-first link-in-bio system. Designed a rule-based content moderation pipeline with text normalization and keyword classification to automatically flag policy-violating products for admin review. Developed a real-time analytics dashboard aggregating sales, platform commissions, and traffic attribution metrics.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Razorpay API", "Framer Motion"],
      liveLink: "https://sellary.live/", // Add Live link here
      githubLink: "" // Add GitHub link here
    },
    {
      image: "/images/trade915.png",
      title: "Trade915 : Trading Productivity SaaS Suite",
      description: "A comprehensive trading productivity platform built with Next.js, MongoDB, and Firebase backend in Node.js. Features include Trade Journal, IPO & GMP Tracker, FII/DII Analytics, Market Radar, and real-time news updates. Designed for Indian traders with noise-free dashboards to build discipline and consistency.",
      tags: ["Next.js","Node.js", "MongoDB", "Firebase", "TypeScript", "Tailwind CSS", "SaaS"],
      liveLink: "https://trade915.app/",
      githubLink: "" // Add GitHub link here if available
    },
    {
      title: "Plant Disease Detection (AgriNet)",
      description: "A plant disease detection project focused on identifying crop diseases from plant images.",
      tags: ["Plant Disease Detection", "AgriNet"],
      liveLink: "",
      githubLink: ""
    },
    {
      image: "/images/coderstat.png",
      title: "CoderStat : All in One coding portfolio tracker and tool",
      description: "Integrates Codeforces, LeetCode, and CodeChef stats with a sleek UI (Next.js, Tailwind CSS, Clerk Auth). Real-time coding stats, personalized dashboards, and user-friendly interface for developers. Event tracker for upcoming contests and a 450-question DSA sheet.",
      tags: ["Next.js", "Tailwind CSS", "Clerk Auth", "API Integration", "React"],
      liveLink: "https://coderstat.vercel.app/",
      githubLink: "" // Add GitHub link here if available
    },
    {
      image: "/images/interview.png",
      title: "AI Mock Interview App",
      description: "AI-driven mock interview platform with real-time feedback, leveraging Next.js, Clerk authentication, and GenAI to enhance interview preparedness.",
      tags: ["Next.js", "Clerk Auth", "GenAI", "React", "Js"],
      liveLink: "https://mock-mateai.vercel.app/",
      githubLink: "https://github.com/amanbind898/ai-mock-interview"
    },
    {
      image: "/images/skillup.png",
      title: "SkillUp: Skill Development Portal",
      description: "A structured learning platform supporting 100+ active learners, integrating real-time progress tracking and automation with web scraping.",
      tags: ["React", "Node.js", "Web Scraping", "MongoDB", "Express"],
      liveLink: "https://skill-development-portal.vercel.app/",
      githubLink: "https://github.com/amanbind898/skillup"
    },
    {
      image: "/images/Untitled design.png",
      title: "JEE Main College Predictor Tool",
      description: "A website built using HTML, CSS, and JavaScript to predict colleges based on JEE Main rank, offering a practical and user-friendly tool.",
      tags: ["HTML", "CSS", "JavaScript", "Data Analysis", "Educational Tool"],
      liveLink: "https://college-nexus.onrender.com/college%20predictor/public/index.html",
      githubLink: "https://github.com/amanbind898/rank2college"
    },
    {
      image: "/images/cpp.png",
      title: "Student Report Card Management System",
      description: "A console-based system developed in C++ with file handling and OOP principles, allowing CRUD operations for student report management.",
      tags: ["C++", "OOP", "File Handling", "Console Application", "CRUD"],
      liveLink: "",
      githubLink: "https://github.com/amanbind898/Student-Report-Card-Management-System"
    },
  ]

  return (
    <section id="projects" className="section section--soft">
      <div className="wrap">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          sub="A selection of products, platforms, and experiments across game development, full-stack engineering, and machine learning."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="card project">
              <div className="project__media">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={800}
                    height={500}
                    className="project__img"
                    loading="lazy"
                  />
                ) : (
                  <span className="project__placeholder" aria-hidden="true">
                    {project.title.charAt(0)}
                  </span>
                )}
                {index < 2 && <span className="project__badge">Featured</span>}
              </div>

              <div className="project__body">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.description}</p>
                <ul className="project__tags" aria-label="Tech stack">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag-chip">{tag}</li>
                  ))}
                </ul>

                {(project.liveLink || project.githubLink) && (
                  <div className="project__actions">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        className="button button--primary button--sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo <ArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="button button--ghost button--sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github aria-hidden="true" /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
