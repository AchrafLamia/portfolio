# How to Customize This Portfolio with Claude

This file is a ready-to-use prompt you can paste into Claude to fully customize this portfolio with your own content and design preferences.

---

## Step 1 — Give Claude access to the project

Open this portfolio folder in Claude Code (CLI or desktop app):

```bash
cd portfolio
claude
```

---

## Step 2 — Paste this prompt

Copy everything between the lines and paste it as your first message:

---

```
I have a Next.js portfolio at this location. I want you to fully customize it with my information.

Here is my content — replace everything in the components with this:

### MY IDENTITY
- Full name: [YOUR FULL NAME]
- Title: [YOUR TITLE, e.g. "ML Engineer | Cloud Architect"]
- Short bio (2 sentences): [WRITE YOUR BIO]
- Location: [YOUR CITY, COUNTRY]
- Email: [YOUR EMAIL]
- GitHub: https://github.com/[YOUR USERNAME]
- LinkedIn: https://linkedin.com/in/[YOUR HANDLE]
- Available for: [e.g. "remote or relocation", "freelance", "full-time"]

### MY KEY ACHIEVEMENTS (4 numbers for the hero stats)
- Stat 1 value: [e.g. "99.1%"] — label: [e.g. "model accuracy on benchmark"]
- Stat 2 value: [e.g. "3×"] — label: [e.g. "inference speedup after optimization"]
- Stat 3 value: [e.g. "50k+"] — label: [e.g. "training samples processed"]
- Stat 4 value: [e.g. "8 months"] — label: [e.g. "production deployment duration"]

### MY SPECIALTY AREAS (4 cards in About section)
- Card 1: icon [emoji], title [e.g. "Deep Learning"], description [1 sentence of tools/skills]
- Card 2: icon [emoji], title [e.g. "Cloud — GCP"], description [1 sentence]
- Card 3: icon [emoji], title [e.g. "Data Engineering"], description [1 sentence]
- Card 4: icon [emoji], title [e.g. "MLOps"], description [1 sentence]

### MY TOP TAGS (8 short technology names for About section)
[e.g. Python, TensorFlow, Docker, GCP, Spark, Airflow, dbt, FastAPI]

### MY SKILLS (list each group with its skills)
Group 1 — label: [e.g. "ML & Deep Learning"], color: [blue/violet/orange/teal/emerald], skills: [comma-separated list]
Group 2 — label: [...], color: [...], skills: [...]
Group 3 — label: [...], color: [...], skills: [...]
Group 4 — label: [...], color: [...], skills: [...]
Group 5 — label: [...], color: [...], skills: [...]

Spoken languages:
- [Language 1]: [level, e.g. Native], [percentage 0-100]
- [Language 2]: [level, e.g. C1], [percentage]
- [Language 3]: [level, e.g. B2], [percentage]

### MY EXPERIENCE (list each role)
Role 1:
  Company: [NAME]
  Role title: [TITLE]
  Period: [e.g. Jan 2024 — Present]
  Is current job: [yes/no]
  3–5 bullet points (achievements with numbers when possible):
    - [bullet 1]
    - [bullet 2]
    - [bullet 3]
  Skills used: [comma-separated]

Role 2: [same format]
Role 3: [same format]
...

Education:
  School: [NAME]
  Degree: [DEGREE]
  Period: [e.g. Sep 2020 — Jun 2022]
  Subjects: [comma-separated]

### MY PROJECTS (list each project)
Project 1:
  Emoji: [one emoji]
  Title: [PROJECT NAME]
  Description: (2–3 sentences, what it does and how)
  3 highlight stats: [e.g. ">95% accuracy", "real-time 30fps", "10k users"]
  Tags (technologies): [comma-separated]
  GitHub URL: [URL or "private"]
  Category: [e.g. Computer Vision / Cloud / Research / Full-Stack]
  Featured (show large): [yes/no]

Project 2: [same format]
...

### DESIGN PREFERENCES (optional — skip if you want to keep the current design)
- Color accent: [e.g. keep indigo/violet OR change to blue/cyan OR green/teal]
- Any section to add: [e.g. "add a Testimonials section" or "add a Publications section"]
- Any section to remove: [e.g. "remove the financial portfolio project"]
- Other changes: [describe anything else]

---
Please update all the components with this information. Keep the existing design system (glassmorphism, gradient text, dark theme). After editing, run `npm run build` to confirm it compiles without errors.
```

---

## What Claude will do

When you paste that prompt, Claude will:

1. Read all component files (`Hero.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`, `layout.tsx`)
2. Replace every piece of content with your information
3. Adjust colors/accents if you requested a different palette
4. Run `npm run build` to verify no TypeScript errors
5. Tell you what changed

---

## After customization — deploy

```bash
git add -A
git commit -m "Customize portfolio with my content"
git push
```

GitHub Actions will automatically rebuild and publish to GitHub Pages.

---

## Design change prompts (use separately)

These are short prompts you can give Claude to tweak specific design elements:

**Change the accent color:**
```
Change the portfolio accent color from indigo/violet to [cyan/blue/green/rose/amber].
Update globals.css (--accent, --accent2, gradient definitions) and all Tailwind color
classes in every component. Run npm run build after.
```

**Add a new section:**
```
Add a [Publications / Certifications / Testimonials / Open Source] section to the portfolio.
Insert it between [Experience] and [Projects]. Match the existing dark glassmorphism design:
section-label eyebrow, gradient h2, glass cards. Here is the content: [YOUR CONTENT].
Wire it into app/page.tsx and run npm run build.
```

**Add a profile photo:**
```
Add a profile photo to the Hero section. Place the image at public/photo.jpg.
Show it as a circle (w-32 h-32 rounded-full) with a subtle indigo ring, positioned to the
right of the text on desktop, centered above on mobile. Use Next.js <Image> with
unoptimized={true} since we use static export.
```

**Add a CV download button:**
```
Add a "Download CV" button to the Hero section next to the existing CTA buttons.
The CV PDF is at public/CV_Achraf_Lamia.pdf. Style it as btn-outline with a download icon.
On GitHub Pages the file will be served at /portfolio/CV_Achraf_Lamia.pdf — set the href
accordingly using the basePath prefix.
```

**Dark/light mode toggle:**
```
Add a dark/light mode toggle button to the Navbar. Use next-themes for state management.
The light theme should use slate-50 background, slate-900 text, and blue-600 accent.
The dark theme keeps the existing #020617 background. Persist the preference in localStorage.
```
