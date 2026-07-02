/**
 * Product detail modal, shared by the Home (featured) and Shop grids.
 * Requires PRODUCTS + buildWhatsAppLink from products.js to be loaded first.
 */
function initProductModal() {
  const overlay = document.querySelector("[data-modal-overlay]");
  if (!overlay) return;

  const modal = overlay.querySelector(".modal");
  const imageEl = overlay.querySelector("[data-modal-image]");
  const nameEl = overlay.querySelector("[data-modal-name]");
  const priceEl = overlay.querySelector("[data-modal-price]");
  const descEl = overlay.querySelector("[data-modal-description]");
  const buyEl = overlay.querySelector("[data-modal-buy]");
  const closeButtons = overlay.querySelectorAll("[data-modal-close]");

  function openModal(product) {
    imageEl.src = product.image;
    imageEl.alt = product.name;
    nameEl.textContent = product.name;
    priceEl.textContent = `$${product.price}`;
    descEl.textContent = product.description;
    buyEl.href = buildWhatsAppLink(product.name);

    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modal.focus();
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-product-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const product = PRODUCTS.find((p) => p.id === card.dataset.productId);
      if (product) openModal(product);
    });
  });

  closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", initProductModal);
