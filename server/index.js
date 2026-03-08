import dotenv from 'dotenv'
import express from 'express'
import { Pool } from 'pg'

dotenv.config()

const app = express()
const port = Number(process.env.API_PORT || 8787)

const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE || 'portfolio',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : false,
})

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid payload.' })
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ error: 'Invalid content.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Invalid email.' })
  }

  if (trimmedName.length > 120 || trimmedEmail.length > 180 || trimmedMessage.length > 5000) {
    return res.status(400).json({ error: 'Input too long.' })
  }

  try {
    await pool.query(
      `
      INSERT INTO contact_messages (name, email, message)
      VALUES ($1, $2, $3)
      `,
      [trimmedName, trimmedEmail, trimmedMessage],
    )

    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('Failed to insert contact message', error)
    return res.status(500).json({ error: 'Internal server error.' })
  }
})

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
