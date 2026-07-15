'use client'
import { GitBranch, Github, Linkedin, Mail } from 'lucide-react'
import { LINKS } from './data'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground">
          <GitBranch className="size-3.5" /> designed &amp; built by Prakhar Shukla — {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href={LINKS.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Github className="size-4" /></a>
          <a href={LINKS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Linkedin className="size-4" /></a>
          <a href={`mailto:${LINKS.email}`} aria-label="Email" className="transition hover:text-foreground"><Mail className="size-4" /></a>
        </div>
      </div>
    </footer>
  )
}
