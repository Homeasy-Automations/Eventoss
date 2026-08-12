# EVENTOSS — Corporate Events Division

**Eventoss Entertainment Pvt Ltd — Premium Editorial Event Agency Website**

Production-ready Next.js 16 website built with the **black/white editorial luxury agency aesthetic** — cinematic, image-led, asymmetric, and intentionally anti-SaaS.

> **Live Preview:** `https://3000-{sandboxId}.e2b.app` (see LIVE PREVIEW panel — port 3000)  
> **Local:** `http://localhost:3000` after `npm run dev` or `npm run start`

---

### ✨ Visual Direction

- Full-bleed cinematic hero with huge Playfair Display typography overlapping imagery (`We don't just plan events — we engineer moments that move people.`)
- Asymmetric editorial grids, overlapping images, thin 0.5px borders, massive whitespace
- Black navigation (sticky), oversized serif/sans mix, vertical labels, marquee bands
- Image zoom on hover, slow parallax, scroll-triggered reveals, custom cursor (VIEW / EXPLORE)
- Predominantly **#000 / #FFF / #F4F3F0 / photography** — blue (#2E86C1) & orange (#FF7A29) only as subtle brand accents

**Fonts:** Playfair Display + Cormorant Garamond (display) · Inter (body/labels)

---

### 📁 Routes

| Route | Description |
|---|---|
| `/` | Cinematic home: hero, intro 2-col, stats, featured 6 services, dark process + marquee, why-us |
| `/about` | Division craft, story, Patna HQ presence, 4 traits, vertical timeline |
| `/services` | All 14 formats in asymmetric editorial grid |
| `/services/[slug]` | Dynamic detail — cinematic hero, overview, included, process, next/prev |
| `/work` | 6 case studies — alternating editorial portfolio |
| `/work/[slug]` | Cinematic case-study storytelling |
| `/team` | Founder-led portrait-led editorial |
| `/contact` | Cinematic hero + editorial contact + minimal form (11 fields) |
| `/api/contact` | POST endpoint — validates & returns JSON |

All **14 services** + **6 projects** + **3 team members** are centralized in `src/data/` — no duplication.

---

### 🧱 Stack

- **Next.js 16** App Router + **React 19** + **TypeScript**
- **Tailwind CSS 4** (`@tailwindcss/postcss`)
- **Framer Motion** (page, hover, parallax, count-up)
- **Lucide React** + **GSAP-ready** structure
- Image: `next/image` unoptimized remotePatterns (`images.unsplash.com`) — premium editorial event photography (conferences, galas, launches, summits)

---

### 🚀 Run Locally

```bash
cd /home/user/eventoss
npm install
npm run dev      # dev  → http://localhost:3000
# or
npm run build && npm run start -- --port 3000 --hostname 0.0.0.0
```

---

### 🎨 Design System Tokens

```
--background: #ffffff
--foreground: #0a0a0a
--muted:      #F4F3F0
--warm:       #EAE5DF
--blue:       #2E86C1
--accent:     #FF7A29
```

Labels: `10px / 0.3em / uppercase / 600`  
Display: `Playfair, -0.03em, 0.9 line-height`

---

### 📦 Key Files

```
src/app/layout.tsx              Root layout, fonts, SEO, Navbar+Footer+Cursor
src/components/Navbar.tsx       Black sticky nav + services dropdown + fullscreen mobile
src/components/Footer.tsx       Black editorial footer with giant EVENTOSS wordmark
src/components/CustomCursor.tsx Desktop custom cursor (VIEW/OPEN/EXPLORE)
src/data/services.ts            14 services — single source
src/data/work.ts                6 projects — single source
src/data/team.ts                Leadership
src/app/page.tsx                Home — most editorial section
```

---

### ✅ Content Accuracy

All Eventoss data preserved verbatim:
- Address: **208-A, Kaushalya Estate, Dak Bungalow Road, Patna 800001**
- Phones: **+91 70615 28401 / +91 70615 28402 / 0612 2230055**
- Email: **info@eventoss.in**
- Stats: **12+ YEARS · 410+ CLIENTS · 4,700+ PROJECTS · 8 OFFICES**

`© Eventoss Entertainment Pvt Ltd. All rights reserved.`

---

Built to feel like **an award-winning international event design studio** — with Eventoss content.
