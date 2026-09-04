# ScottCheung Portfolio — Next.js Migration Architecture

## 1. Goal

Rebuild the existing CRA portfolio as a modern Next.js App Router application **without intentionally changing the UI**.

The migration is considered successful only when:

- All existing routes are preserved or intentionally redirected.
- Desktop and mobile visual regression tests pass.
- Existing interactions, animation, theme, language, navigation, gallery, resume, and project pages behave equivalently.
- Editable content is separated from UI code.
- The guestbook can receive and display messages in real time without a self-managed server.
- The legacy CRA application remains untouched until final cutover.

## 2. Migration strategy

### Source of truth

Until cutover, the existing CRA app on `main` is the visual and behavioral source of truth.

Recommended development branch:

`nextjs-migration`

Recommended implementation model:

1. Keep the legacy CRA application intact.
2. Create a fresh Next.js application in `next-app/`.
3. Run legacy and Next.js side-by-side.
4. Capture Playwright baselines from the legacy app.
5. Migrate one route at a time.
6. Fix all visual/behavioral regressions before moving to the next route.
7. Migrate editable JSON content to Sanity only **after framework parity**.
8. Add Supabase guestbook after core parity.
9. Cut over only after the full acceptance suite passes.
10. Remove/archive legacy CRA only in the final cleanup task.

This side-by-side approach is intentional: it makes visual comparison, rollback, and debugging substantially safer than rewriting the repository root in place.

---

## 3. Architecture decisions

### Framework

- Next.js App Router
- TypeScript for all newly created files
- React Server Components by default
- Client Components only when browser state, effects, event handlers, animation libraries, canvas/WebGL, or browser APIs require them

### Styling

Phase 1 must preserve existing styling.

Rules:

- Reuse existing CSS/class names first.
- Do not redesign while migrating.
- Do not convert styling systems merely for aesthetics.
- Do not combine framework migration with UI cleanup.
- Any visual improvement is a separate post-migration task.

### Content

Use three content/data categories.

#### A. Sanity CMS

Use for content a person may edit:

- About / Personal information
- Work experience
- Education
- Awards / certificates
- Projects
- Gallery metadata
- Music metadata
- Testimonials / reviews
- Update log / changelog
- Resume content where practical
- Site copy and translated copy

#### B. Static repository data

Keep local when the data is an implementation asset rather than editorial content:

- `globe.json`
- geometry / map datasets
- visualization constants
- static lookup tables
- UI configuration that should change only through code
- other large JSON used only by rendering logic

Do not move large static visualization datasets into a CMS merely because they are JSON.

#### C. Supabase

Use for user-generated/runtime data:

- Guestbook messages
- Realtime subscriptions
- Optional reactions / likes later

---

## 4. GraphQL decision

**Do not introduce GraphQL in the first migration.**

Use:

- Sanity client + GROQ for CMS queries
- Supabase JS client for reads and Realtime
- Next.js Route Handlers for protected guestbook writes

Why:

1. Sanity's native query language is GROQ.
2. Supabase already exposes a strongly structured JS client and Realtime API.
3. The application currently has no frontend data graph complex enough to justify a shared GraphQL layer.
4. GraphQL would add schema generation, query tooling, cache decisions, error handling patterns, and another abstraction during an already large migration.
5. Adding GraphQL during framework + CMS migration makes regressions harder to isolate.

Revisit GraphQL only if one of these becomes true:

- several independent clients consume the same unified API;
- a custom backend aggregates many data sources;
- complex cross-domain graph queries become common;
- the project needs a stable public typed API contract.

---

## 5. Target project structure

```text
/
├── next-app/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── not-found.tsx
│   │   │   │
│   │   │   ├── page.tsx
│   │   │   ├── _components/            # HOME-ONLY components
│   │   │   │
│   │   │   ├── info/
│   │   │   │   ├── page.tsx
│   │   │   │   └── _components/        # INFO-ONLY components
│   │   │   │
│   │   │   ├── life/
│   │   │   │   ├── page.tsx
│   │   │   │   └── _components/
│   │   │   │
│   │   │   ├── gallery/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── _components/
│   │   │   │   └── [gallery]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── major/
│   │   │   │   └── [major]/
│   │   │   │       └── page.tsx
│   │   │   ├── whyme/
│   │   │   │   └── [whyme]/
│   │   │   │       └── page.tsx
│   │   │   ├── work/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── _components/
│   │   │   │   └── [work]/
│   │   │   │       └── page.tsx
│   │   │   ├── degree/page.tsx
│   │   │   ├── award/page.tsx
│   │   │   ├── scholarship/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── resume/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [resume]/page.tsx
│   │   │   ├── at/page.tsx
│   │   │   ├── resumecheck/[version]/page.tsx
│   │   │   ├── cvcheck/[version]/page.tsx
│   │   │   ├── project/page.tsx
│   │   │   ├── tiktok/page.tsx
│   │   │   ├── gobelldesign/page.tsx
│   │   │   ├── design/page.tsx
│   │   │   ├── igrapher/page.tsx
│   │   │   ├── story/page.tsx
│   │   │   ├── pp/page.tsx
│   │   │   ├── music/page.tsx
│   │   │   │
│   │   │   └── api/
│   │   │       └── guestbook/
│   │   │           └── route.ts
│   │   │
│   │   ├── components/                 # genuinely cross-route components only
│   │   │   ├── navigation/
│   │   │   ├── contact/
│   │   │   └── providers/
│   │   │
│   │   ├── lib/
│   │   │   ├── sanity/
│   │   │   │   ├── client.ts
│   │   │   │   ├── queries.ts
│   │   │   │   └── types.ts
│   │   │   ├── supabase/
│   │   │   │   ├── browser.ts
│   │   │   │   └── server.ts
│   │   │   ├── content/
│   │   │   │   └── adapters.ts
│   │   │   └── validation/
│   │   │
│   │   ├── data/                       # non-editorial static data only
│   │   └── types/
│   │
│   ├── tests/
│   │   ├── visual/
│   │   ├── e2e/
│   │   └── api/
│   │
│   ├── playwright.config.ts
│   └── package.json
│
├── MIGRATION_ARCHITECTURE.md
├── AGENT_MIGRATION_PROMPT.md
├── MIGRATION_TASKS.md
├── TESTING_STRATEGY.md
└── CONTENT_DATA_PLAN.md
```

---

## 6. Component placement rule

The default is **colocation**.

A component belongs in a route's `_components` folder when:

- it is used only by that route;
- its meaning is coupled to that page;
- moving it globally would make the global component directory noisier.

Example:

```text
app/info/
├── page.tsx
└── _components/
    ├── AboutHero.tsx
    ├── Timeline.tsx
    └── PersonalFacts.tsx
```

Move a component to `src/components` only when:

1. it is used by at least two routes, **and**
2. it represents the same semantic UI in both places.

Do not promote a component globally merely because it *might* become reusable later.

---

## 7. Server/client component rule

Default to Server Components.

Use `"use client"` only when required for:

- `useState`, `useEffect`, `useLayoutEffect`
- click/keyboard handlers
- Framer Motion interactive components
- React Three Fiber / Three.js
- browser storage
- window/document access
- Supabase Realtime subscriptions
- DnD and similar browser libraries

Prefer keeping the page/layout server-rendered and placing only the interactive island into a client component.

---

## 8. Guestbook architecture

```text
Browser
  |
  | GET / realtime subscription
  v
Supabase Realtime + Postgres
  ^
  |
Next.js POST /api/guestbook
  |
  +--> validate payload
  +--> validate Cloudflare Turnstile token
  +--> reject spam/oversized messages
  +--> insert message
```

Recommended table:

```text
guestbook_messages
- id uuid primary key
- name text
- message text
- created_at timestamptz
- status text
```

Security:

- Public/anon users may SELECT published messages.
- Anonymous direct INSERT should be denied.
- Insert through the server-side Next.js route after Turnstile validation.
- Never expose the Supabase service-role key to the browser.
- Set strict message/name length limits.
- Escape/render messages as plain text.
- Do not allow arbitrary HTML.

Realtime client:

- subscribe only to published guestbook changes;
- insert the new item into local state;
- avoid duplicate items by primary key.

---

## 9. Deployment model

Recommended:

- Next.js: Vercel free/hobby tier
- CMS: Sanity free tier
- Runtime DB / Realtime: Supabase free tier
- Bot protection: Cloudflare Turnstile
- No self-managed VM/container/server

The site may use serverless route execution, but no continuously running self-hosted application server is required.

---

## 10. Cutover rule

Do not replace the legacy app until all of the following pass:

- production build
- lint/typecheck
- route parity
- desktop visual regression
- mobile visual regression
- critical E2E interactions
- guestbook API tests
- guestbook Realtime test
- metadata/SEO checks
- manual smoke test
- custom domain deployment rehearsal

Only then merge/cut over.
