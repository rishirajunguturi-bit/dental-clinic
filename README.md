# Sakthi Dental Clinic — Web Application

A responsive, client-ready healthcare website for **Sakthi Dental Clinic**, located in Hosur, Tamil Nadu, India. Built as an intermediate frontend development project based on the client brief provided by **ShadowFox**.

---

## 1. Project Overview & Target Audience

Sakthi Dental Clinic specializes in comprehensive, compassionate dental care tailored specifically for:
* **Women and children**
* **Parents and guardians**
* **Families**
* **Adults and senior citizens**

The website prioritizes accessible navigation, clear clinical information, mobile usability, and a calm, reassuring patient experience.

---

## 2. Technology Stack

* **Framework:** React 18
* **Build Tool:** Vite 6
* **Language:** TypeScript 5.7
* **Styling:** Tailwind CSS 3.4
* **Routing:** React Router 6 (Client-side routing with clean URLs)
* **Icons:** Lucide React
* **Forms & Validation:** React Hook Form + Zod
* **Testing:** Vitest + React Testing Library + Jest-DOM
* **Code Quality:** ESLint 9 (Flat config)

---

## 3. Brand & Design Tokens

A gentle, trustworthy healthcare color palette:

| Token | Value | Purpose |
| :--- | :--- | :--- |
| **Primary** | `#6750A4` | Brand identity, primary CTAs, active indicators |
| **Primary Hover** | `#57418F` | Hover & focus states |
| **Soft Lavender** | `#F3EEFF` | Background tints, badges, highlighted cards |
| **Background** | `#FFFFFF` | Main canvas background |
| **Main Text** | `#252238` | High-contrast body & headings |
| **Secondary Text** | `#686579` | Captions, subtitles, and supporting copy |
| **Border** | `#E7E3EF` | Subtle borders, dividers, card boundaries |

---

## 4. Project Architecture & Directory Structure

```text
sakthi-dental-clinic/
├── public/
│   ├── favicon.svg             # Bespoke clinic SVG favicon
│   └── robots.txt              # Search engine crawler configuration
├── src/
│   ├── assets/                 # Static styles & imagery
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (Button, Badge, ScrollToTop)
│   │   ├── forms/              # Contact form & validation components (Phase 3)
│   │   ├── home/               # Home-specific section blocks (Phase 2)
│   │   ├── layout/             # App shell (Navbar, Footer, Layout)
│   │   └── treatments/         # Treatment cards & grids (Phase 2)
│   ├── data/
│   │   └── clinicInfo.ts       # Structured clinic metadata, addresses, contacts
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page-level components
│   │   ├── HomePage.tsx        # /
│   │   ├── AboutPage.tsx       # /about
│   │   ├── TreatmentsPage.tsx  # /treatments
│   │   ├── FaqsPage.tsx        # /faqs
│   │   ├── ContactPage.tsx     # /contact
│   │   ├── PrivacyPolicyPage.tsx # /privacy-policy
│   │   └── NotFoundPage.tsx    # 404 handler
│   ├── types/
│   │   └── index.ts            # Core TypeScript interfaces & models
│   ├── App.tsx                 # Route hierarchy & page wiring
│   ├── index.css               # Tailwind directives & global utility classes
│   └── main.tsx                # Application entry point with BrowserRouter
├── tests/
│   ├── components/             # Unit and integration component tests
│   │   ├── Navbar.test.tsx
│   │   └── Layout.test.tsx
│   └── setup.ts                # Testing setup (jest-dom extensions)
├── index.html                  # Root HTML template with meta SEO tags
├── tailwind.config.js          # Tailwind theme extensions & design tokens
├── postcss.config.js           # PostCSS configuration
├── vite.config.ts              # Vite & Vitest configuration
├── tsconfig.json               # TypeScript project reference root
├── tsconfig.app.json           # Application TypeScript compiler settings
├── tsconfig.node.json          # Vite/Node config compiler settings
├── eslint.config.js            # ESLint flat configuration
└── PROJECT_CONTEXT.md          # Complete project context & requirements
```

---

## 5. Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher (v24.x tested)
* **npm**: v9.0.0 or higher

### Installation
Clone or navigate to the repository directory and install dependencies:
```bash
npm install
```

### Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Running Tests
Execute Vitest test suite:
```bash
npm run test
```

For watch mode during development:
```bash
npm run test:watch
```

### Code Quality (Linting)
Run ESLint:
```bash
npm run lint
```

### Production Build
Compile TypeScript and generate an optimized production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 6. Implementation Status & Coverage

All 6 core pages required by the ShadowFox client brief have been fully built, tested, and verified:

1. **Home (`/`)**:
   - Navigation bar with clinic branding & direct contact bar
   - Hero section with supplied headline, supporting copy, statistics & dual CTAs
   - Assurance banner ("You are always in safe hands")
   - Why Choose Sakthi Dental Clinic (4 core pillars)
   - Featured treatments (6 cards with links to full catalog)
   - Patient testimonials (3 original client brief reviews with attributions)
   - Clinic facilities & amenities (5 items with location/hours context)
   - Final appointment CTA (routes directly to `/contact`)
   - Footer with full address, phones, email, timings & verified touchpoints

2. **About Us (`/about`)**:
   - "Get to Know Dr. Anupriya" biography (Graduation in 2000, Mathura Clinic, clinic founding in 2004, Chandara Hospital consultant)
   - Patient-care philosophy
   - Vision & Mission statements
   - Complete panel of 9 specialist doctors with verified names, roles & specialties

3. **Treatments (`/treatments`)**:
   - Comprehensive list of all 15 treatments from the brief (Cleaning & Scaling to Clear Aligners)
   - Category filtering (Preventive, Restorative, Surgical, Cosmetic, Orthodontics, Laser)
   - Interactive search by keyword
   - Highlight specifications & direct consultation booking triggers

4. **FAQs (`/faqs`)**:
   - All 14 verified questions and answers from the brief
   - Accessible, keyboard-operable accordion (`aria-expanded`, `aria-controls`, `role="region"`)
   - Category filters & search input
   - "Expand All" / "Collapse All" accessibility actions

5. **Contact Us (`/contact`)**:
   - Responsive two-column layout on desktop that stacks smoothly on mobile
   - Form heading: "We would love to hear from you"
   - Fields: Full Name (required), Email (required & validated), Phone (required), Message (optional)
   - Real-time React Hook Form + Zod schema validation
   - Accessible validation error states and submission status handling
   - Complete address, email, phone numbers, Google Maps link, and operating hours advisory note

6. **Privacy Policy (`/privacy-policy`)**:
   - Complete text, headings, and contact info preserved from client brief

---

## 7. Quality Assurance Summary

| Check | Tool | Result |
| :--- | :--- | :--- |
| **Unit & Integration Tests** | `vitest run` | **7 passed (8 tests)** |
| **Code Linting** | `eslint .` | **0 errors, 0 warnings** |
| **Type Check & Build** | `tsc -b && vite build` | **0 errors (Clean production bundle in `dist/`)** |
| **Local Dev Server** | `vite` | **Active at http://localhost:5173/** |
