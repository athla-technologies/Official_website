document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.landing-page');
    let currentIndex = 0;

    function rotate() {
        const currentSlide = sliders[currentIndex];
        const nextIndex = (currentIndex + 1) % sliders.length;
        const nextSlide = sliders[nextIndex];

        // Set all slides to opacity 0 and translate off-screen
        sliders.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)';
        });

        // Move the current slide out of view (to the left) and hide it
        currentSlide.style.transform = 'translateX(-100%)';
        currentSlide.style.opacity = '0';

        // Prepare the next slide to come into view
        nextSlide.style.transition = 'none'; // Disable transition for setup
        nextSlide.style.transform = 'translateX(100%)'; // Start offscreen to the right
        nextSlide.style.opacity = '0'; // Hide initially

        setTimeout(() => {
            // Move the next slide into view and show it
            nextSlide.style.transition = 'transform 1s ease, opacity 1s ease';
            nextSlide.style.transform = 'translateX(0)';
            nextSlide.style.opacity = '1';
        }, 50);

        // Update the current index
        currentIndex = nextIndex;
    }

    setInterval(rotate, 4000); // Rotate every 4 seconds
});
