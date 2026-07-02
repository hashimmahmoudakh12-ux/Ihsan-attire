# Ihsan Attire

A 3-page boutique shawl business website. Plain HTML/CSS/JS, no build step,
no dependencies - just open `index.html` in a browser or serve the folder
with any static server.

## Pages

- `index.html` - Home: hero banner, brand intro, featured shawls, CTA to Shop
- `shop.html` - Shop: full product grid, each card opens a detail modal
- `about.html` - About & Contact: brand story, WhatsApp/Instagram/email links, contact form

## Structure

```
css/style.css     Global styles (palette, layout, components, responsive rules)
js/products.js    Product data + store config (WhatsApp number, Instagram, email)
js/home.js        Renders the featured shawls on the Home page
js/shop.js        Renders the full grid on the Shop page
js/modal.js        Shared product detail modal logic
js/main.js         Shared nav toggle + footer year
images/           Product and section images
```

## Swapping in real photos

Product images are placeholders generated for preview only. To use real
photos, replace the files in `images/` with the same filenames
(`shawl-01.jpg` through `shawl-08.jpg`, `hero-banner.jpg`, `about-portrait.jpg`).
No code changes needed as long as filenames match `js/products.js`.

To add/remove/edit products, edit the `PRODUCTS` array in `js/products.js`.

## Wiring up the "Buy Now" flow

Buy Now currently opens a WhatsApp chat pre-filled with the shawl name, via
`buildWhatsAppLink()` in `js/products.js`. To activate it:

1. Open `js/products.js` and set `STORE_CONFIG.whatsappNumber` to your real
   WhatsApp Business number (international format, digits only, e.g. `15551234567`).
2. Update `STORE_CONFIG.instagramHandle` and `STORE_CONFIG.contactEmail` to match.
3. The footer, `about.html` contact links, and the `wa.me` links in both HTML
   files use the same placeholder number (`10000000000`) - update those too
   (search for `10000000000` and `ihsan.attire`).

If you'd rather use Instagram DMs or Stripe Payment Links instead of
WhatsApp, swap the `href` in `js/modal.js` (`buyEl.href = ...`) for an
Instagram profile URL or a per-product Stripe link stored on each product.

## Contact form

The form on `about.html` is currently a placeholder (shows an alert on
submit). Point its `<form>` at a real backend (e.g. Formspree, Netlify
Forms, or your own endpoint) when ready.
