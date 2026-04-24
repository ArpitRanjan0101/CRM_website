# CRM Website

This project is a Next.js 16 marketing website for a CRM product. It includes a landing page, pricing page, industries page, features page, blog listing with blog detail pages, legal pages, and a brochure download route.

The project is currently set up to run through Docker on a single public port:

```text
http://localhost:3000
```

## Current Stack

- Next.js 16 with App Router
- React 19
- JavaScript
- Tailwind CSS 4
- Docker Compose

## Active Pages

- `/` home page
- `/features` CRM features page
- `/pricing` pricing and plan comparison page
- `/industries` industries overview page
- `/blogs` blog listing page
- `/blogs/[slug]` blog detail page
- `/privacy-policy` privacy page
- `/terms-and-conditions` legal terms page
- `/crm-brochure` brochure download route

## Active UI Structure

### Main app files

```text
app/
  layout.js
  page.js
  globals.css
  blogs/
  crm-brochure/
  features/
  industries/
  pricing/
  privacy-policy/
  terms-and-conditions/
```

### Main reusable components

```text
components/
  Navbar.js
  HeroSection.js
  HeroForm.js
  FeaturesSection.js
  ProductShowcase.js
  PricingSection.js
  TestimonialSection.js
  ConsultationSection.js
  FAQSection.js
  BrandSection.js
  TrustSection.js
  ContactSection.js
  ContactLink.js
  BookCallModal.js
  Reveal.js
  Chatbot.js
  WhatsAppButton.js
  SocialStickyBar.js
```

## Run The Project

### Recommended: Docker

Build and start the site:

```bash
docker compose up --build -d
```

Or use the npm shortcut:

```bash
npm run docker:build
```

Start again without rebuilding:

```bash
docker compose up -d
```

Or:

```bash
npm run docker:up
```

Stop the project:

```bash
docker compose down
```

Or:

```bash
npm run docker:down
```

View logs:

```bash
npm run docker:logs
```

## Port Configuration

The project intentionally uses one app port only:

```text
3000:3000
```

## Local Development

The project no longer needs a local `node_modules` folder to stay in the workspace. Docker installs dependencies inside the image.

If you want to run it locally again later:

```bash
npm install
npm run dev
```

## Important Project Files

- [package.json](/c:/Users/ACER/Desktop/CRM_Website/package.json) npm scripts and dependencies
- [docker-compose.yml](/c:/Users/ACER/Desktop/CRM_Website/docker-compose.yml) single-container Docker runtime
- [Dockerfile](/c:/Users/ACER/Desktop/CRM_Website/Dockerfile) production image build
- [app/page.js](/c:/Users/ACER/Desktop/CRM_Website/app/page.js) home page composition
- [app/blogs/page.js](/c:/Users/ACER/Desktop/CRM_Website/app/blogs/page.js) blog listing page
- [app/blogs/[slug]/page.js](/c:/Users/ACER/Desktop/CRM_Website/app/blogs/[slug]/page.js) blog detail page
- [app/layout.js](/c:/Users/ACER/Desktop/CRM_Website/app/layout.js) shared layout and global widgets

## Cleanup Notes

The repo has been cleaned to remove:

- local `node_modules`
- unused old component files
- old Docker dev-only files
- generated Next.js output and local log files

Generated files are also covered by [`.gitignore`](/c:/Users/ACER/Desktop/CRM_Website/.gitignore).
