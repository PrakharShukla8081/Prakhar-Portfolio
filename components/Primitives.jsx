'use client'
import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] },
  }),
}

export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </div>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
      {children}
    </h2>
  )
}
