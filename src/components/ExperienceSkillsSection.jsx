'use client'

import { motion } from 'framer-motion'

export default function ExperienceSkillsSection({ copy }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">{copy.eyebrow}</p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{copy.title}</h2>

        <ol className="mt-7 space-y-6">
          {copy.timeline.map((item, index) => {
            const last = index === copy.timeline.length - 1
            return (
              <li key={item.heading} className="relative pl-8">
                {!last && (
                  <span className="absolute left-[11px] top-6 h-[calc(100%+1.2rem)] w-px bg-slate-300 dark:bg-slate-600" />
                )}
                <span className="absolute left-0 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-indigo-300 bg-indigo-50 text-[10px] font-semibold text-indigo-700 dark:border-indigo-500/60 dark:bg-indigo-950/60 dark:text-indigo-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{item.heading}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.text}</p>
              </li>
            )
          })}
        </ol>
      </motion.article>

      <motion.div id="skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
          {copy.skillsEyebrow}
        </p>
        <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{copy.skillsTitle}</h3>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {copy.groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-600 dark:bg-slate-900"
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 dark:text-slate-200">
                {group.title}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
