'use client'
import { Server, Cpu, Database } from 'lucide-react'
import { Reveal, Eyebrow, SectionTitle } from './Primitives'

const PILLARS = [
  { Icon: Server, title: 'Backend Engineering', desc: 'REST APIs, JWT auth, centralized middleware, and validation that fails loud in dev and quiet in prod.' },
  { Icon: Cpu, title: 'Java & DSA', desc: 'Strong OOP foundation, algorithmic problem solving, and clean object-oriented design for maintainable systems.' },
  { Icon: Database, title: 'Data Systems', desc: 'MongoDB & SQL schema design, scoring engines, deduplication, and pipelines that handle 100k+ rows cleanly.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <SectionTitle>
            Backend-first,<br />
            <span className="italic text-muted-foreground">detail-obsessed.</span>
          </SectionTitle>
        </Reveal>
        <div className="space-y-5">
          <Reveal delay={1}>
            <p className="text-[15.5px] leading-relaxed text-muted-foreground text-pretty">
              I'm a Software Engineer building the core of a B2B sales intelligence platform at{' '}
              <span className="text-foreground">Beno Support Technologies</span> — designing the API layer,
              the matching engine, and the import pipeline that keeps everything running on messy,
              real-world data.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[15.5px] leading-relaxed text-muted-foreground text-pretty">
              Previously a Data Engineer at <span className="text-foreground">EasyRewardz</span>, working with Python and
              SQL on real client datasets. I started with Java and OOP fundamentals, sharpened through DSA, and now
              build primarily in the Node.js and MongoDB ecosystem — with equal comfort across Java, DSA and MERN.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i + 2}>
                <div className="card-hover h-full rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur">
                  <p.Icon className="size-5 text-accent" aria-hidden />
                  <h3 className="mt-4 font-display text-lg text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
