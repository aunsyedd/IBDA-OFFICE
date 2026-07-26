# IBDA Office — Electronic Services (مكتب الإبداع للخدمات الإلكترونية)

Bilingual (Arabic / English) Next.js website for a Saudi transaction-processing (تعقيب) office,
built to match the navy-and-gold reference design.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- lucide-react icons
- Cairo font (Arabic + Latin) via Google Fonts

## Run
```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /ar
npm run build && npm start
```

## i18n
- Routes: `/ar/...` (default, RTL) and `/en/...` (LTR)
- `middleware.ts` redirects locale-less URLs to `/ar` — change `defaultLocale` in `lib/i18n.ts` to make English the default
- All copy lives in `lib/dictionaries.ts` (one `en` object, one `ar` object, same shape)
- The header language switcher swaps the locale while preserving the current path

## Pages
- `/{locale}` — hero, trust strip, services grid, info dock, perks
- `/{locale}/services` — all 10 services with descriptions + per-service WhatsApp CTA
- `/{locale}/track` — track request form → opens WhatsApp with a prefilled message
- `/{locale}/complaint` — complaint form → opens WhatsApp with a prefilled message
- `/{locale}/about` — about, "pay after completion" promise, why-us, contact cards

## Editing business details
Phone, WhatsApp number, and email are in one place: `lib/i18n.ts` (`site` object).
Working hours and address strings are in `lib/dictionaries.ts` (`info` section).
