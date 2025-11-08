import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      image: "/images/trade915.png",
      title: "Trade915 : Trading Productivity SaaS Suite",
      description: "A comprehensive trading productivity platform built with Next.js, MongoDB, and Firebase backend in Node.js. Features include Trade Journal, IPO & GMP Tracker, FII/DII Analytics, Market Radar, and real-time news updates. Designed for Indian traders with noise-free dashboards to build discipline and consistency.",
      tags: ["Next.js","Node.js", "MongoDB", "Firebase", "TypeScript", "Tailwind CSS", "SaaS"],
      liveLink: "https://trade915.app/",
      githubLink: "" // Add GitHub link here if available
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
    {
      image: "/images/cpp.png", // Using existing image as placeholder
      title: "Live Fraud Rule Composer & Transaction Explorer",
      description: "Real-time fraud detection system with rule composer and transaction explorer. Built with advanced algorithms for financial security and risk management.",
      tags: ["MongoDb", "WebSocket", "rule-based", "Real-time","tool"],
      liveLink: "",
      githubLink: "https://github.com/amanbind898/Live-Fraud-Rule-Composer-Transaction-Explorer"
    },
    {
      image: "/images/cpp.png", // Using existing image as placeholder
      title: "Full Stack Scraper Challenge",
      description: "Comprehensive web scraping solution with full-stack implementation. Handles complex data extraction and processing with modern web technologies.",
      tags: ["Web Scraping", "Full Stack", "Python", "Flask", "Data Processing"],
      liveLink: "",
      githubLink: "https://github.com/amanbind898/Full-Stack-Scraper-Challenge"
    }
  ]

  return (
    <section id="projects" className="projects py-48">
      <div className="main-container flex flex-col items-center w-[92%] max-w-[120rem] mx-auto">
        <h2 className="heading heading-sec heading-sec__mb-bg mb-44">
          <span className="heading-sec__main uppercase tracking-[3px] text-center mb-14 text-[4rem] block relative after:content-[''] after:bg-primary after:rounded-md after:w-12 after:h-[5px] after:absolute after:top-[calc(100%+1.5rem)] after:left-1/2 after:transform after:-translate-x-1/2">
            Projects
          </span>
          <span className="heading-sec__sub text-center text-gray-700 max-w-[80rem] mx-auto text-[2.2rem] font-medium leading-[1.6] block">
            Explore a collection of my meticulously crafted web projects, showcasing my proficiency in modern front-end technologies.
          </span>
        </h2>

        <div className="projects-container space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col md:flex-row bg-white rounded-xl shadow-2xl mb-10 overflow-hidden transition-transform hover:-translate-y-2">
              <div className="project-image-container w-full md:w-2/5 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="project-image w-full h-auto object-contain transition-transform hover:scale-105 bg-gray-50"
                  loading="lazy"
                />
              </div>
              <div className="project-info w-full md:w-3/5 p-8 md:p-12 flex flex-col">
                <h3 className="project-title text-[2.5rem] mb-4 text-gray-900 font-bold">{project.title}</h3>
                
                {/* Tags */}
                <div className="project-tags mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="tag bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="project-description text-[1.5rem] leading-[1.7] mb-6 text-gray-600 flex-grow">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="project-actions flex gap-4 flex-wrap">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      className="project-btn project-btn--live btn btn--theme btn--med"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      className="project-btn project-btn--github btn btn--med"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📂 View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
