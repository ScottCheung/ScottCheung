# Testing Strategy

The most important migration requirement is **visual and behavioral parity**.

---

## 1. Test layers

Use four layers:

1. Type/lint/unit tests
2. API/integration tests
3. Browser E2E tests
4. Visual regression tests

Visual tests are a release gate for route migration.

---

## 2. Visual regression

Use Playwright `expect(page).toHaveScreenshot()`.

### Baseline rule

The legacy CRA app generates the original golden screenshots.

The Next.js app is compared against those screenshots.

Do not regenerate baselines from Next.js merely to make a failing test pass.

### Recommended viewports

Desktop:

```text
1440 × 900
```

Mobile:

```text
390 × 844
```

Optional tablet for affected routes:

```text
768 × 1024
```

### Required route coverage

At minimum:

- `/`
- `/info`
- `/life`
- `/gallery`
- one representative `/gallery/:gallery`
- `/work`
- one representative `/work/:work`
- `/degree`
- one representative `/major/:major`
- `/award`
- `/scholarship`
- `/contact`
- `/resume`
- `/project`
- `/gobelldesign`
- `/design`
- `/igrapher`
- `/story`
- `/pp`
- `/music`
- 404

Add dynamic route fixtures using stable IDs/slugs from legacy data.

### Stabilizing screenshots

Before capture:

- wait for fonts;
- wait for relevant images;
- disable CSS transitions/animations unless animation state itself is being tested;
- mask volatile timestamps;
- stabilize random values;
- freeze animation state where practical;
- avoid relying on third-party content frames.

For Three.js/canvas areas:

Option A: freeze known deterministic state.

Option B: mask the canvas and test its presence/size separately if deterministic pixel output is not realistic.

### Diff policy

Start strict.

If platform rendering noise requires tolerance, configure a small documented threshold.

Do not use a large threshold to hide spacing/layout errors.

### CI consistency

Generate and compare golden screenshots in the same browser/OS container when possible.

Commit approved snapshot files.

---

## 3. E2E tests

Critical flows:

### Navigation

- global nav links work;
- dynamic route links work;
- browser back/forward works;
- `/home` behavior matches intended legacy behavior;
- unknown URL reaches 404.

### Theme/language

- switch language;
- refresh and verify expected persistence behavior;
- switch theme if applicable;
- ensure page-local content updates.

### Gallery

- open gallery;
- open item/detail;
- close/navigate;
- responsive behavior.

### Work/project

- open index;
- open dynamic detail;
- back navigation.

### Resume

- renders;
- version route renders;
- print/export action works when supported;
- no browser console error.

### Guestbook

- user submits message;
- message appears;
- second browser context receives Realtime update without refresh.

---

## 4. API tests

Preferred tooling:

- Playwright `request` fixture for black-box route testing, or
- Vitest for isolated route/service tests.

### `POST /api/guestbook`

Test matrix:

#### 201/200 success

- valid name;
- valid message;
- valid captcha token;
- expected response schema.

#### 400 validation

- empty name if required;
- empty message;
- name too long;
- message too long;
- malformed JSON;
- unsupported content type.

#### 401/403 protection

- missing Turnstile token;
- invalid Turnstile token.

#### 429 where implemented

- repeated abusive submissions.

#### safety

- script tags are not executed;
- message is treated as text;
- SQL-like strings remain harmless data;
- service-role key never appears in browser bundle/response.

#### backend error

- Supabase insert failure returns safe error response;
- internal credentials/details are not leaked.

---

## 5. Data contract tests

Add schemas/types at external boundaries.

Recommended:

- Zod or equivalent runtime validation for guestbook payload.
- Typed Sanity queries/generated types where available.
- Validate imported CMS documents before publishing/importing.

Test content invariants such as:

- project slug unique;
- required titles present;
- expected locale fields present;
- route slug does not contain unsafe path values.

---

## 6. Useful scripts

Target scripts in `next-app/package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test tests/e2e",
    "test:api": "playwright test tests/api",
    "test:visual": "playwright test tests/visual",
    "test:visual:update": "playwright test tests/visual --update-snapshots"
  }
}
```

Exact tooling/version can be adjusted when the app is scaffolded.

---

## 7. Migration release gate

A route cannot be marked migrated if:

- it has an unreviewed visual diff;
- navigation fails;
- there are hydration/runtime errors;
- the page produces a console error;
- responsive layout visibly diverges;
- required dynamic route behavior is missing.

The whole migration cannot cut over unless:

```text
typecheck    PASS
lint         PASS
unit         PASS
api          PASS
e2e          PASS
visual       PASS
build        PASS
manual smoke PASS
```
