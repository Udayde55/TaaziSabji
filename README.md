# 🥬 TaaziSabzi — Taazi Sabzi Seedhe Farm Se

A production-ready **online vegetable marketplace** for Khutpipariya, Madhya Pradesh.
Buy farm-fresh vegetables (10-minute express / same-day delivery) **and** let farmers list their sabzi with their own price so we can visit & buy.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Drizzle ORM + PostgreSQL + Zustand + Framer Motion + Lucide icons**.

---

## ✨ Features

| Area | What's included |
|---|---|
| **Buy** | Product grid, categories (Leafy, Root, Seasonal, Organic, Exotic, Fruits), search + filters (price, organic, sort, radius), product detail with quantity selector, wholesale pricing, reviews & ratings, wishlist |
| **Sell (Kisaan)** | `/sell` — farmer lists vegetable, quantity, unit (crate/kg/quintal) & **own price** (e.g. 1 crate tamatar ₹300). Team visits location and pays on the spot. Tracked in dashboard |
| **Cart & Checkout** | Persistent cart (Zustand), coupons (`FRESH10`, `SABZI50`, `WELCOME`), delivery slots (10-min Express / Same Day / Next Day), distance-based delivery charge, payment options UPI / Card / Net Banking / Wallet / COD |
| **Orders** | Order history by phone, live status tracking (auto-refresh), reorder, WhatsApp support |
| **Users** | Buyer / Seller / Admin registration & login, profile management, seller verification note |
| **Seller Dashboard** | Inventory (add / price / stock ±), orders accept/reject + status updates, earnings, commission & payout, low-stock alerts, popular products & peak hour analytics, farmer sell-requests |
| **Admin Panel** | Everything in seller dashboard + platform summary |
| **India-ready** | Hindi 🇮🇳 + English toggle, mobile-first with bottom navigation, WhatsApp order links, Google Map of Khutpipariya, freshness/return policy |

Demo logins (auto-seeded):

| Role | Email | Password |
|---|---|---|
| Buyer | buyer@taazisabzi.in | buyer123 |
| Seller | seller@taazisabzi.in | seller123 |
| Admin | admin@taazisabzi.in | admin123 |

> Auth is a simple demo implementation (plain-text passwords). Swap in NextAuth / bcrypt before going fully live.

---

## 🚀 Run locally

```bash
# 1. install
npm install

# 2. environment
cp .env.example .env        # set DATABASE_URL to your Postgres

# 3. create tables
npx drizzle-kit push

# 4. start
npm run dev                 # http://localhost:3000
```

The database is **auto-seeded** with categories, 9 vegetables and demo users the first time any page loads.

---

## ▲ Deploy on Vercel (recommended, works from phone)

1. Push this folder to a **GitHub** repo (GitHub mobile app or [github.dev](https://github.dev) works from Android).
2. Create a free Postgres DB — **[Neon](https://neon.tech)** (recommended) or Vercel Postgres / Supabase — and copy the connection string.
3. Go to [vercel.com/new](https://vercel.com/new) → **Import** your repo.
4. In *Environment Variables* add:
   `DATABASE_URL` = your Postgres connection string
5. Click **Deploy**. ✅
6. Create tables once (from any terminal, or Neon SQL editor):
   ```bash
   DATABASE_URL="postgres://..." npx drizzle-kit push
   ```
   (No terminal? Run the SQL in `drizzle/` after `npx drizzle-kit generate`, or just open the site — tables must exist, so run push once.)

One-click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🌐 Deploy on Netlify

1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**.
3. Build command `npm run build`, publish directory `.next` (already in `netlify.toml`; Netlify auto-installs the Next.js runtime plugin).
4. *Site settings → Environment variables* → add `DATABASE_URL`.
5. Deploy. Run `npx drizzle-kit push` once against your DB.

---

## 🔐 Environment variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | ⬜ | (future) Razorpay client key for live UPI/card payments |
| `RAZORPAY_KEY_SECRET` | ⬜ | (future) Razorpay secret (server-only) |
| `WHATSAPP_API_TOKEN` | ⬜ | (future) WhatsApp Business API for automatic notifications |

Never commit `.env` — it is git-ignored. Use `.env.example` as a template.

---

## 📁 Project structure

```
src/
  app/
    page.tsx                 # Homepage
    products/                # Listing + [slug] detail
    cart/  checkout/         # Cart & checkout
    orders/  orders/[no]/    # Order history & live tracking
    login/  register/  profile/
    sell/                    # Farmer "sell your sabzi" form
    seller/  admin/          # Dashboards
    contact/                 # Contact + policies + map
    api/                     # products, orders, auth, sell-requests, reviews, contact, health
  components/
    layout/   (Header, BottomNav, Footer)
    product/  (ProductCard, ProductListing, ProductDetail)
    home/     (Hero, Categories, Offers, WhyUs, MapSection ...)
    dashboard/ ui/
  db/        schema.ts, seed.ts, index.ts
  lib/       data.ts (queries), i18n.ts (Hindi/English), status.ts
  store/     cart.ts, app.ts (Zustand)
public/images/               # Vegetable photos
```

## 📞 Contact

- **Email:** uday38506@gmail.com
- **Phone / WhatsApp:** +91 6266093569
- **Location:** Khutpipariya, Madhya Pradesh, India

Made with 💚 in MP.
