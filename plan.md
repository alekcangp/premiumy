# Premiumy Web App — Build Plan

**Project:** Modern Interactive Premiumy Web App  
**Tech Stack:** Vanilla HTML5, CSS3, JavaScript (ES6+)  
**Design:** Minimalist, green palette, 60fps animations  
**Map Profile:** https://maps.app.goo.gl/GD64JboLbqz3dmt66

---

## TL;DR
Build a clean, highly interactive single-page app with animated hero, interactive gallery (local images + Fancybox zoom), animated about section, contact area (Google Maps, WhatsApp, phone). Vanilla JS + CSS animations only.

---

## Phase 1: Architecture & Setup
- [ ] Create folder structure:
  - `js/` → `animations.js`, `gallery.js`, `utils.js`, `main.js`
  - `css/` → `globals.css`, `sections.css`, `animations.css`
- [ ] Add Fancybox CDN to `index.html` (`<head>` + before `</body>`)
- [ ] Define CSS variables in `globals.css`: `--accent: #3f7a2f`, `--bg: #f4f7f1`, etc.
- [ ] Set up HTML skeleton with semantic sections (hero, about, gallery, contact, footer)
- [ ] Confirm image assets: `images/about.jpg`, `images/gallery/food-{1..6}.jpg`

---

## Phase 2: Core Animations & Interactions
- [ ] Implement `IntersectionObserver` in `animations.js` for `.animate` elements
  - Threshold 0.15, rootMargin `0px 0px -120px 0px`
  - Add `.is-visible` class → fade-in + slide-up (translateY 32px→0, opacity 0→1)
- [ ] Add hero parallax: scroll listener → adjust background position or gradient offset (factor 0.08)
- [ ] Implement smooth anchor scrolling (CSS `scroll-behavior: smooth` + JS fallback if needed)
- [ ] Add hover effects:
  - Buttons: `translateY(-2px)` + shadow glow
  - Gallery items: image scale 1.08 + overlay fade-in
  - Nav links: color transition to accent

---

## Phase 3: Interactive Gallery
- [ ] Build gallery grid in `sections.css` (3-column desktop, 1-column mobile)
- [ ] Add `loading="lazy"` to all `<img>` tags
- [ ] Create overlay HTML structure per item (`<div class="item-overlay"><span>Zoom</span></div>`)
- [ ] Initialize Fancybox in `gallery.js` with `data-fancybox="gallery"` group
- [ ] Ensure accessible keyboard navigation (tabindex on anchors)

---

## Phase 4: About Section
- [ ] Layout two-column grid (text left, image right)
- [ ] Apply `.animate` to paragraphs and heading with staggered delays (0.05s increments)
- [ ] Implement counter animation in `animations.js` for `.stat-card strong`:
  - Observer threshold 0.5
  - Animate 0 → final + '+' sign, step = Math.max(1, final/40), 16ms intervals
- [ ] Static label translation only (values "500+", "100%", "24/7" stay as-is)

---

## Phase 5: Contact Section
- [ ] Two-column layout: contact card (left), map (right)
- [ ] Map container `.map-frame` with `display:flex` so iframe fills fully
- [ ] Iframe: remove width/height attributes, set `width:100%; height:100%; border:0; flex:1`
- [ ] Add links:
  - WhatsApp: `https://wa.me/201140302996`
  - Phone: `tel:+201140302996`
  - Maps profile: `https://maps.app.goo.gl/GD64JboLbqz3dmt66`
- [ ] Hover lift effects on buttons
- [ ] Ensure address displays correctly (Arabic script retained)

---

## Phase 6: Polish & Performance
- [ ] Test all translations (EN/AR/RU) — verify `data-text-key` coverage
- [ ] Add RTL rules in `sections.css`: `html[dir="rtl"] .header-inner { direction: rtl; }` etc.
- [ ] Check mobile responsiveness (≤900px, ≤640px breakpoints)
- [ ] Verify 60fps scroll animations (Chrome DevTools Performance)
- [ ] Lazy-load offscreen images (already `loading="lazy"`)
- [ ] Minify/concatenate CSS & JS for production (optional)
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)

---

## Verification Checklist
- [ ] Hero parallax moves subtly on scroll
- [ ] Nav links smoothly scroll to sections
- [ ] Language switcher instantly updates text + toggles RTL
- [ ] About paragraphs stagger-animate on scroll into view
- [ ] Stats counter counts up when 50% visible
- [ ] Gallery: hover shows zoom overlay; click opens Fancybox
- [ ] Contact: WhatsApp, phone, maps links active; map fully fills container
- [ ] No horizontal overflow on mobile
- [ ] Animations run at 60fps with no jank

---

## Files Reference
| File | Purpose |
|------|---------|
| `index.html` | Semantic structure, data-text-key hooks, CDN links |
| `css/globals.css` | CSS variables, typography, reset |
| `css/sections.css` | Layouts for header, hero, about, gallery, contact, footer |
| `css/animations.css` | Keyframes, transitions, hover effects |
| `js/main.js` | Translations object + language switcher logic |
| `js/animations.js` | IntersectionObserver + counter + parallax |
| `js/gallery.js` | Fancybox init + hover overlay handling |
| `js/utils.js` | Debounce, RAF helpers, string utilities |

---

## Decisions Locked In
- No contact form (links only)
- Vanilla JS, no framework
- Fancybox for zoom (CDN)
- All content stored in JS translation object (no i18n library)
- Google Maps iframe embed (not full Maps JS API)
- 6 local gallery images only

---

## Quick Start
1. Create folders: `mkdir js css images/gallery`
2. Add image assets to `images/` and `images/gallery/`
3. Build HTML skeleton with all `data-text-key` attributes
4. Implement CSS variables + layout
5. Wire up translation object and language switcher
6. Add scroll animations and counters
7. Integrate Fancybox and gallery hover effects
8. Polish and verify checklist

---

**Last updated:** 2026-05-12  
**Status:** Ready for Phase 1
