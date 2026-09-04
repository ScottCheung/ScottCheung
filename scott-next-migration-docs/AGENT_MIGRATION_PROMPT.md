# Agent Prompt — CRA to Next.js Migration

Use this file as the operating instruction for Codex, Gemini, Claude, or another coding agent working on this migration.

---

## Role

You are migrating the ScottCheung personal portfolio from Create React App + React Router to Next.js App Router.

The legacy application is the **visual and behavioral source of truth**.

Your job is not to redesign it.

Your job is to reproduce it in the new architecture with minimal regression risk.

---

## Non-negotiable constraints

1. Never modify `main` as part of migration work.
2. Work only on the migration branch.
3. Keep the legacy CRA application working until final cutover.
4. Build the new application inside `next-app/` until cutover.
5. Do not intentionally change UI, spacing, typography, colors, animation, wording, image selection, or responsive behavior during framework migration.
6. Do not perform opportunistic UI refactoring.
7. Do not migrate JSON content into the CMS until framework parity is achieved unless the current task explicitly says to do so.
8. Do not introduce GraphQL.
9. Use GROQ for Sanity.
10. Use the Supabase JS client and Supabase Realtime for guestbook/runtime data.
11. Default to React Server Components.
12. Add `"use client"` only at the smallest interactive boundary that needs it.
13. Page-specific components must live next to their route under `_components`.
14. Only genuinely shared components belong in `src/components`.
15. Never move a component into the global shared directory solely because it might become reusable later.
16. Preserve existing class names and DOM structure where practical during visual migration.
17. Do not delete legacy code until the final cleanup task.
18. No task is complete while its required tests fail.
19. Do not update visual baselines to hide regressions.
20. Visual baseline updates require an intentional UI-change task.

---

## Required workflow for every migration task

### Before editing

1. Read:
   - `MIGRATION_ARCHITECTURE.md`
   - `MIGRATION_TASKS.md`
   - `TESTING_STRATEGY.md`
   - `CONTENT_DATA_PLAN.md`
2. Read the legacy implementation of the route/component being migrated.
3. Identify:
   - dependencies;
   - JSON imports;
   - global context usage;
   - browser-only APIs;
   - animations;
   - dynamic routes;
   - responsive behavior.
4. Run the relevant legacy baseline test when available.

### During implementation

1. Change only the current task scope.
2. Keep route-specific components colocated.
3. Prefer server-rendering static content.
4. Isolate browser-only behavior into minimal client components.
5. Keep the current visual structure.
6. Adapt React Router patterns to Next routing rather than emulating React Router inside Next.js.
7. Avoid a new abstraction unless at least two real callers need it now.
8. Use typed boundaries for external data.
9. Never expose secret keys to the client.

### After implementation

Run the relevant checks:

```bash
npm run typecheck
npm run lint
npm run test
npm run test:e2e
npm run test:visual
npm run test:api
npm run build
```

Run only the smallest relevant subset during iteration, but all required gates must pass before a phase is declared complete.

### Visual failure policy

If a visual comparison fails:

1. inspect the generated diff;
2. assume the new implementation is wrong;
3. compare computed layout and CSS against legacy;
4. fix the implementation;
5. rerun the test.

Do **not** update the golden snapshot unless the current task explicitly authorizes a visual change.

---

## Page component convention

Correct:

```text
app/gallery/
├── page.tsx
└── _components/
    ├── GalleryGrid.tsx
    ├── GalleryFilter.tsx
    └── GalleryModal.tsx
```

Incorrect:

```text
components/
├── GalleryGrid.tsx
├── GalleryFilter.tsx
├── GalleryModal.tsx
├── InfoTimeline.tsx
├── HomeHero.tsx
└── ...
```

The global component folder is not a dumping ground.

---

## Migration quality bar

A migrated route is complete only when:

- URL parity exists;
- page renders successfully;
- no browser console errors occur;
- major interactions work;
- desktop screenshot is within approved threshold;
- mobile screenshot is within approved threshold;
- navigation to/from the route works;
- data is semantically equivalent;
- no accidental client-only conversion of the whole page occurred;
- no unrelated legacy files were removed.

---

## CMS rule

When CMS migration begins:

Do not let page components query Sanity directly everywhere.

Use a small content layer:

```text
page
  -> content/data function
      -> Sanity query
```

Normalize CMS data where useful so UI code is not tightly coupled to Sanity-specific field shapes.

---

## Guestbook rule

Write flow:

```text
GuestbookForm
  -> POST /api/guestbook
      -> validate
      -> Turnstile verify
      -> Supabase insert
```

Read/realtime flow:

```text
GuestbookList
  -> initial read
  -> Supabase Realtime subscription
```

Never put the service-role key in a client component.

---

## Completion report format

At the end of each task, report exactly:

```text
Task:
Status:

Changed:
- ...

Tests:
- typecheck:
- lint:
- unit:
- api:
- e2e:
- visual:
- build:

Visual differences:
- None
or
- ...

Known risks:
- ...

Next task:
- ...
```

If any required test failed, status must not be `Complete`.
