'use client'

import { motion } from 'framer-motion'

const projectsText = {
  en: {
    eyebrow: 'Projects',
    title: 'Projects in development',
    cards: [
      {
        title: 'cybersuit-grc',
        summary:
          'cybersuit-grc is a modular platform designed to centralize and automate Cybersecurity and Regulatory Compliance (GRC). It streamlines internal consulting work by reducing manual effort, gives end clients a live view of their security status, and is built to evolve into a white-label SaaS product for other consultancies and independent auditors.',
      },
    ],
  },
  es: {
    eyebrow: 'Proyectos',
    title: 'Proyectos en desarrollo',
    cards: [
      {
        title: 'cybersuit-grc',
        summary:
          'cybersuit-grc es una plataforma modular pensada para centralizar y automatizar la gestion de Ciberseguridad y Cumplimiento Normativo (GRC). La aplicacion reduce el trabajo manual interno de consultoria, permite a los clientes finales consultar su estado de seguridad en una plataforma viva y esta diseñada para evolucionar como producto SaaS white-label para otras consultoras y auditores independientes.',
      },
    ],
  },
  de: {
    eyebrow: 'Projekte',
    title: 'Projekte in Entwicklung',
    cards: [
      {
        title: 'cybersuit-grc',
        summary:
          'cybersuit-grc ist eine modulare Plattform zur Zentralisierung und Automatisierung von Cybersecurity- und Compliance-Management (GRC). Die Anwendung reduziert interne manuelle Beratungsaufgaben, bietet Endkunden eine laufende Sicht auf ihren Sicherheitsstatus und ist als White-Label-SaaS fuer weitere Beratungen und unabhängige Auditoren ausgelegt.',
      },
    ],
  },
}

export default function ProjectsSection({ language = 'en' }) {
  const copy = projectsText[language] ?? projectsText.en

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">{copy.eyebrow}</p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{copy.title}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-1">
          {copy.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-600 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{card.summary}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
