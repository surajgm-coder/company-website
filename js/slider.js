// js/slider.js - Hero slider with auto-play, dots, and golden flash effect

document.addEventListener("DOMContentLoaded", () => {
  // Find ALL heroes on the page (in case multiple, but usually one)
  const heroes = document.querySelectorAll(".hero");

  heroes.forEach(hero => {
    const slider = hero.querySelector(".slider");
    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const dotsContainer = hero.querySelector(".slider-dots");
    if (!dotsContainer || slides.length === 0) return;

    // Create dots if not enough (safety)
    while (dotsContainer.children.length < slides.length) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll(".dot");

    let currentIndex = 0;
    let autoPlayInterval;

    // Golden flash overlay (created once per hero)
    let flashOverlay = hero.querySelector(".golden-flash");
    if (!flashOverlay) {
      flashOverlay = document.createElement("div");
      flashOverlay.classList.add("golden-flash");
      hero.appendChild(flashOverlay);
    }

    const showSlide = (index) => {
      // Hide all slides
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === index);
      });

      // Update dots
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === index);
      });

      // Trigger golden flash
      flashOverlay.classList.remove("flash");
      void flashOverlay.offsetWidth; // Force reflow
      flashOverlay.classList.add("flash");

      currentIndex = index;
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    // Auto-play
    const startAutoPlay = () => {
      autoPlayInterval = setInterval(nextSlide, 5500); // 5.5 seconds
    };

    const stopAutoPlay = () => clearInterval(autoPlayInterval);

    // Initial show
    showSlide(0);
    startAutoPlay();

    // Dot clicks
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        stopAutoPlay();
        showSlide(i);
        startAutoPlay();
      });
    });

    // Pause on hover
    hero.addEventListener("mouseenter", stopAutoPlay);
    hero.addEventListener("mouseleave", startAutoPlay);
  });
});
