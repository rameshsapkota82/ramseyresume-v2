# Ramsey Resume v2

Production website foundation for Ramsey Resume, built with Next.js, TypeScript, Tailwind CSS, App Router, and Cloudflare Workers deployment via OpenNext.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Cloudflare Workers with OpenNext
- GitHub
- Lucide icons

## Phase 1 Scope

This foundation includes:

- App Router layout
- Global styles and design tokens
- SEO-ready metadata helper
- Robots and sitemap route handlers
- Sticky header shell
- Mobile navigation shell
- Footer shell
- Mobile sticky CTA shell
- Homepage placeholder sections
- Reusable UI components
- Reserved folders for content, images, schema, forms, blog, tests, and future tools

It intentionally does not include:

- Full service pages
- Blog content
- Form integrations
- Paid APIs
- AI tools
- Production imagery

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Checks

```bash
npm run typecheck
npm run build
```

## Cloudflare Deployment

This project is configured for **Cloudflare Workers + OpenNext**, not classic static Cloudflare Pages.

The OpenNext build must run before Wrangler preview/deploy commands. If Cloudflare shows:

```text
ERROR Could not find compiled Open Next config, did you run the build command?
```

the deployment command is running without first generating `.open-next`.

Use these commands:

```text
Node version: 22
Build command: npm run cloudflare:build
Preview command: npm run cloudflare:preview
Deploy command: npm run deploy
```

Build locally for Cloudflare:

```bash
npm run cloudflare:build
```

Generated OpenNext output should include:

```text
.open-next/worker.js
.open-next/assets/
.open-next/.build/open-next.config.mjs
```

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## Project Structure

```text
app/                 App Router pages, layout, metadata routes
components/layout/   Header, footer, navigation and sticky CTA
components/sections/ Reusable page sections
components/ui/       Primitive UI components
content/             Future structured content
lib/                 Site config, navigation, SEO and utilities
public/images/       Optimised production image assets
styles/              Design tokens
types/               Shared TypeScript types
```

## Next Recommended Phase

Phase 2 should build the complete homepage using the approved homepage blueprint and design system.
