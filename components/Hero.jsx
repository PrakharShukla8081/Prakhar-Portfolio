'use client'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Mail, Download, Github, Linkedin, MapPin, Terminal } from 'lucide-react'
import { STATS, LINKS } from './data'
import { fadeUp } from './Primitives'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tx = useSpring(mx, { stiffness: 120, damping: 20 })
  const ty = useSpring(my, { stiffness: 120, damping: 20 })

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 20)
        my.set(((e.clientY - r.top) / r.height - 0.5) * 20)
      }}
      className="relative min-h-dvh overflow-hidden pt-32 pb-24"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" aria-hidden />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-float-slow"
        aria-hidden
      />

      <motion.div style={{ opacity }} className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-mint/60" />
              <span className="relative size-2 rounded-full bg-mint" />
            </span>
            Available for SDE / Backend roles
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] tracking-tight text-balance"
          >
            Building backend
            <br />
            systems that <em className="italic text-accent">scale.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground text-pretty"
          >
            I'm <span className="text-foreground">Prakhar Shukla</span> — a Software Engineer specializing in the{' '}
            <span className="text-foreground">MERN stack, Java and Data Structures & Algorithms</span>. I design REST APIs,
            data pipelines and scoring engines that hold up on real, messy production data.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="shine group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              View my work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-border-strong hover:bg-surface"
            >
              <Mail className="size-4" /> Contact me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Download className="size-4" /> Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Github className="size-5" /></a>
            <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Linkedin className="size-5" /></a>
            <a aria-label="Email" href={`mailto:${LINKS.email}`} className="transition hover:text-foreground"><Mail className="size-5" /></a>
            <span className="ml-1 flex items-center gap-1.5 text-xs"><MapPin className="size-3.5" /> {LINKS.location}</span>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-foreground">{s.n}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ x: tx, y: ty }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto w-full max-w-md lg:mt-12"
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">~/prakhar/whoami.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.75] text-foreground/90">
{`const engineer = {
  name: `}<span className="text-accent">&quot;Prakhar Shukla&quot;</span>{`,
  role: `}<span className="text-accent">&quot;Software Engineer&quot;</span>{`,
  stack: [`}<span className="text-mint">&quot;MERN&quot;</span>{`, `}<span className="text-mint">&quot;Java&quot;</span>{`, `}<span className="text-mint">&quot;DSA&quot;</span>{`],
  focus: `}<span className="text-accent">&quot;scalable backends&quot;</span>{`,
  currently: `}<span className="text-accent">&quot;shipping PDR @ Beno&quot;</span>{`,
  open_to: `}<span className="text-mint">&quot;SDE / Backend roles&quot;</span>{`,
};`}
            </pre>
            <div className="flex items-center justify-between border-t border-border/70 bg-surface/60 px-4 py-3">
              <span className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <Terminal className="size-3.5 text-mint" /> zsh · node v20
              </span>
              <span className="font-mono text-[11px] text-mint">● running</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          scroll ↓
        </motion.div>
      </div>
    </section>
  )
}
