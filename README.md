# Ibza's Bar and Lounge

> **Bar · Lounge · Rooftop Cocktails · Live Music**  
> Jl. Boulevard Raya No.5-6 Blok FX1, Kelapa Gading, Jakarta Utara 14240

Production website built with **React 18 + Vite**, deployed to **Vercel** automatically on every `git push`.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Folder Structure

```
ibzas/
├── index.html               # HTML entry point (meta tags, OG, favicon)
├── vite.config.js           # Vite + React plugin config
├── vercel.json              # SPA rewrites + asset cache headers
├── package.json
├── eslint.config.js
├── .gitignore
└── src/
    ├── main.jsx             # Entry: mounts <App />, imports global CSS
    ├── App.jsx              # Routing (page state + navigate) + layout composition
    │
    ├── constants/
    │   └── data.js          # DEFAULT_PRODUCTS, DEFAULT_EVENTS, ADMIN_PASS, color tokens
    │
    ├── utils/
    │   └── helpers.js       # formatIDR — shared formatting utilities
    │
    ├── styles/
    │   └── global.css       # All CSS: reset, tokens, components, keyframes
    │
    ├── hooks/
    │   ├── useCart.js       # cart[], addToCart, updateQty, clearCart, totals
    │   ├── useAdmin.js      # auth, login, modal, editForm, product/event CRUD
    │   └── useStorage.js    # Persistent load/save via window.storage
    │
    ├── components/          # Reusable UI — no page-level logic
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   ├── Toast.jsx
    │   ├── CartDrawer.jsx
    │   └── AdminModal.jsx
    │
    └── pages/               # One file per route
        ├── HomePage.jsx
        ├── ShopPage.jsx
        ├── EventsPage.jsx
        ├── LoginPage.jsx
        └── AdminPage.jsx
```

---

## Features

| Feature | Details |
|---|---|
| **Home** | Hero video, stats strip, about + ratings, events preview, shop CTA |
| **Shop** | Wine & Liquor catalog, category filters, cart, WhatsApp order |
| **Events** | Sorted upcoming events, date badge, reserve via WhatsApp |
| **Admin** | Password-protected dashboard; full CRUD for products and events |
| **Cart** | Slide-in drawer, quantity controls, direct WhatsApp checkout |
| **Persistence** | Products and events saved to `window.storage` across sessions |

---

## Admin Access

Navigate to **Admin** in the nav bar.

```
Password: ibzas2025
```

Change `ADMIN_PASS` in `src/constants/data.js` before going live.

---

## Deployment (Vercel — no SSH, no SCP)

The project is pre-configured for Vercel. Just:

```bash
git add .
git commit -m "your message"
git push origin main
# ✓ Vercel auto-deploys
```

`vercel.json` handles:
- **SPA rewrites** — all paths serve `index.html` so client-side routing works
- **Asset caching** — built JS/CSS files get `Cache-Control: immutable` (1 year)

---

## Customisation

### Update default products / events
Edit the arrays in `src/constants/data.js`. These are only used when `window.storage` is empty (first visit).

### Change colours
Edit the CSS variables at the top of `src/styles/global.css`:

```css
:root {
  --gold:    #c9a03c;
  --red:     #c9442a;
  --bg:      #070707;
  --surface: #0e0c08;
}
```

### Add a new page
1. Create `src/pages/MyPage.jsx` with a default export
2. Import it in `src/App.jsx`
3. Add a `{page === "mypage" && <MyPage />}` block
4. Add a nav link in `src/components/Nav.jsx`

---

## Contact

- **WhatsApp**: [087 789 163 072](https://wa.me/6287789163072)
- **Instagram**: [@ibzas_bar_kelapagading](https://www.instagram.com/ibzas_bar_kelapagading/)
- **Email**: ibzasbarandlounge@gmail.com
