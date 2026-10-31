# AETHER — Cinematic AI Advertising Studio

> **Production-Ready, Single-Page React Website for an AI Creative Advertising Studio**  
> Built strictly adhering to the **Prisma design reference specification**: inset cinematic video hero, hanging black capsule navbar, giant cream typography with asterisk, dark editorial sections, Instrument Serif italic accents, Framer Motion word-by-word reveals, and scroll-linked character opacity animations.

---

## ✦ Technology Stack

- **React 18** with **Vite**
- **TypeScript** (Strict mode, fully typed data interfaces)
- **Tailwind CSS 3** (`tailwindcss@^3.4.17`)
- **Framer Motion** (word-by-word reveals, scroll-linked opacity, stagger transitions)
- **lucide-react** (minimalist vector icons)

---

## ✦ Design System & Editorial Tokens

### Typography
- **Primary Sans-Serif**: `Almarai` (Weights 300, 400, 700, 800) loaded via Google Fonts.
- **Editorial Accent Serif**: `Instrument Serif` (Italic, weight 400) used strategically for accent phrases (*"move."*, *"matters."*, *"create ads."*, *"Endless possibilities."*, *"watching."*).

### Color Palette
- **Global Background**: `#000000`
- **Primary Typography**: `#E1E0CC`
- **Accent Cream**: `#DEDBC8`
- **About Section Container**: `#101010`
- **Secondary Feature Cards**: `#212121`
- **Navigation Text**: `rgba(225, 224, 204, 0.8)`

### Film Noise Utilities
- `.noise-overlay`: Inline SVG `feTurbulence` (fractalNoise, baseFrequency 0.85, 3 octaves) with `mix-blend-overlay` over the hero video.
- `.bg-noise`: Inline SVG `feTurbulence` (fractalNoise, baseFrequency 0.9, 4 octaves) with low opacity over editorial dark sections.

---

## ✦ Section Architecture (Exactly 7 In-Page Sections)

| # | Section | Description & Interaction Highlights |
|---|---|---|
| **01** | **Cinematic Hero** | Full viewport height with `p-4 md:p-6` outer margin; inner `rounded-2xl md:rounded-[2rem]` container; background commercial film; hanging black navbar capsule; giant `[AGENCY NAME]*` wordmark (`text-[20vw]`); 12-column grid layout; pill CTA button with separate circular arrow. |
| **02** | **Selected Films** | Label `SELECTED FILMS / 001—004`, headline *"Made to move."* (italic serif); editorial layout with 1 large featured frame, balanced 2-column grid, and wide landscape frame; muted hover previews; custom **Cinematic Video Lightbox** overlay with sound and controls. |
| **03** | **Advertising Portfolio** | Label `STILL FRAMES / 001—010`, headline *"Every frame matters."* (italic serif); curated grid with zero-crop preservation for all 10 uploaded static product advertisements; hover indicator; fullscreen **Image Lightbox** with keyboard `←` `→` and `Esc` navigation. |
| **04** | **About the Studio** | Inset `bg-[#101010]` rounded card; multi-style headline *"We don't just create ads. We create attention."*; scroll-linked character-by-character opacity reveal (`0.2` → `1`) powered by Framer Motion `useScroll`. |
| **05** | **What We Create** | Inset 4-column feature grid; Card 01 with looping video background (*"Stories in motion."*); Cards 02–04 in `#212121` featuring real uploaded thumbnail imagery, feature checklists, and navigation links. |
| **06** | **Signature Package** | Editorial pricing card highlighting the **₹30,000** package (10 Static Ad Creatives, 05 Cinematic Video Ads, Creative Direction, Campaign-Ready Delivery, 1 Consolidated Revision Round); honest scope clarification. |
| **07** | **Contact & Footer** | Headline *"Let's create something worth watching."*; direct WhatsApp action (pre-formatted client brief); direct email action; studio email, phone, Instagram, and Back to Top action. |

---

## ✦ Portfolio Media Manifest (14 Assets Integrated)

### 4 AI Commercial Films
1. **Film 01**: `Velvet Indulgence — Artisan Cocoa` (`Transform_storyboard_into_video_20261027153937.mp4`) — Gourmet Confectionery
2. **Film 02**: `Ethereal Luminescence` (`3f467cc01908c12bda49d6d10deb1a32_720w.mp4`) — Beauty & High Fashion
3. **Film 03**: `Apex Extreme — Action Capture` (`Transform_storyboard_into_video_20261027163849.mp4`) — Tech & Adventure Commercial
4. **Film 04**: `Noir Haute Couture` (`659d16ff96ed4f3f1ecb4b6b57deb665_720w.mp4`) — Luxury Fashion & Persona

### 10 Static Advertising Stills
1. **Still 01**: `Portronics Vader Pro — Wireless Gaming Mouse` (`Portronics Vader Pro Gaming Mouse Ad.png`)
2. **Still 02**: `Ocean & Canyon Perfume Duo` (`Ocean & Canyon Perfume Duo.png`)
3. **Still 03**: `Sylvi — "More Than a Watch"` (`More Than a Watch_ Premium SYLVI Timepiece.png`)
4. **Still 04**: `Minimalist — Vitamin C Glow` (`Minimalist Vitamin C Serum Glow.png`)
5. **Still 05**: `Hoppup — "Game On" Earbuds` (`HOPPUP Gaming Earbuds_ Game On.png`)
6. **Still 06**: `Nestasia — Modern Lifestyle Tumbler` (`cb1b0da1-4324-4331-80cb-e5d68fd89d7f.png`)
7. **Still 07**: `Little Angel — Gentle Protection` (`7d6c9a20-743a-4754-8169-e7a6a85dda30.png`)
8. **Still 08**: `OZiva — Clean Plant Protein` (`57377e2d-aa86-49c5-83f5-b2835405f07d.png`)
9. **Still 09**: `Metal Loban Dani — Sacred Rituals` (`Metal Loban Dani Ritual Ad.png`)
10. **Still 10**: `Artisanal Chocolate — "A Little Chocolate, Brighter Day"` (`A Little Chocolate, Brighter Day.png`)

---

## ✦ Development & Deployment

### Run Local Development Server
```bash
npm run dev
```
Available at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```
Creates an optimized production bundle inside `dist/`.

### Vercel Deployment
The repository is completely configured with `vercel.json` for one-command deployment:
```bash
npx vercel
```
Or import the project directly into the Vercel dashboard.
