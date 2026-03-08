'use client'

import { Link, useSearchParams } from 'react-router-dom'

const legalText = {
  en: {
    eyebrow: 'Legal notice',
    title: 'Legal information about this website',
    p1: 'This portfolio is provided for professional and informational purposes. Content, data, and external links may be updated without prior notice.',
    p2: 'For legal or privacy-related requests, please use the contact channels available on the main website.',
    back: 'Back to website',
  },
  es: {
    eyebrow: 'Aviso legal',
    title: 'Informacion legal del sitio',
    p1: 'Este portafolio se ofrece con fines profesionales e informativos. Los contenidos, datos y enlaces externos pueden actualizarse sin previo aviso.',
    p2: 'Para consultas legales o de privacidad, utiliza los canales de contacto disponibles en la web principal.',
    back: 'Volver a la web',
  },
  de: {
    eyebrow: 'Impressum',
    title: 'Rechtliche Informationen zur Website',
    p1: 'Dieses Portfolio dient beruflichen und informativen Zwecken. Inhalte, Daten und externe Links koennen ohne vorherige Ankuendigung aktualisiert werden.',
    p2: 'Fuer rechtliche oder datenschutzbezogene Anfragen nutzen Sie bitte die Kontaktkanaele auf der Hauptseite.',
    back: 'Zurueck zur Website',
  },
}

export default function LegalNoticePage() {
  const [searchParams] = useSearchParams()
  const lang = searchParams.get('lang')
  const copy = legalText[lang] ?? legalText.en

  return (
    <main className="min-h-screen px-6 py-14 text-slate-900 antialiased dark:text-slate-100 md:px-10">
      <section className="mx-auto max-w-4xl rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/70">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">{copy.eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold">{copy.title}</h1>
        <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{copy.p1}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{copy.p2}</p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
        >
          {copy.back}
        </Link>
      </section>
    </main>
  )
}
