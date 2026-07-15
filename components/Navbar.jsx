'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { NAV, LINKS } from './data'

function useSectionActive() {
  const [active, setActive] = useState('about')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
  return active
}

export default function Navbar() {
  const active = useSectionActive()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={[
          'flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-300',
          scrolled ? 'glass border-border/60 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]' : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <a href="#top" className="flex items-center gap-2 pl-2 font-mono text-sm">
          <span className="grid size-7 place-items-center rounded-full bg-accent text-accent-foreground font-display text-[13px]">P</span>
          <span className="hidden sm:inline text-foreground/90">prakhar.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={[
                'relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors',
                active === n.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${LINKS.email}`}
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-[13px] font-medium text-background transition hover:opacity-90 sm:inline-flex"
          >
            Say hi <ArrowUpRight className="size-3.5" />
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-full border border-border md:hidden"
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-4 bg-foreground transition ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`block h-0.5 w-4 bg-foreground transition ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute inset-x-4 top-20 rounded-2xl p-2 md:hidden"
          aria-label="Mobile"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-foreground/90 hover:bg-surface-2"
            >
              {n.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}
