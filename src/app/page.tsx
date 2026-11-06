import Header from '@/components/Header'
import Hero from '@/components/Hero'

import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
  
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
