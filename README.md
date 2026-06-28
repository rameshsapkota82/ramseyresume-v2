# Ramsey Resume v2

Production website foundation for Ramsey Resume, built with Next.js, TypeScript, Tailwind CSS, App Router, and Cloudflare Pages compatibility.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Cloudflare Pages
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

This project uses the current OpenNext Cloudflare adapter. For Cloudflare deployment:

```text
Node version: 22
Build command: npm run cloudflare:build
Preview command: npm run cloudflare:preview
Deploy command: npm run cloudflare:deploy
```

Build locally for Cloudflare:

```bash
npm run cloudflare:build
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
