
# Patch Notes & Troubleshooting Guide

## Common errors observed and fixes
- **libGL.so.1 missing / dlib build failure**:
  - Cause: native C++ libs required by dlib/face-recognition.
  - Fix: Remove native builds from frontend; move face recognition to a backend microservice with a prepared image-processing container, or use hosted APIs like Face++ / DeepFace API. If building locally/CI, use a Docker image with system deps (e.g. `apt-get install -y libgl1-mesa-glx build-essential`).

- **psycopg2 OperationalError / wheel build fails**:
  - Use `psycopg2-binary` for quick deployments, or ensure the build image has `libpq-dev` and `python3-dev` installed.

- **Auth import failed: libGL.so.1**:
  - As above, include system-level libs in the image or avoid camera-native processing on the frontend.

## Deployment tips
- For Vercel: Ensure `engines.node` in package.json matches Node version in Vercel settings (Node 18 recommended).
- For Netlify: `netlify.toml` included above helps Netlify detect build settings.
- For Streamlit or Python-backed services: separate the Python backend from frontend and deploy independently (e.g., Heroku/Render for Python, Vercel for frontend).

## Next steps I can do for you (pick any):
- Integrate your real `src/` files into this patch and produce a ready-to-deploy zip.
- Create a small backend microservice template (FastAPI) for face verification using hosted API.
- Generate CI workflow (GitHub Actions) that builds Docker image with required system libs and pushes to a container registry.

