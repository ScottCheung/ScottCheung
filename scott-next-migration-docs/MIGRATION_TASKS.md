# Migration Tasks

Each task should be completed independently. Do not combine multiple phases into one large agent run.

---

# Phase 0 — Safety and baseline

## M00 — Create migration branch

- Create `nextjs-migration` from `main`.
- Verify `main` remains unchanged.
- Do not make migration commits directly to `main`.

Acceptance:

- branch exists;
- working tree starts from current main.

## M01 — Inventory current application

Document:

- all React Router routes;
- dynamic route parameters;
- top-level providers/context;
- shared components;
- page-local components;
- local JSON dependencies;
- browser-only libraries;
- global CSS/assets;
- runtime external calls.

Current routes observed in `src/Router.js` include:

- `/`
- `/home`
- `/info`
- `/life`
- `/gallery`
- `/gallery/:gallery`
- `/major/:major`
- `/whyme/:whyme`
- `/work`
- `/work/:work`
- `/degree`
- `/award`
- `/scholarship`
- `/contact`
- `/resume`
- `/resume/:resume`
- `/at`
- `/resumecheck/:version`
- `/cvcheck/:version`
- `/project`
- `/tiktok`
- `/gobelldesign`
- `/design`
- `/igrapher`
- `/story`
- `/pp`
- `/music`
- catch-all 404

Acceptance:

- every current route has a migration mapping.

## M02 — Create legacy visual baseline

Create Playwright visual tests for representative routes.

Initial viewports:

- Desktop: 1440 × 900
- Mobile: 390 × 844

Add tablet only where layout meaningfully differs.

Disable or mask nondeterministic content:

- animated cursors;
- video frames;
- clocks/timestamps;
- continuously moving Three.js scenes where necessary;
- third-party embeds.

Capture baseline screenshots from the CRA app.

Acceptance:

- golden screenshots exist;
- snapshots are committed;
- repeated runs in the same environment are stable.

---

# Phase 1 — Fresh Next.js shell

## M10 — Create `next-app`

Create a fresh Next.js App Router TypeScript application under:

`next-app/`

Configure:

- `src/`
- TypeScript
- ESLint
- existing styling requirements
- Playwright
- scripts for test/build

Do not migrate page content yet.

Acceptance:

- dev server runs;
- production build passes.

## M11 — Migrate global CSS and static assets

- copy static assets without renaming unless necessary;
- migrate global CSS with minimal changes;
- preserve fonts and asset paths;
- document path changes.

Acceptance:

- no intended visual change.

## M12 — Root layout and providers

Migrate:

- root layout;
- language context;
- theme/context providers;
- any global contact/navigation container.

Keep providers client-side only when required.

Acceptance:

- base shell loads;
- no hydration errors.

## M13 — Shared navigation

Identify truly shared navigation/contact components.

Move only cross-route UI into:

`src/components`

Acceptance:

- navigation visually matches legacy;
- links use Next.js routing.

---

# Phase 2 — Route migration

Migrate one route at a time.

For each route:

1. create route folder;
2. colocate page-only components in `_components`;
3. preserve visual structure;
4. replace React Router APIs with Next APIs;
5. run route-specific E2E;
6. run desktop + mobile visual comparison;
7. fix differences before continuing.

Recommended order:

## M20 — Home `/` and `/home`

- `/` is canonical.
- `/home` should preserve current behavior via redirect or equivalent route.
- Home-only components belong under `app/_components`.

## M21 — Info `/info`

## M22 — Life `/life`

## M23 — Gallery

- `/gallery`
- `/gallery/[gallery]`

## M24 — Work

- `/work`
- `/work/[work]`

## M25 — Education

- `/degree`
- `/major/[major]`

## M26 — Why Me

- `/whyme/[whyme]`

## M27 — Awards and scholarship

- `/award`
- `/scholarship`

## M28 — Contact

- `/contact`

## M29 — Resume family

- `/resume`
- `/resume/[resume]`
- `/resumecheck/[version]`
- `/cvcheck/[version]`

Printing/export behavior must be tested.

## M30 — Project pages

- `/project`
- `/gobelldesign`
- `/design`
- `/igrapher`

## M31 — Story / personal pages

- `/story`
- `/pp`
- `/music`
- `/tiktok`
- `/at`

## M32 — 404

Migrate catch-all behavior to Next.js `not-found.tsx`.

Acceptance for Phase 2:

- every route mapped;
- no missing dynamic route;
- all visual regression tests pass.

---

# Phase 3 — Data decoupling before CMS

## M40 — Introduce content access layer

Current UI should stop importing the large database JSON everywhere.

Create functions such as:

```text
getPersonalInfo()
getWorkExperience()
getProjects()
getGallery()
getAwards()
getMusic()
getUpdateLog()
```

Initially these functions may still read local JSON.

Goal:

```text
UI -> content function -> local JSON
```

not:

```text
UI -> Database.json
```

Acceptance:

- route components no longer depend directly on the God JSON where migrated;
- UI unchanged.

## M41 — Split static vs editorial data

Classify every file in `src/data`.

Likely:

- `Database.json` -> split / migrate editorial portions
- `workData.json` -> evaluate for CMS
- `update-log.json` -> CMS candidate
- `globe.json` -> keep static
- `ss.json` -> inspect and classify

Acceptance:

- classification documented;
- no data moved yet unless task explicitly requires it.

---

# Phase 4 — Sanity CMS

## M50 — Create Sanity project/schema

Create schemas for:

- personal profile;
- experience;
- education;
- awards;
- projects;
- gallery;
- music;
- testimonials;
- updates.

Prefer references only when they create real editorial value.

Do not over-normalize.

## M51 — Import existing JSON into Sanity

Write a one-time import script.

Requirements:

- deterministic IDs where appropriate;
- repeatable/idempotent behavior where practical;
- dry-run option;
- validation/reporting.

## M52 — Switch content layer from JSON to Sanity

Replace implementation behind content functions.

Goal:

```text
UI -> content function -> Sanity
```

UI should not need broad rewrites.

## M53 — CMS parity tests

Validate:

- content counts;
- required fields;
- images;
- bilingual content;
- project ordering;
- route slugs.

Run full visual regression.

Acceptance:

- no unapproved visual changes.

---

# Phase 5 — Guestbook

## M60 — Supabase schema

Create guestbook table and RLS policies.

Fields:

- `id`
- `name`
- `message`
- `created_at`
- `status`

Public client:

- may read published messages;
- may not use a service-role credential.

## M61 — Guestbook API

Create:

`POST /api/guestbook`

Validate:

- required fields;
- max name length;
- max message length;
- Turnstile token;
- invalid/untrusted input;
- response shape.

Insert server-side.

## M62 — Guestbook UI

Place components under the route that owns the feature.

If guestbook appears only on one page, keep all guestbook components page-local.

If it later appears on multiple routes, promote the shared parts.

## M63 — Supabase Realtime

Subscribe to new published messages.

Requirements:

- no duplicate messages;
- reconnect safely;
- unsubscribe on cleanup;
- realtime failure does not break static read.

## M64 — Guestbook API + realtime tests

Test:

- valid post;
- invalid payload;
- missing captcha;
- bad captcha;
- oversized fields;
- HTML/script-like input rendered safely;
- new message appears to another browser context without page reload.

---

# Phase 6 — Quality and performance

## M70 — Metadata / SEO

Add:

- route metadata;
- canonical URLs where appropriate;
- OpenGraph;
- sitemap;
- robots;
- structured data only where justified.

## M71 — Image optimization

Evaluate images individually.

Do not change crop/quality visually without approval.

## M72 — Client bundle review

Find oversized client islands.

Especially review:

- Three.js
- React Three Fiber
- Framer Motion
- charts
- PDF/export libraries

Lazy-load heavy browser-only features when appropriate.

## M73 — Accessibility smoke test

Check:

- keyboard navigation;
- focus;
- alt text;
- labels;
- headings;
- obvious contrast regressions.

---

# Phase 7 — Cutover

## M80 — Full pre-cutover test

Required:

- lint
- typecheck
- unit
- API
- E2E
- visual desktop
- visual mobile
- production build

## M81 — Production preview

Deploy migration branch to preview.

Compare preview against current production manually.

## M82 — Domain/cutover plan

Prepare custom domain and deployment changes.

Do not remove legacy app before successful rehearsal.

## M83 — Final cutover

Only after explicit approval:

- make Next.js app the repository/deployment root;
- retain legacy code in git history or temporary archive branch;
- preserve redirects;
- validate production.

## M84 — Cleanup

After stable cutover:

- remove unused CRA dependencies;
- remove obsolete router;
- remove old generated build/docs artifacts where no longer needed;
- remove dead components/data;
- update README.

This is the first phase where broad legacy deletion is allowed.
