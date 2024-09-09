document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".landing-page");
  let currentIndex = 0;
  let autoRotateDirection = 1; // 1 for right, -1 for left
  let autoRotateInterval;

  function rotateSlides(direction) {
    const currentSlide = sliders[currentIndex];
    const nextIndex = (currentIndex + direction + sliders.length) % sliders.length;
    const nextSlide = sliders[nextIndex];

    // Set all slides to opacity 0 and translate off-screen
    sliders.forEach((slide) => {
      slide.style.opacity = "0";
      slide.style.transform = "translateX(100%)";
    });

    // Move the current slide out of view (to the opposite direction) and hide it
    currentSlide.style.transform = `translateX(${direction > 0 ? '-100%' : '100%'})`;
    currentSlide.style.opacity = "0";

    // Prepare the next slide to come into view
    nextSlide.style.transition = "none"; // Disable transition for setup
    nextSlide.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`; // Start offscreen
    nextSlide.style.opacity = "0"; // Hide initially

    setTimeout(() => {
      // Move the next slide into view and show it
      nextSlide.style.transition = "transform 1s ease, opacity 1s ease";
      nextSlide.style.transform = "translateX(0)";
      nextSlide.style.opacity = "1";
    }, 50);

    currentIndex = nextIndex;
  }

  function autoRotateSlides() {
    rotateSlides(autoRotateDirection);
  }

  function toggleDirection() {
    autoRotateDirection *= -1; // Swap direction between left and right
  }

  // Add event listeners for buttons
  document.getElementById("prevSlide").addEventListener("click", function () {
    rotateSlides(-1);
  });

  document.getElementById("nextSlide").addEventListener("click", function () {
    rotateSlides(1);
  });

  // document.getElementById("toggleDirection").addEventListener("click", toggleDirection);

  // Set an interval for auto-rotating slides
  autoRotateInterval = setInterval(autoRotateSlides, 5000); // Rotate every 5 seconds
});
