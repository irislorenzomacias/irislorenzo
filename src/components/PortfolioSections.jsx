'use client'

import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ExperienceSkillsSection from './ExperienceSkillsSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import { portfolioCopy } from '../content/portfolioCopy'

const languages = ['en', 'es', 'de']

const uiText = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Aptitudes',
      projects: 'Projects',
      contact: 'Contact',
    },
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    rights: '© 2026. All rights reserved.',
    builtWith:
      'About this website: built with React, JavaScript, Tailwind CSS, Framer Motion, Express, and PostgreSQL (prepared structure for App Router and Server Actions).',
    legal: 'Legal notice',
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mi',
      experience: 'Experiencia',
      skills: 'Aptitudes',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    darkMode: 'Modo oscuro',
    lightMode: 'Modo claro',
    rights: '© 2026. Todos los derechos reservados.',
    builtWith:
      'Sobre esta web: construida con React, JavaScript, Tailwind CSS, Framer Motion, Express y PostgreSQL (estructura preparada para App Router y Server Actions).',
    legal: 'Aviso legal',
  },
  de: {
    nav: {
      home: 'Start',
      about: 'Uber mich',
      experience: 'Erfahrung',
      skills: 'Kompetenzen',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    darkMode: 'Dunkler Modus',
    lightMode: 'Heller Modus',
    rights: '© 2026. Alle Rechte vorbehalten.',
    builtWith:
      'Uber diese Website: erstellt mit React, JavaScript, Tailwind CSS, Framer Motion, Express und PostgreSQL (vorbereitete Struktur fuer App Router und Server Actions).',
    legal: 'Impressum',
  },
}

const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact']

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLanguage = window.localStorage.getItem('language')
  return languages.includes(storedLanguage) ? storedLanguage : 'en'
}

export default function PortfolioSections() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const copy = useMemo(() => portfolioCopy[language] ?? portfolioCopy.en, [language])
  const labels = useMemo(() => uiText[language] ?? uiText.en, [language])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))

      const probeY = window.scrollY + window.innerHeight * 0.35
      let current = 'home'

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && probeY >= element.offsetTop) {
          current = id
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const navItems = [
    { id: 'home', label: labels.nav.home },
    { id: 'about', label: labels.nav.about },
    { id: 'experience', label: labels.nav.experience },
    { id: 'skills', label: labels.nav.skills },
    { id: 'projects', label: labels.nav.projects },
    { id: 'contact', label: labels.nav.contact },
  ]

  return (
    <main className="min-h-screen text-slate-900 antialiased transition-colors dark:text-slate-100">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-indigo-600 transition-[width] duration-150 dark:bg-indigo-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/75 backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-950/75">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 md:px-10">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            {navItems.map((section) => {
              const isActive = activeSection === section.id
              return (
                <a
                  key={section.id}
                  className={`rounded-full px-3 py-1.5 transition ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  href={`#${section.id}`}
                >
                  {section.label}
                </a>
              )
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              className="rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? labels.lightMode : labels.darkMode}
            </button>

            <div className="flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-3 py-2 dark:border-slate-700/70 dark:bg-slate-900/70">
              <label
                htmlFor="language-select"
                className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300"
              >
                {copy.langLabel}
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-semibold uppercase text-slate-700 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <HeroSection copy={copy.hero} />
      <AboutSection copy={copy.about} />
      <ExperienceSkillsSection copy={copy.experience} />
      <ProjectsSection language={language} />
      <ContactSection copy={copy.contact} />

      <footer className="border-t border-slate-200/60 bg-white/70 px-6 py-8 text-sm text-slate-700 backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-950/70 dark:text-slate-300 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3">
          <p>{labels.rights}</p>
          <p>{labels.builtWith}</p>
          <Link to={`/aviso-legal?lang=${language}`} className="w-fit rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800">
            {labels.legal}
          </Link>
        </div>
      </footer>
    </main>
  )
}
