# Backend PostgreSQL setup

1. Create a local `.env` in project root from `.env.example`.
2. Ensure PostgreSQL is running and credentials match `.env`.
3. Create database if needed:
   - `createdb portfolio`
4. Run migration file:
   - `psql -d portfolio -f server/sql/001_create_contact_messages.sql`
5. Start API:
   - `npm run dev:api`
6. In another terminal start web:
   - `npm run dev`

The contact form stores submissions in `contact_messages`.
