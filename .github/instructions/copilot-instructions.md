## Project Overview
- This is a personal portfolio web application optimized for **SEO, content publishing, and Core Web Vitals performance**.
- The app is powered by **Nuxt 4** (Vue 3 Composition API, `<script setup>`, and TypeScript).
- State is managed using **Pinia**, and animations are implemented through **GSAP** (including ScrollTrigger and ScrollSmoother).

---

## Nuxt 4 Application Philosophy

- The main application code must reside in the `app/` directory.
- Directories such as `server/`, `public/`, `shared/`, and `content/` remain at the root level alongside `nuxt.config.ts`.
- Nuxt 4 enforces **isolated TypeScript execution contexts**:
  - `app/` → Client bundle & UI layer
  - `server/` → Backend logic and API routes
  - `shared/` → Optional shared universal code validated at build time
- Data fetching is standardized using `useFetch` and `useAsyncData`, benefiting from:
  - instant data clearing on refetch
  - keyed cache sharing across components
  - automatic cleanup on component unmount
  - more consistent UX and improved INP/LCP results

---

## Recommended Folder Structure

```
project-root/
├─ app/
│  ├─ assets/          # global fonts, icons, CSS (uncompiled)
│  ├─ components/      # global reusable UI components (auto-imported)
│  ├─ composables/     # client logic, reusable helpers, data fetching (auto-imported)
│  ├─ layouts/         # page layouts
│  ├─ pages/           # routing views
│  ├─ middleware/      # optional route guards or interceptors
│  ├─ plugins/         # app-lifecycle plugins (`*.client.ts` or universal)
│  ├─ utils/           # internal client utility functions
│  ├─ app.vue          # application entry component
│  ├─ error.vue        # global error UI fallback (optional)
│  └─ app.config.ts    # runtime app configuration
├─ public/             # static public files
├─ server/             # API logic and server-side middleware
├─ shared/             # optional universal shared types or logic
├─ content/            # portfolio posts or CMS integration (optional)
└─ nuxt.config.ts      # Nuxt 4 config
```

---

## Code Ownership Guidelines

### UI Components
- Must contain **only presentation logic**
- Must **not** contain:
  - data fetching
  - heavy computation
  - business rules
- All DOM animation targets should use **Vue refs**, never raw CSS selectors.

### Pinia Stores
- All **business logic, persistence, and state mutations must live here**
- Stores should be colocated inside features when related to a domain:
  - `app/features/<FeatureName>/store/<storeName>.ts`

### Composables
- Must handle:
  - typed data fetching (`useFetch`, `useAsyncData`)
  - reusable client utilities
  - stateless UI logic
  - animation logic when extracted (e.g., `useFadeInAnimation.ts` or `useScrollAnimation.ts`)
- Must return strongly typed interfaces (`T`) and avoid untyped objects.

### Feature Modules
- Features should follow encapsulation boundaries inside:
  - `project-root/features/<FeatureName>/`
- A feature may contain:
  - `components/` → UI
  - `store/` → Pinia state and logic
  - `types/` → scoped TypeScript interfaces
  - `composables/` (optional) → feature-bound reusable logic (manual import)
  - utilities and helpers bound to that feature

---

## Core Web Vitals Code Review Requirements (Senior Standard)

Every code suggestion and review must prioritize these outcomes:

| Metric | Target | What reviewers must detect |
|---|---|---|
| **LCP** | `< 2.5s` | blocking JS, long hydration chains, unoptimized assets, images without CDN/responsive sizing |
| **CLS** | `< 0.1` | missing reserved space for async content, layout thrashing, fonts without `font-display: swap` |
| **INP** | `< 200ms` | long main-thread tasks, poor scheduler yielding, synchronous expensive rendering, event handler contention |
| **SEO** | `90+ (Lighthouse)` | missing semantic structure, incorrect heading hierarchy, a11y issues, missing structured data or meta tags |

Additional priorities:

- Use **SSR or SSG appropriately for content**
- Ensure **semantic HTML**
- Ensure **optimized hydration**
- Ensure **image component usage for automatic optimization**
- Ensure **main-thread free scheduling for interactions**
- Ensure **minimal JavaScript blocking**
- Ensure **proper caching strategy for async data**
- Ensure **accessibility and SEO are evaluated equally with performance**

---

## Animation & Interaction Philosophy (Nuxt 4 + GSAP + Web Vitals)

### CSS vs GSAP
- Use **CSS transitions** for simple state interactions.
- Use **GSAP** for:
  - scroll-bound motion
  - sequenced timelines
  - gesture-based or physics motion
  - complex lifecycle animation (must always be destroyed with `onBeforeUnmount`)

### Animation Rules
- Default duration: **0.2s – 0.3s**
- Interactive motion must not exceed: **1s**
- Use only GPU-safe properties:
  - `transform`, `opacity`

Allowed easing curves for consistency:
- `ease-out-cubic: cubic-bezier(.215, .61, .355, 1)`
- `ease-out-quart: cubic-bezier(.165, .84, .44, 1)`
- `ease-out-expo: cubic-bezier(.19, 1, .22, 1)`
- `ease-in-out-cubic: cubic-bezier(.645, .045, .355, 1)`
- `ease-in-out-quart: cubic-bezier(.77, 0, .175, 1)`
- **No ease-in curves in UI motion**

Disable hover on devices without a fine pointer:

```css
@media (hover: hover) and (pointer: fine) {
  /* hover styles */
}
```

---

---

## CSS Architecture & Naming (BEM)

- All CSS class names must follow the **BEM methodology**:
  - `block` → independent component (e.g., `card`, `hero`, `site-header`)
  - `block__element` → part of a block that has no standalone meaning (e.g., `card__title`, `hero__cta`)
  - `block--modifier` → variation or state (e.g., `card--highlighted`, `hero--dark`)
- Components should define a **single root block** for their scope. For example, the root element of `HeroSection.vue` might use `class="hero"` and children use `hero__title`, `hero__subtitle`, `hero__actions`, etc.
- Avoid styling by `id`, HTML tags, or deeply nested selectors. Class-based selectors should be:
  - **one or two levels deep** at most
  - scoped to the relevant block
- Utility classes (spacing, layout) are allowed but should be:
  - consistent (`u-`, `l-` prefixes, if used)
  - minimal and documented if they become part of the design system
- State should be expressed using **BEM modifiers** or ARIA/state attributes combined with classes (e.g., `button--disabled`, `[aria-expanded="true"]`).

### BEM Examples

```html
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Title</h1>
    <p class="hero__subtitle">Subtitle</p>
    <button class="hero__cta hero__cta--primary">Call to action</button>
  </div>
</section>
```

```css
.hero { /* block */ }
.hero__content { /* element */ }
.hero__title { /* element */ }
.hero__cta { /* element */ }
.hero__cta--primary { /* modifier */ }
```

- Copilot must propose new CSS and class names that align with this BEM structure across the project.

## Copilot Output Requirements

- Generate **Vue 3 code** with Composition API, `<script setup>`, TypeScript
- Follow **community idioms** for Vue 3 and Nuxt 4
- Apply **senior reviewer mindset**
- Prioritize **Core Web Vitals thresholds**, semantic correctness, and maintainability
- All fetched data must come from **composables or server routes**
- All business logic must come from **Pinia stores**
- Animation composables must destroy themselves properly
- Image suggestions must use optimized delivery (Nuxt Image or components that auto-optimize)
- Reviews must identify main-thread, layout, and hydration risks

---

## Documentation Principles

- All guidelines must evaluate **engineering quality, dev experience (DX), SEO, and performance simultaneously**.
- This document exists to enforce **senior-level correctness and Web Vitals-first thinking** for all generated suggestions and code reviews.