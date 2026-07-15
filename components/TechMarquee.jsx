'use client'
import { MARQUEE } from './data'

export default function TechMarquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <section aria-label="Tech stack" className="border-y border-border/60 bg-background py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="size-1 rounded-full bg-accent/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
