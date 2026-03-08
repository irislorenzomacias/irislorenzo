'use client'

import { motion } from 'framer-motion'

export default function AboutSection({ copy }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md md:col-span-7 md:p-10 dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
        >
          <div className="mb-6 flex flex-col items-center gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
              {copy.eyebrow}
            </p>
            <img
              src="/iris-about-photo.jpg"
              alt="Iris Lorenzo about"
              className="h-28 w-28 rounded-none border-4 border-white object-cover shadow-md ring-1 ring-indigo-200/80 dark:border-slate-700 dark:ring-indigo-400/40"
            />
          </div>
          <h2 className="mt-1 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl dark:text-slate-100">
            {copy.title}
          </h2>
          <p className="mt-5 leading-relaxed text-slate-700 dark:text-slate-300">{copy.paragraphOne}</p>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{copy.paragraphTwo}</p>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 md:col-span-5"
        >
          {copy.cards.map((card) => (
            <article
              key={card.id}
              className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
            >
              <p
                className={`text-xs uppercase tracking-[0.2em] ${
                  card.accent === 'emerald'
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-indigo-700 dark:text-indigo-300'
                }`}
              >
                {card.id}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
