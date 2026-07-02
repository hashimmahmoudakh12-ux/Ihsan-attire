/**
 * Product detail modal, shared by the Home (featured) and Shop grids.
 * Requires PRODUCTS + buildWhatsAppLink from products.js to be loaded first.
 *
 * The open/close animation uses a FLIP transform: the modal jumps
 * (no transition) to match the clicked card's position/size, then a
 * transition back to its natural transform animates it "growing" into
 * place. Only transform + opacity are touched, so it stays smooth on
 * mobile with no layout thrashing.
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

  let activeSourceEl = null;
  let lastFocused = null;

  /** Transform that maps the modal's current box onto `rect`. */
  function transformToRect(rect) {
    const modalRect = modal.getBoundingClientRect();
    const scaleX = rect.width / modalRect.width;
    const scaleY = rect.height / modalRect.height;
    const dx = rect.left + rect.width / 2 - (modalRect.left + modalRect.width / 2);
    const dy = rect.top + rect.height / 2 - (modalRect.top + modalRect.height / 2);
    return `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
  }

  function openModal(product, sourceEl) {
    activeSourceEl = sourceEl;
    lastFocused = document.activeElement;

    imageEl.src = product.image;
    imageEl.alt = product.name;
    nameEl.textContent = product.name;
    priceEl.textContent = `$${product.price}`;
    descEl.textContent = product.description;
    buyEl.href = buildWhatsAppLink(product.name);

    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";

    const sourceRect = sourceEl.getBoundingClientRect();
    modal.style.transition = "none";
    modal.style.transform = transformToRect(sourceRect);
    modal.style.opacity = "0.4";

    // Double rAF: let the browser paint the jumped-to-source state
    // before re-enabling the transition and animating to identity.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modal.style.transition = "";
        modal.style.transform = "translate(0, 0) scale(1, 1)";
        modal.style.opacity = "1";
      });
    });

    modal.focus();
  }

  function closeModal() {
    if (activeSourceEl) {
      const sourceRect = activeSourceEl.getBoundingClientRect();
      modal.style.transition = "";
      modal.style.transform = transformToRect(sourceRect);
      modal.style.opacity = "0";
    } else {
      modal.style.opacity = "0";
    }

    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
    activeSourceEl = null;

    // Reset inline styles once the shrink/fade finishes so the next
    // open starts clean.
    window.setTimeout(() => {
      modal.style.transition = "none";
      modal.style.transform = "";
      modal.style.opacity = "";
      requestAnimationFrame(() => {
        modal.style.transition = "";
      });
    }, 400);
  }

  document.querySelectorAll("[data-product-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const product = PRODUCTS.find((p) => p.id === card.dataset.productId);
      if (product) openModal(product, card);
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
