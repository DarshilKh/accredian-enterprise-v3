<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:1a1a2e,100:16213e&height=140&section=header&animation=fadeIn" />

# 🚀 Accredian Enterprise — Full Clone

### Pixel-Accurate • Fully Responsive • Next.js 16

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=18&pause=1000&color=58A6FF&center=true&vCenter=true&width=700&lines=Pixel-Perfect+Enterprise+Clone;Production-Ready+Frontend+Architecture;Responsive+Across+All+Devices;Clean+Code+%2B+Scalable+Design" />

<br/>

<a href="https://accredian-enterprise-v3.vercel.app/">
  <img src="https://img.shields.io/badge/🌐 Live Demo-000?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>
&nbsp;
<a href="https://github.com/DarshilKh/accredian-enterprise-v3">
  <img src="https://img.shields.io/badge/💻 GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>

---

## ⚡ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 16.2 (App Router) | Full-stack React framework with SSR, routing, and API built-in |
| Language | TypeScript 5 | Type safety — catches bugs before runtime |
| UI Library | React 19 | Component-based UI with hooks for state and effects |
| Styling | Tailwind CSS 3 + Inline Styles | Utility-first CSS for rapid, responsive layouts |
| API | Next.js Route Handlers | Built-in backend — no separate server needed |
| Storage | In-memory (server array) | Simple lead capture without DB setup |
| Deployment | Vercel | Native Next.js hosting, zero config |

---

## 🚀 Quick Start

```bash
unzip accredian-enterprise.zip
cd accredian-enterprise
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📦 Deploy to Vercel

```bash
npm i -g vercel
vercel
# OR: push to GitHub → import at vercel.com
```

---

## 🗂️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx               # Root layout — wraps every page, sets metadata
│   ├── page.tsx                 # Home page — imports and stacks all sections
│   ├── globals.css              # Global styles + Tailwind directives
│   └── api/
│       └── leads/
│           └── route.ts         # POST /api/leads — lead capture endpoint
├── components/
│   ├── Navbar.tsx               # Sticky nav with scroll-spy + mobile menu
│   ├── Hero.tsx                 # Landing section — headline, checkmarks, CTA
│   ├── Stats.tsx                # 10K+ / 200+ / 5K+ metrics
│   ├── Clients.tsx              # Partner logos — Reliance, HCL, IBM etc.
│   ├── AccredianEdge.tsx        # 7-circle horizontal feature chain
│   ├── DomainExpertise.tsx      # 7 domain cards in 3×2+1 grid
│   ├── CourseSegmentation.tsx   # 4 course-type cards
│   ├── WhoShouldJoin.tsx        # Blue banner — 4 professional profiles
│   ├── CATFramework.tsx         # Concept → Application → Tools circles
│   ├── HowItWorks.tsx           # 3-step process cards
│   ├── FAQs.tsx                 # Tabbed FAQ with accordion
│   ├── Testimonials.tsx         # 2-card testimonial slider
│   ├── ContactBanner.tsx        # Blue CTA strip
│   ├── Footer.tsx               # Links, socials, address, copyright
│   ├── EnquireModal.tsx         # Split-layout lead capture modal
│   └── ModalProvider.tsx        # React Context for global modal state
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## ✅ Sections Implemented

| Section | Status |
|---|---|
| Navbar (sticky, scroll-spy, mobile) | ✅ |
| Hero | ✅ |
| Stats — Our Track Record | ✅ |
| Clients — Our Proven Partnerships | ✅ |
| Accredian Edge | ✅ |
| Domain Expertise | ✅ |
| Course Segmentation | ✅ |
| Who Should Join | ✅ |
| CAT Framework | ✅ |
| How It Works | ✅ |
| FAQs | ✅ |
| Testimonials | ✅ |
| Contact Banner | ✅ |
| Footer | ✅ |
| Enquire Now Modal + API | ✅ Bonus |

---

## 🔌 API Reference

**POST** `/api/leads`

```json
{
  "name": "Raj Sharma",
  "email": "raj@company.com",
  "phone": "9876543210",
  "company": "TechCorp India",
  "domain": "Gen-AI Mastery",
  "candidates": "50",
  "deliveryMode": "Online (Live)",
  "location": "Gurgaon, Delhi, India"
}
```

**201 Success:**
```json
{ "success": true, "message": "Thank you! Our team will contact you soon.", "id": "lead_..." }
```

**400 Error:**
```json
{ "error": "Missing required fields: name, email, company" }
```

---

## 🤖 AI Usage (Claude)

### Where AI helped
- Component scaffolding and boilerplate generation
- Repetitive JSX grid/card patterns
- TypeScript interface definitions
- Inline SVG icon generation

### What I built and fixed manually
- Brand color matching (`#1a56db`, `#e8f0fe`) from screenshots
- Navbar scroll-spy via `offsetTop` detection
- CAT Framework S-curve SVG connectors
- `ModalProvider` React Context pattern
- Fixed `<Fragment key>` React warning in Stats
- Fixed missing `"use client"` on 8 components (Next.js Server/Client boundary)

---

## ⏫ What I'd Improve With More Time

1. Real photos via `next/image` instead of SVG placeholders
2. `framer-motion` scroll-triggered animations
3. Email notifications via Resend when form submitted
4. Supabase (PostgreSQL) to persist leads
5. Auto-scrolling client logo marquee
6. `sitemap.xml` + `robots.txt` for SEO
6. Full ARIA accessibility audit
7. Playwright E2E tests

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:16213e,50:1a1a2e,100:0D1117&height=100&section=footer" />
</div>
