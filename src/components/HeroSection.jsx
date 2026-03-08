'use client'

import { motion } from 'framer-motion'

export default function HeroSection({ copy }) {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pb-14 pt-20 md:px-10 md:pt-28">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 p-8 text-center shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md md:col-span-12 md:p-12 dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-700/10 blur-3xl dark:bg-indigo-500/20" />

          <img
            src="/iris-hero-photo.jpg"
            alt="Iris Lorenzo"
            className="mx-auto mb-6 h-36 w-36 rounded-full border-4 border-white/90 object-cover shadow-md ring-1 ring-indigo-200/70 dark:border-slate-700 dark:ring-indigo-400/40"
          />

          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl dark:text-slate-100">
            {copy.name}
          </h1>
          <p className="mt-4 text-2xl font-medium leading-relaxed text-slate-800 md:text-3xl dark:text-slate-200">
            {copy.title}
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg dark:text-slate-300">
            {copy.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium !text-white transition hover:-translate-y-0.5 hover:bg-black dark:bg-slate-100 dark:!text-slate-950 dark:hover:bg-white"
            >
              {copy.primaryCta}
            </a>
            <a
              href="/Professional-CV.pdf"
              download="Professional-CV.pdf"
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {copy.secondaryCta}
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
