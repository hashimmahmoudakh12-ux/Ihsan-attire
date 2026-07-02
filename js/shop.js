/**
 * Renders the full shawl grid on the Shop page.
 * Requires PRODUCTS from products.js to be loaded first.
 */
function renderShopGrid() {
  const grid = document.querySelector("[data-shop-grid]");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(
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
  ).join("");
}

document.addEventListener("DOMContentLoaded", renderShopGrid);
