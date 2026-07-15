'use client'
import { Reveal, Eyebrow, SectionTitle } from './Primitives'
import { EXPERIENCE } from './data'

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border/60 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <SectionTitle>Where I&apos;ve built.</SectionTitle>
        </Reveal>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute bottom-2 left-2 top-2 w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i} className="relative mb-14 pl-10 last:mb-0">
              <span className="absolute left-0 top-2 grid size-4 place-items-center rounded-full bg-background">
                <span className="size-2 rounded-full bg-accent shadow-[0_0_0_4px_#070a0f,0_0_0_5px_#3c434d]" />
              </span>

              <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{job.period}</span>
                <span className="rounded-full border border-border px-2.5 py-0.5">{job.type}</span>
              </div>

              <h3 className="font-display text-2xl text-foreground sm:text-3xl">{job.role}</h3>
              <div className="mt-1 text-sm text-accent">{job.company}</div>

              {job.caseStudy ? (
                <div className="mt-5 space-y-3 rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur">
                  {job.caseStudy.map((c) => (
                    <div key={c.label} className="grid gap-2 sm:grid-cols-[92px_1fr] sm:gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{c.label}</span>
                      <p className="text-[14.5px] leading-relaxed text-muted-foreground">{c.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p, k) => (
                    <li key={k} className="flex gap-3 text-[14.5px] leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" /> {p}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-surface/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
