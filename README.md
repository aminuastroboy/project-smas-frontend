# SMAS Frontend Demo (Vercel-ready)

This is a demo frontend for Project SMAS (School Management) with Teacher and Student roles.
Data is stored in localStorage so the demo works without a backend.

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel
1. Push this repository to GitHub.
2. Create a new project on Vercel and import the repo.
3. Vercel should auto-detect the Vite project. If not, use:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

## Demo accounts
- Teacher: teacher@smas.demo / 123456
- Student: student@smas.demo / 123456

All data persists in browser localStorage. To reset demo data, clear localStorage for the site.
