import { Pool } from 'pg'

let pool

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL

    if (!connectionString) {
      throw new Error('DATABASE_URL is missing')
    }

    pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    })
  }

  return pool
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!trimmedName || !trimmedEmail || !trimmedMessage || !emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Invalid content.' })
  }

  if (trimmedName.length > 120 || trimmedEmail.length > 180 || trimmedMessage.length > 5000) {
    return res.status(400).json({ error: 'Input too long.' })
  }

  try {
    await getPool().query(
      
      INSERT INTO contact_messages (name, email, message)
      VALUES (, , )
      ,
      [trimmedName, trimmedEmail, trimmedMessage],
    )

    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('Failed to insert contact message', error)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}