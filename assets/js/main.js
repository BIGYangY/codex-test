(function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const yearEl = document.getElementById("year");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.classList.toggle("show");
    });
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
