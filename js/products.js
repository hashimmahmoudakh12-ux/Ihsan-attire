/**
 * Product data for Ihsan Attire.
 * Swap `image` paths for real photos in /images (keep the same filenames
 * e.g. images/shawl-01.jpg to avoid touching this file).
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
    id: "amara",
    name: "Amara Shawl",
    price: 68,
    image: "images/shawl-01.jpg",
    description:
      "A featherlight modal-blend shawl in deep burgundy, finished with a hand-rolled edge. Drapes softly for everyday wear and dresses up easily for evenings out.",
    featured: true,
  },
  {
    id: "layla",
    name: "Layla Wrap",
    price: 72,
    image: "images/shawl-02.jpg",
    description:
      "Woven in a rich plum tone with a subtle sheen, the Layla Wrap is generously sized for versatile styling - draped, pinned, or wrapped as a full-coverage layer.",
    featured: true,
  },
  {
    id: "noor",
    name: "Noor Shawl",
    price: 65,
    image: "images/shawl-03.jpg",
    description:
      "Ivory chiffon shawl with a fine gold-thread border inspired by traditional textile edging. Lightweight and breathable, ideal for warmer days.",
    featured: true,
  },
  {
    id: "zahra",
    name: "Zahra Pashmina",
    price: 85,
    image: "images/shawl-04.jpg",
    description:
      "A luxe pashmina-style shawl in warm gold, woven with a soft brushed finish for extra warmth. A statement piece for special occasions.",
    featured: true,
  },
  {
    id: "safiya",
    name: "Safiya Shawl",
    price: 70,
    image: "images/shawl-05.jpg",
    description:
      "Wine-toned crepe shawl with a matte, structured drape that holds its shape beautifully whether pinned or worn loose.",
    featured: false,
  },
  {
    id: "meera",
    name: "Meera Wrap",
    price: 60,
    image: "images/shawl-06.jpg",
    description:
      "Soft ivory jersey wrap designed for daily wear - breathable, easy to style, and gentle on sensitive skin.",
    featured: false,
  },
  {
    id: "yasmin",
    name: "Yasmin Shawl",
    price: 75,
    image: "images/shawl-07.jpg",
    description:
      "Charcoal-plum shawl with a fine gold trim along the edge, giving a refined contrast for both casual and formal looks.",
    featured: false,
  },
  {
    id: "aaliyah",
    name: "Aaliyah Pashmina",
    price: 90,
    image: "images/shawl-08.jpg",
    description:
      "Our signature ombre pashmina, transitioning from deep plum to warm gold. Woven from a premium wool-blend for a heavier, cold-weather drape.",
    featured: false,
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
