# SHOW МОЗГ GO ON

Premium futuristic landing page for the SHOW МОЗГ GO ON birthday experience.

Built with:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

## Vercel Deployment

The project is ready for Vercel with the default Next.js settings.

Recommended Vercel settings:

```text
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: .next
Node.js Version: 22.x
```

No environment variables are required for the current version.

## Deploy From GitHub

1. Push this project to a GitHub repository.
2. Open https://vercel.com/new.
3. Import the GitHub repository.
4. Keep the detected framework as `Next.js`.
5. Confirm the build command is `npm run build`.
6. Click `Deploy`.
7. After deployment, open the generated Vercel URL and verify the landing page.

## Deploy With Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Log in:

```bash
vercel login
```

Create a preview deployment:

```bash
vercel
```

Create a production deployment:

```bash
vercel --prod
```

## Content Notes

The CTA currently points to the participation section. When the external payment link is ready, update `paymentHref` in:

```text
data/event.ts
```

Use only approved event visuals in `public/images`. Do not add stock portraits, random generated people, avatar illustrations, conference cards, or SaaS-style imagery.
