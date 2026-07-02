/**
 * Product data for Ihsan Attire.
 * Swap `image` paths for new photos in /images (keep the same filenames
 * e.g. images/product-01.jpg to avoid touching this file).
 *
 * whatsappNumber: replace with the business WhatsApp number in international
 * format, no "+" or spaces (e.g. "15551234567"). Used to build the Buy Now link.
 */
const STORE_CONFIG = {
  whatsappNumber: "10000000000", // TODO: replace with real WhatsApp business number
  instagramHandle: "ihsan.attire", // TODO: replace with real Instagram handle
  contactEmail: "hello@ihsanattire.com", // TODO: replace with real business email
};

const PRODUCTS = [
  {
    id: "zaytoon",
    name: "Zaytoon Shawl",
    price: 78,
    image: "images/product-01.jpg",
    description:
      "An olive and gold woven shawl with a traditional calligraphic border, cut long enough to drape over the shoulder with ease. Rich, textured, and suited to evening wear or prayer.",
    featured: true,
  },
  {
    id: "noor",
    name: "Noor Wrap",
    price: 68,
    image: "images/product-02.jpg",
    description:
      "A soft ivory wrap in a fine paisley weave, styled here as a hooded scarf. Lightweight and breathable, it layers easily over a jacket or worn on its own.",
    featured: true,
  },
  {
    id: "amir",
    name: "Amir Scarf",
    price: 72,
    image: "images/product-03.jpg",
    description:
      "A navy and gold striped scarf with a relaxed, generous drape. Versatile enough to dress up a plain thobe or add warmth to an everyday outfit.",
    featured: true,
  },
];

/**
 * Builds a WhatsApp "click to chat" link pre-filled with the product name.
 * See STORE_CONFIG.whatsappNumber above to wire this up to a real number.
 */
function buildWhatsAppLink(productName) {
  const message = `Hi! I'd like to order the ${productName} from Ihsan Attire.`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
