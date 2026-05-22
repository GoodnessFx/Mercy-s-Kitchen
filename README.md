
# Mercy's Kitchen

Mercy's Kitchen is a Vite + React food ordering and catering site built for a Makurdi-based kitchen brand. It focuses on fast WhatsApp ordering, event package inquiries, cart-based ordering, and a warm food-first presentation across desktop and mobile.

## What This Project Includes

- Responsive landing page with featured items and event highlights
- Menu browsing with categories, sorting, and product detail pages
- Cart flow with WhatsApp order handoff
- Event package inquiry flow
- Contact page with pre-filled WhatsApp inquiry generation
- Sticky navigation, floating WhatsApp CTA, and branded catering UI

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Motion
- Lucide React

## Project Structure

```text
src/
  app/             App shell and routes
  components/      Shared UI components
  context/         Cart state management
  data/            Menu and event package data
  pages/           Route-level pages
  styles/          Global theme and style files
  utils/           Formatting and WhatsApp helpers
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## WhatsApp Ordering

The site is designed around WhatsApp as the primary conversion path.

- Floating WhatsApp button opens a direct chat
- Product cards support quick WhatsApp ordering
- Product detail pages generate item-specific order messages
- Cart checkout generates a formatted order summary for Mercy
- Event and contact flows pre-fill inquiry details automatically

WhatsApp destination is configured in `src/utils/whatsapp.ts`.

## Branding Notes

- Primary brand: `Mercy's Kitchen`
- Service area: Makurdi, Benue State, Nigeria
- Main action color uses WhatsApp green for direct ordering touchpoints
- Core brand palette is defined in `src/styles/theme.css`

## Content and Data

Menu items, pricing, categories, and event packages live in:

- `src/data/menuData.ts`

To update offerings or prices, edit that file and restart the dev server if needed.

## Recommended Next Improvements

- Replace stock Unsplash images with real brand photography
- Add a real custom kitchen logo asset if available
- Add analytics for CTA clicks and order intent tracking
- Add automated tests for cart and WhatsApp message generation
- Add deployment config for your preferred hosting platform

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build

## Notes

- This project currently uses remote image URLs
- There is no backend; ordering is handled through WhatsApp links
- If you want a custom domain or deployment setup, Vercel or Netlify will work well
  
