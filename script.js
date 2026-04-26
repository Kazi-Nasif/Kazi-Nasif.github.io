const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  },
  { passive: true },
);
