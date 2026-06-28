# Swapna Construction Website

Production-ready single-page website for **Swapna Construction** — a trusted excavation and infrastructure support contractor based in Hyderabad.

## Tech Stack

- **Next.js 15+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   ├── page.tsx         # Single-page assembly
│   └── globals.css      # Brand tokens & global styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # All page sections
│   └── ui/              # Reusable UI components
└── lib/
    ├── constants.ts     # All site content (easy to update)
    └── animations.ts    # Framer Motion variants
```

## Updating Content

All client content lives in `src/lib/constants.ts`. Update phone, email, and other details there when available.

## Replacing Placeholder Images

Use the `ImagePlaceholder` component pattern in Machinery and About sections. Replace with Next.js `<Image>` when client assets are provided:

```tsx
import Image from "next/image";

<Image
  src="/images/excavator.jpg"
  alt="Excavator fleet"
  fill
  className="object-cover"
/>
```

## Sections

1. Navbar (sticky, scroll-shrink, mobile menu)
2. Hero (CSS-built premium industrial design)
3. Statistics Strip
4. About Us (Mission & Vision)
5. Services (9 service blocks)
6. Work We Support
7. Machinery & Equipment
8. Why Choose Us
9. Safety & Quality
10. CTA
11. Contact
12. Footer

## Brand Colors

| Token | Hex |
|-------|-----|
| Industrial Yellow | `#F4B400` |
| Black | `#111111` |
| Dark Grey | `#1B1B1B` |
| Grey | `#2D2D2D` |
| White | `#FFFFFF` |

## Typography

- **Headings:** Oswald (uppercase, bold)
- **Body:** Inter
