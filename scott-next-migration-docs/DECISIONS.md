# Architecture Decisions

## ADR-001 — Fresh Next.js app beside legacy CRA

**Decision:** create `next-app/` and migrate side-by-side.

**Reason:** safest visual comparison and rollback path.

**Status:** Accepted.

---

## ADR-002 — Page-local component colocation

**Decision:** route-specific components live under that route's `_components`.

**Reason:** page ownership is obvious and the shared component directory stays small.

**Status:** Accepted.

---

## ADR-003 — Shared component promotion rule

**Decision:** place a component in `src/components` only when it is genuinely reused across routes with the same semantic role.

**Status:** Accepted.

---

## ADR-004 — No GraphQL during migration

**Decision:** use Sanity GROQ + Supabase client/Realtime + small Next.js Route Handlers.

**Reason:** GraphQL adds complexity without solving a current problem.

**Status:** Accepted.

**Revisit when:** the application needs a shared API consumed by multiple independent clients or a custom multi-source backend.

---

## ADR-005 — CMS is not the runtime database

**Decision:**

- Sanity = editable portfolio content.
- Supabase = guestbook/runtime data.
- repository JSON = non-editorial static/visualization data.

**Status:** Accepted.

---

## ADR-006 — Visual parity is a release gate

**Decision:** legacy CRA screenshots are the baseline for migration.

**Status:** Accepted.

---

## ADR-007 — CMS migration happens after framework parity

**Decision:** first migrate CRA -> Next.js while retaining legacy content sources behind an adapter; only then switch adapter implementation to Sanity.

**Reason:** isolates framework regressions from content regressions.

**Status:** Accepted.

---

## ADR-008 — Protected guestbook writes use a server-side route

**Decision:** anonymous users do not directly insert using a privileged key.

Flow:

`Browser -> Next Route Handler -> Turnstile -> Supabase`

Realtime reads/subscriptions may use the public client under RLS.

**Status:** Accepted.
