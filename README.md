
# Project SMAS Frontend — Patched Build (Template)

This zip contains a **patched frontend template** and deployment/configuration suggestions to fix common build failures encountered on platforms like Vercel/Netlify/Streamlit Cloud.

## What I changed / included
- Clean `package.json` with stable react-scripts and Node 18 engines.
- `netlify.toml` to ensure Netlify uses correct build command.
- `Dockerfile` for reproducible builds with required system libs if building locally/CI.
- `build-fix.sh` script with recommended environment variables for CI.
- Notes on replacing native-heavy Python face libraries with hosted APIs (Face++/DeepFace API) to avoid native-build issues.
- Guidance for `psycopg2` errors: use `psycopg2-binary` or add `libpq-dev` to the build image if you control the backend.

## How to use
1. Unzip and place into your repo root.
2. Replace `src/` with your existing frontend code.
3. Run `npm ci` then `npm run build` locally to test.
4. Push to Vercel/Netlify or build with the provided Dockerfile in CI.

## Download
The zip is available in this environment at `/mnt/data/project_smas_frontend_patched.zip`.
