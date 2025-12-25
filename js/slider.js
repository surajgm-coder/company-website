// js/slider.js - Hero slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let autoPlay;

  const showSlide = (index) => {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  };

  const nextSlide = () => {
    showSlide((currentIndex + 1) % slides.length);
  };

  const startAutoPlay = () => {
    autoPlay = setInterval(nextSlide, 5500);
  };

  const stopAutoPlay = () => clearInterval(autoPlay);

  startAutoPlay();

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopAutoPlay();
      showSlide(i);
      startAutoPlay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);
});
