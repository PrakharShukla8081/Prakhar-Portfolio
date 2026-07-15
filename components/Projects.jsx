'use client'
import { Github, CheckCircle2, ExternalLink } from 'lucide-react'
import { Reveal, Eyebrow, SectionTitle } from './Primitives'
import { PROJECTS, LINKS } from './data'

function accentClasses(a) {
  if (a === 'amber') return { bar: 'from-accent to-accent/40', dot: 'bg-accent', text: 'text-accent' }
  if (a === 'mint') return { bar: 'from-mint to-mint/40', dot: 'bg-mint', text: 'text-mint' }
  return { bar: 'from-violet to-violet/40', dot: 'bg-violet', text: 'text-violet' }
}

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-border/60 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Projects</Eyebrow>
          <SectionTitle>Things I&apos;ve shipped.</SectionTitle>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const a = accentClasses(p.accent)
            return (
              <Reveal key={p.title} delay={i} className="h-full">
                <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur">
                  <div className={`h-1 w-full bg-gradient-to-r ${a.bar}`} />
                  <div className="flex-1 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{p.tag}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                        {p.status === 'Live' && <span className={`size-1.5 rounded-full ${a.dot} animate-pulse-dot`} />}
                        <span className={p.status === 'Live' ? a.text : 'text-muted-foreground'}>{p.status}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl leading-tight text-foreground sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
                      {p.desc}
                    </p>

                    <ul className="mt-4 grid grid-cols-2 gap-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-[12px] text-muted-foreground">
                          <CheckCircle2 className={`mt-[2px] size-3 shrink-0 ${a.text}`} /> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full border border-border/70 bg-background/60 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/70 bg-background/40 px-6 py-3">
                    <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground transition hover:text-foreground">
                      <Github className="size-3.5" /> Code
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground transition hover:text-foreground">
                      Case study <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
