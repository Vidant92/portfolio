# Portfolio Backend (Express + MongoDB)

Small Express API that powers the contact form on the frontend.

## Structure

```
backend/
  src/
    config/       # env, MongoDB connection, mailer transport
    routes/        # /api/contact
    controllers/    # request handling / business logic
    middleware/      # validation, rate limiting, error handling
    models/           # ContactMessage (Mongoose schema)
  server.js           # process entry point
  .env.example
```

## Endpoints

| Method | Path            | Description                          |
| ------ | --------------- | ------------------------------------- |
| GET    | `/api/health`   | Health check                          |
| POST   | `/api/contact`  | Submit the contact form (`name`, `email`, `message`) |

## Running locally

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

The API starts on `http://localhost:4000` by default.

## Database

Set `MONGODB_URI` in `.env` (a free MongoDB Atlas cluster works fine) and
submissions are saved via the `ContactMessage` model. If it's left empty,
the server still starts and the contact form still works — submissions are
simply logged to the console instead of persisted, so nothing breaks while
you're setting the database up.

## Email delivery

If `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` are set, submissions are also
emailed to `CONTACT_RECEIVER_EMAIL` via `nodemailer`. Optional, same
graceful-fallback behavior as the database.

## Notes for production

- Set `CORS_ORIGIN` to your deployed frontend URL (comma-separate multiple
  origins if needed).
- Deploy anywhere that runs Node — Render, Railway, or Fly.io all have
  usable free tiers that pair well with a Vercel-hosted frontend.
