# Achraf Lamia — Portfolio

Personal portfolio built with **Next.js 16** and **Tailwind CSS**, deployed automatically to GitHub Pages via GitHub Actions.

**Live:** [achraflamia.github.io/portfolio](https://achraflamia.github.io/portfolio/)

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 + custom CSS (glassmorphism, gradients) |
| Icons | lucide-react + inline SVG brand icons |
| Fonts | Inter (Google Fonts) |
| Deployment | GitHub Actions → GitHub Pages |

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/AchrafLamia/portfolio.git
cd portfolio

# 2. Install
npm install

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

> The dev server runs without `basePath`. The live site runs at `/portfolio/` — links and assets work the same in both environments.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       ← metadata, font, body background
│   ├── page.tsx         ← assembles all sections in order
│   └── globals.css      ← design tokens, glass cards, gradients, animations
│
├── components/
│   ├── Navbar.tsx       ← fixed nav with scroll blur
│   ├── Hero.tsx         ← name, title, stats, CTAs
│   ├── About.tsx        ← bio text + specialty cards
│   ├── Skills.tsx       ← skill groups + language bars
│   ├── Experience.tsx   ← timeline with all roles + education
│   ├── Projects.tsx     ← featured (3) + grid (5) project cards
│   ├── Contact.tsx      ← contact links with hover glow
│   ├── Footer.tsx       ← logo, copyright, social links
│   └── icons.tsx        ← GitHub + LinkedIn SVG icons
│
├── .github/
│   └── workflows/
│       └── deploy.yml   ← auto-deploy on push to master/main
│
└── next.config.ts       ← output: export, basePath: /portfolio
```

---

## Customization — What to Edit

### 1. Your identity (`components/Hero.tsx` + `components/Navbar.tsx`)
- Name, title, short bio
- `stats` array: your 4 key achievements with value + label
- Social links (GitHub, LinkedIn, email)
- Location and availability badge

### 2. About section (`components/About.tsx`)
- Bio paragraphs (2–3 sentences each)
- `cards` array: 4 specialty domains with icon, title, description
- `tags` array: your top 8 technologies

### 3. Skills (`components/Skills.tsx`)
- `groups` array: each group has a `label`, `accent` color class, `pill` color class, and `skills` string array
- Add/remove skill groups as needed
- Language bars: `langs` array with name, level, and percentage

### 4. Experience (`components/Experience.tsx`)
- `jobs` array: each job has company, role, period, bullets, skills, dot color, and optional tag
- Edit `dotColor` to change the glowing timeline dot color per role
- Education block is hardcoded at the bottom — edit inline

### 5. Projects (`components/Projects.tsx`)
- `projects` array: each project has emoji, title, desc, highlights (3 bold stats), tags, github URL, category, cat key, and featured flag
- `featured: true` → large card in the top row (max 3)
- `featured: false` → smaller card in the grid below
- `github: null` → shows "Private" instead of a link
- `catColor` map: edit the color for each category key

### 6. Contact (`components/Contact.tsx`)
- `items` array: email, LinkedIn, GitHub, location
- Change `href`, `value`, and hover accent colors per item

### 7. Metadata (`app/layout.tsx`)
- Page `<title>`, `description`, and OpenGraph fields

### 8. Base path (`next.config.ts`)
- `basePath: "/portfolio"` — change this if you rename the repo
- If you use a custom domain or the special `username.github.io` repo, remove `basePath` entirely

---

## Deployment

Deployment is fully automatic:

```
git push → GitHub Actions → next build → static export → GitHub Pages
```

The workflow file is at `.github/workflows/deploy.yml`. It triggers on any push to `master` or `main`.

**First-time setup (already done for this repo):**
1. Go to repo **Settings → Pages**
2. Set Source to **GitHub Actions**
3. Push — the workflow runs and publishes the `out/` folder

**To use a custom domain:**
1. Add a `CNAME` file in `public/` with your domain (e.g. `achraflamia.dev`)
2. Remove `basePath` and `assetPrefix` from `next.config.ts`
3. Configure DNS: point your domain to `achraflamia.github.io`

---

## Design System

All design tokens are in `app/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#020617` | page background |
| `--surface` | `#0f172a` | card surface |
| `--accent` | `#6366f1` | indigo accent |
| `--accent2` | `#8b5cf6` | violet accent |
| `--muted` | `#64748b` | secondary text |
| `.glass` | blur + border | card style |
| `.grad-text` | blue→violet | gradient headings |
| `.btn-primary` | indigo gradient | filled CTA button |
| `.btn-outline` | border + hover | outlined CTA button |
| `.mesh-bg` | radial gradients | hero background |
| `.dot-grid` | 32px dot pattern | hero overlay |
| `.fade-up` | slide-up animation | entrance animations |
| `.section-label` | small uppercase | section eyebrows |
