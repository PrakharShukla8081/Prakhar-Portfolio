'use client'
import { motion } from 'framer-motion'
import { Braces, Server, Database, Code2, Cpu, Cloud, Layers, Sparkles, CheckCircle2 } from 'lucide-react'
import { Reveal, Eyebrow, SectionTitle } from './Primitives'
import { SKILL_GROUPS, EDUCATION, CERTS } from './data'

const ICONS = { Braces, Server, Database, Code2, Cpu, Cloud }

function SkillBar({ level }) {
  return (
    <div className="flex w-24 gap-1" aria-label={`Proficiency ${level} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scaleX: 0, opacity: 0.4 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
          style={{ originX: 0 }}
          className={`h-1 flex-1 rounded-full ${i < level ? 'bg-accent' : 'bg-border'}`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border/60 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <SectionTitle>The full stack, honestly.</SectionTitle>
          <p className="mt-4 max-w-xl text-[15px] text-muted-foreground text-pretty">
            Equal strength across <span className="text-foreground">Java</span>,{' '}
            <span className="text-foreground">DSA</span> and the{' '}
            <span className="text-foreground">MERN</span> stack.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = ICONS[g.iconName]
            return (
              <Reveal key={g.category} delay={i}>
                <div className="card-hover h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-accent">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg text-foreground">{g.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {g.items.map((it) => (
                      <li key={it.name} className="flex items-center justify-between gap-4">
                        <span className="text-[13.5px] text-muted-foreground">{it.name}</span>
                        <SkillBar level={it.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-accent"><Layers className="size-4" /></span>
                <h3 className="font-display text-lg text-foreground">Education</h3>
              </div>
              <ul className="space-y-4">
                {EDUCATION.map((e) => (
                  <li key={e.d}>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{e.y}</div>
                    <div className="mt-1 text-[14.5px] text-foreground">{e.d}</div>
                    <div className="text-[12.5px] text-muted-foreground">{e.i}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-accent"><Sparkles className="size-4" /></span>
                <h3 className="font-display text-lg text-foreground">Certifications & Courses</h3>
              </div>
              <ul className="space-y-3.5">
                {CERTS.map((c) => (
                  <li key={c.name} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    <div>
                      <div className="text-[14.5px] text-foreground">{c.name}</div>
                      <div className="text-[12.5px] text-muted-foreground">{c.org}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
