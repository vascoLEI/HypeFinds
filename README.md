# HypeFinds

HypeFinds is a mobile-first React + Vite affiliate-style site for curated SHEIN fashion and accessory finds.

## Features

- Home, Products, Outfits, About and 404 pages
- Full-screen landscape video homepage with centered HYPEFINDS branding
- Responsive hamburger navbar, footer, product cards, outfit cards and filter sidebar
- Fallback product data in `src/data/products.js`
- Outfit data in `src/data/outfits.js`
- Google Sheet CSV loading through `src/services/productsService.js` and `src/services/outfitsService.js`
- Product filters by category and gender
- Outfit filters by gender
- Product cards with direct shop and copy-code actions
- `Shop on SHEIN` links for real product URLs as they are added
- `Copy Code` button for product promo/affiliate codes
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

The included `vercel.json` rewrites all routes to `index.html`, so direct links like `/products` and `/outfits` work after deployment.

## Google Sheet Data

The products page loads from the `Products` sheet tab. The expected columns are:

```txt
Name, Category, Gender, Price, Image, Url, Code
```

The outfits page loads from the `Outfits` sheet tab. The expected columns are:

```txt
Image, Gender, Link 1, Code 1, Link 2, Code 2, Link 3, Code 3
```

`Link 3` and `Code 3` can be empty.

To publish the Google Sheet as CSV:

1. Open the Google Sheet.
2. Go to `Ficheiro`.
3. Choose `Partilhar`.
4. Choose `Publicar na Web`.
5. Select the sheet tab.
6. Select `CSV`.
7. Copy the published CSV link.

Then create a local `.env.local` file and add the edit or CSV links there:

```bash
VITE_PRODUCTS_SHEET_URL=COLOCAR_LINK_AQUI
VITE_OUTFITS_SHEET_URL=COLOCAR_LINK_AQUI
```

Use `.env.example` as the template. The `.env.local` file is ignored by Git, so your Google Sheet link is not stored in the repository.

For Vercel, add the same variables in `Project Settings > Environment Variables`:

```txt
VITE_PRODUCTS_SHEET_URL
VITE_OUTFITS_SHEET_URL
```

The implementation can also try to convert normal Google Sheets edit links into CSV export URLs. If a sheet is private, blocked by permissions, or not published correctly, the site silently uses fallback data or shows an empty store state.

Important: because this is a frontend-only site, the browser can only load Google Sheet data that is reachable as CSV. A truly private Google Sheet requires authentication or a backend/proxy, which this project intentionally does not use.

For product and outfit images, the `Image` column supports:

- Direct image URLs
- Google Drive share links, if the file is accessible by link
- Google Sheets formulas like `=IMAGE("https://example.com/image.jpg")`

Images inserted directly into a Google Sheets cell usually do not export as usable CSV image URLs. If the `Image` column is empty or not a valid URL, the site uses:

```txt
public/images/placeholder-product.jpg
```

## Affiliate Links

Add real SHEIN affiliate URLs in the product `Url` column and outfit `Link 1`, `Link 2`, `Link 3` columns. The local `src/data/products.js` and `src/data/outfits.js` files are only used as fallback data when the sheets cannot be loaded.

Some links may be affiliate links. This project does not include a backend, checkout or payment flow.
