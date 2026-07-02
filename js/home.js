/**
 * Renders the featured shawl preview cards on the Home page.
 * Requires PRODUCTS from products.js to be loaded first.
 */
function renderFeaturedProducts() {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;

  const featured = PRODUCTS.filter((product) => product.featured);

  grid.innerHTML = featured
    .map(
      (product) => `
        <button class="product-card" type="button" data-product-id="${product.id}" aria-haspopup="dialog">
          <div class="product-card-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-card-body">
            <h3>${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <span class="product-card-cta">View details</span>
          </div>
        </button>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderFeaturedProducts);
