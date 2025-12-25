// js/main.js - Shared: Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nk-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
    });
  }

  document.querySelectorAll(".nk-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      if (menuToggle) menuToggle.textContent = "☰";
    });
  });
});
