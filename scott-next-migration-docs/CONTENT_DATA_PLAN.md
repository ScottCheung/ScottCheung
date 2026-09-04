# Content & Data Migration Plan

## Principle

Do not equate "JSON" with "CMS content".

The decision is based on **who edits the data and why**.

---

## 1. Current data observed

The existing project contains:

- `src/data/Database.json`
- `src/data/globe.json`
- `src/data/ss.json`
- `src/data/update-log.json`
- `src/data/workData.json`

`Database.json` is currently imported directly by many pages/components, creating tight coupling between presentation and storage format.

The migration should remove that coupling before switching storage.

---

## 2. Target data boundary

Desired:

```text
Page / component
      |
      v
content function / adapter
      |
      +--> Sanity
      +--> static repository data
      +--> Supabase
```

Avoid:

```text
Component -> import giant Database.json
```

Also avoid:

```text
Every component -> custom Sanity query
```

---

## 3. CMS candidates

Likely Sanity-managed content:

### Personal profile

- names
- headings
- descriptions
- contact display information
- introduction
- personal facts

### Experience

- companies
- roles
- dates
- descriptions
- skills
- images/logos

### Education

- degrees
- institutions
- majors
- dates
- descriptions

### Awards/certificates

- title
- issuer
- date
- image
- link
- description

### Projects

- slug
- title
- summary
- long description
- technologies
- images
- links
- dates
- ordering

### Gallery

CMS should store metadata and editorial grouping.

Large derived/geospatial datasets should stay static.

### Music

- track metadata
- descriptions
- cover/image
- external links

### Testimonials

- author
- relationship/title
- quote
- ordering

### Update log

`update-log.json` is a strong CMS candidate because it is editorial and append-oriented.

---

## 4. Keep local/static

### `globe.json`

Keep in repository unless inspection reveals it is actually editorial content.

Reason:

- large visualization datasets gain little from a CMS;
- versioning them with the rendering code is often preferable;
- CMS bandwidth and editor complexity are unnecessary.

### UI constants

Examples:

- breakpoints;
- animation constants;
- feature flags owned by code;
- display mappings;
- visualization configuration.

---

## 5. Inspect before deciding

### `ss.json`

Do not migrate blindly.

Inspect schema and usage first.

Classify each top-level branch as:

- editorial;
- static implementation data;
- generated data;
- runtime data.

### `workData.json`

Likely CMS candidate if it models work/projects.

Confirm actual callers and shape before migration.

---

## 6. Transitional adapter

Before Sanity:

```ts
export async function getProjects() {
  return legacyDatabase.projects;
}
```

After Sanity:

```ts
export async function getProjects() {
  return sanityFetch(/* GROQ */);
}
```

The page should not care which storage implementation is behind the function.

This makes CMS migration separately testable from framework migration.

---

## 7. Sanity schema design rule

Do not recreate the giant JSON object as one giant Sanity document.

Prefer meaningful document types:

```text
siteSettings
profile
experience
education
award
project
galleryItem
musicItem
testimonial
updateEntry
```

Use arrays inside a document when the data is truly owned by that document.

Use references when entities have an independent lifecycle.

Avoid excessive normalization.

---

## 8. Bilingual content

Keep language fields structurally consistent.

Example:

```text
title:
  en
  zh

description:
  en
  zh
```

or a project-wide locale strategy selected once.

Do not mix several localization patterns without reason.

---

## 9. Import strategy

Create an import script that:

1. loads legacy JSON;
2. validates source structure;
3. transforms source records;
4. creates/upserts Sanity documents;
5. reports counts;
6. reports rejected records;
7. can run in dry-run mode.

Keep the original JSON through the parity period.

Delete it only after:

- CMS content parity is verified;
- all routes use the content layer;
- rollback is no longer needed.

---

## 10. Supabase is not the CMS

Do not place portfolio editorial content in Supabase merely because it can store it.

Use Supabase for runtime/user-generated data:

- guestbook;
- reactions if added;
- other interactive state.

Use Sanity for editorial content.

That separation keeps each tool focused on what it does best.
