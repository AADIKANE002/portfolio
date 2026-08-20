# 🌐 How to Share Your Portfolio Live on the Internet

Here are the 2 fastest ways to get your portfolio live with a shareable URL:

---

## Option 1: Deploy to GitHub Pages (Recommended — Completely Free & Permanent)

Your GitHub username is **`AADIKANE002`**.

### Steps:
1. Open PowerShell or Command Prompt in this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: launch interactive developer portfolio"
   git branch -M main
   ```
2. Create a new repository on your GitHub account ([github.com/new](https://github.com/new)) named `portfolio` (or `AADIKANE002.github.io`).
3. Connect and push your code:
   ```bash
   git remote add origin https://github.com/AADIKANE002/portfolio.git
   git push -u origin main
   ```
4. Go to your repository on GitHub:
   - Click **Settings** (top tab)
   - Click **Pages** (in left sidebar)
   - Under **Build and deployment** > **Source**, change it from "Deploy from a branch" to **"GitHub Actions"**.
5. The workflow will automatically build and deploy your site within ~60 seconds!
6. Your live shareable URL will be:
   **`https://aadikane002.github.io/portfolio/`** (or `https://aadikane002.github.io/`)

---

## Option 2: Deploy to Vercel (Fastest — 30 Seconds)

1. Run this command in your terminal:
   ```bash
   npx vercel
   ```
2. Login with GitHub or email when prompted.
3. Accept the default settings.
4. Your website will be live with a URL like:
   **`https://aditya-kumar.vercel.app`**

---

## Option 3: Deploy to Netlify

1. Run:
   ```bash
   npm run build
   ```
2. Go to **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
3. Drag and drop the `dist` folder directly onto the page.
4. Instant live URL generated!
