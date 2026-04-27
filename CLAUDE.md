# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build (also runs next-sitemap via postbuild)
npm run lint       # ESLint
npm run typecheck  # TypeScript type check
npm run format     # Prettier (formats all files)
```

There are no automated tests in this project.

## Architecture

This is a **Next.js 14 App Router** personal portfolio for Franck GALLIOD, deployed on Vercel. It uses two distinct backends for different concerns:

### Data Sources

**Supabase** — dynamic portfolio data (projects, stacks, user profile)
- `src/lib/supabase/data.ts` — all read queries (server-side)
- `src/lib/actions.ts` — all write mutations as Next.js Server Actions
- `src/lib/supabase/client.ts`, `server.ts`, `middleware.ts` — Supabase client helpers for browser/server/middleware contexts
- `src/lib/supabase.type.ts` — TypeScript types for Supabase tables
- `src/lib/validate.ts` — Zod schemas for form validation in server actions

**Sanity CMS** — blog content (posts, categories)
- `src/sanity/client.ts` — Sanity client + `SanityLive` for real-time previews + `SanityService` class with query methods
- `src/types/sanity.types.ts` — generated TypeScript types for Sanity schemas

### Routing & Internationalization

The site supports **French (default) and English** via a path-prefix approach (no locale prefix for FR, `/en/` prefix for EN):
- `src/middleware.ts` — handles i18n routing + Supabase session refresh + security headers
- `src/dictionaries/` — `fr.json` / `en.json` translation files, loaded server-side via `getDictionary()`
- The `/en/` route (`src/app/en/`) mirrors the French home but reads from EN dictionaries

### Authentication & Dashboard

Protected admin dashboard at `/dashboard`:
- Auth via Supabase Auth (magic link / email)
- `src/app/api/auth/callback/route.ts` — OAuth callback handler
- Middleware redirects unauthenticated users from `/dashboard` → `/signin`
- Dashboard manages projects and stacks (CRUD) via Server Actions in `src/lib/actions.ts`
- Dashboard UI components live in `src/app/ui/dashboard/` and use React Context (`projectContext.tsx`, `stackContext.tsx`) for local state

### Key Patterns

- **Image hosting**: Project preview images are uploaded to Supabase Storage (`avatars` bucket); stack logos are external URLs. `next.config.mjs` whitelists remote image domains.
- **Sitemap**: `next-sitemap` runs post-build using `next-sitemap.config.js`; the Sanity sitemap client (`src/sanity/sitemapClient.js`) feeds blog URLs.
- **Styling**: Tailwind CSS with `fluid-tailwind` for responsive fluid typography. Prettier is configured with `prettier-plugin-tailwindcss` and `prettier-plugin-classnames`.
- **Font**: Bricolage Grotesque (Google Fonts) loaded via `next/font`.

### Required Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_TOKEN
```
