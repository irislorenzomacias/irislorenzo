'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6a2.5 2.5 0 1 0 2.48-2.5zM3 8h4v13H3zM9 8h3.82v1.77h.05c.53-1 1.85-2.05 3.8-2.05C20.3 7.72 22 9.87 22 13.2V21h-4v-6.87c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.63 1.78-2.63 3.62V21H9z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.25 1.84 1.25 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.37 1.24-3.21-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.31 1.23A11.4 11.4 0 0 1 12 6.3c1.01 0 2.03.14 2.98.41 2.29-1.55 3.3-1.23 3.3-1.23.67 1.65.25 2.88.13 3.18.77.84 1.24 1.91 1.24 3.21 0 4.58-2.8 5.59-5.47 5.89.43.38.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  )
}

export default function ContactSection({ copy }) {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus('idle')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitStatus('success')
      setFormData(initialForm)
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md md:p-10 dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">{copy.eyebrow}</p>
        <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl dark:text-slate-100">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">{copy.description}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1">
            <a
              href="mailto:iris_lorenzo_macias@hotmail.com"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 text-center text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {copy.emailLabel}: iris_lorenzo_macias@hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/iris-lorenzo-macias-b698b9198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/irislorenzomacias"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="GitHub"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-600 dark:bg-slate-900"
          >
            <div className="grid gap-4">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">
                {copy.formName}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              />

              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                {copy.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              />

              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">
                {copy.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
              >
                {isSubmitting ? copy.formSending : copy.formSubmit}
              </button>

              {submitStatus === 'success' && (
                <p className="text-sm text-emerald-700 dark:text-emerald-300">{copy.formSuccess}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-700 dark:text-red-300">{copy.formError}</p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
