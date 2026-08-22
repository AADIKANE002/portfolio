# Deployment & Setup Guide — Software Engineer (Backend & Full-Stack)

This repository contains the dedicated **Software Engineer (Backend & Full-Stack)** portfolio for **Aditya Kumar**.

---

## Local Development

```bash
# Navigate to project
cd c:\Users\pragy\OneDrive\Desktop\portfolio

# Install dependencies (if not already installed)
npm install

# Start local development server
npm run dev
```

---

## Production Build

```bash
npm run build
```
The compiled production bundle is generated in `dist/`.

---

## Deploying to Separate URLs

### Option 1: Vercel (Recommended — Free & Instant)
1. Push this folder to a GitHub repository named `portfolio` (or `portfolio-backend`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset: **Vite**
5. Click **Deploy**.
6. Your live URL will be: `https://aditya-backend.vercel.app` (or custom domain).

### Option 2: Netlify
1. Push to GitHub and connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Option 3: GitHub Pages
1. In `vite.config.js`, set `base: '/portfolio/'`.
2. Push to GitHub and enable GitHub Pages on `gh-pages` branch.
3. Live URL: `https://aadikane002.github.io/portfolio/`

---

## Resumes Included
- PDF: `public/Aditya_Kumar_Backend_FullStack_Resume.pdf`
- DOCX: `public/Aditya_Kumar_Backend_FullStack_Resume.docx`
