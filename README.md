# HypeFinds

HypeFinds is a mobile-first React + Vite affiliate-style site for curated SHEIN fashion and accessory finds.

## Features

- Home, Men, Women, Accessories, About and 404 pages
- Responsive navbar, footer, hero, featured section, category cards and product cards
- Local fictional product data in `src/data/products.js`
- Category filters and simple search
- `Shop on SHEIN` links using `https://www.shein.com/` placeholders
- `Copy Code` button for a placeholder promo/affiliate code
- Basic SEO title and meta description handling
- Vercel-ready SPA rewrite config

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy on Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Vercel settings for a Vite project:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

The included `vercel.json` rewrites all routes to `index.html`, so direct links like `/men` and `/accessories` work after deployment.

## Affiliate Links

The current product links are placeholders:

```txt
https://www.shein.com/
```

Replace each `sheinUrl` in `src/data/products.js` with your real SHEIN affiliate URL when you have it.

Some links may be affiliate links. This project does not include a backend, checkout or payment flow.
