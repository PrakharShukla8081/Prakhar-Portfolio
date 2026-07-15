'use client'
import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { Eyebrow, SectionTitle } from './Primitives'
import { LINKS } from './data'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    const name = state.name.trim()
    const email = state.email.trim()
    const message = state.message.trim()
    if (name.length < 2) return setErr('Please enter your name.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr('Please enter a valid email.')
    if (message.length < 10) return setErr('Message should be at least 10 characters.')
    setErr(null)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent('Portfolio inquiry from ' + name)}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative border-t border-border/60 py-28 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 backdrop-blur sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-violet/15 blur-3xl" aria-hidden />

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <SectionTitle>Let&apos;s build something<br />that scales.</SectionTitle>
              <p className="mt-5 max-w-md text-[15px] text-muted-foreground text-pretty">
                Open to full-time SDE / Backend roles, freelance, and interesting collaborations. I usually reply within 24 hours.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { Icon: Mail, label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
                  { Icon: Phone, label: 'Phone', value: LINKS.phone, href: 'tel:+918081940458' },
                  { Icon: Github, label: 'GitHub', value: 'github.com/prakharshukla', href: LINKS.github },
                  { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/prakharshukla', href: LINKS.linkedin },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card-hover flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-lg bg-surface-2 text-accent"><l.Icon className="size-4" /></span>
                      <span>
                        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">{l.label}</span>
                        <span className="block text-[13.5px] text-foreground">{l.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={submit} className="rounded-2xl border border-border bg-background/60 p-6" noValidate>
              <label className="block">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">Name</span>
                <input
                  required maxLength={80}
                  value={state.name}
                  onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface/60 px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Your name"
                />
              </label>
              <label className="mt-4 block">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">Email</span>
                <input
                  required type="email" maxLength={200}
                  value={state.email}
                  onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface/60 px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="you@example.com"
                />
              </label>
              <label className="mt-4 block">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">Message</span>
                <textarea
                  required minLength={10} maxLength={1200} rows={5}
                  value={state.message}
                  onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface/60 px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Tell me about the role or project…"
                />
              </label>

              {err && <p className="mt-3 text-[12.5px] text-red-400">{err}</p>}
              {sent && !err && <p className="mt-3 text-[12.5px] text-mint">Opening your email client…</p>}

              <button
                type="submit"
                className="shine mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Send message <ArrowUpRight className="size-4" />
              </button>
              <p className="mt-3 text-center text-[11.5px] text-muted-foreground">
                Prefer email? <a className="underline underline-offset-2 hover:text-foreground" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
