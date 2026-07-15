import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
