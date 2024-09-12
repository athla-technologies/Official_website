


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

  // // Add event listeners for buttons
  // document.getElementById("prevSlide").addEventListener("click", function () {
  //   rotateSlides(-1);
  // });

  // document.getElementById("nextSlide").addEventListener("click", function () {
  //   rotateSlides(1);
  // });

  // document.getElementById("toggleDirection").addEventListener("click", toggleDirection);

  // Set an interval for auto-rotating slides
  autoRotateInterval = setInterval(autoRotateSlides, 5000); // Rotate every 5 seconds
});

(function() {
  // Initialize EmailJS with your public key
  emailjs.init("QKliDW084GHKvUZwR");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Show loading message
  const messageElem = document.getElementById("form-message");
  messageElem.style.display = "block";
  messageElem.innerHTML = "Sending message...";

  // Collect form data
  let name = document.getElementById('user_name').value;
  let email = document.getElementById('user_email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  // EmailJS service - send form data
  emailjs.send('service_59wu5fc', 'template_c5usi76', {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(function(response) {
    messageElem.innerHTML = "Message sent successfully!";
    
    // Hide the message after 4 seconds
    setTimeout(function() {
      messageElem.style.display = "none";
    }, 4000);

    document.getElementById('contact-form').reset(); // Reset form
    
  }, function(error) {
    messageElem.innerHTML = "Failed to send message. Please try again.";

    // Hide the message after 4 seconds
    setTimeout(function() {
      messageElem.style.display = "none";
    }, 4000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Function to swap elements in all service blocks
  function swapElements() {
      const serviceBlocks = document.querySelectorAll('.services');
      
      serviceBlocks.forEach(container => {
          const link = container.querySelector('.service-navigation');
          const image = container.querySelector('.img-web-design');
          
          // Check if the display width is between 375px and 992px
          if (window.matchMedia('(min-width: 320px) and (max-width: 992px)').matches) {
              // If <a> tag is before the <img>, swap them
              if (container.firstElementChild === link) {
                  container.insertBefore(image, link);
              }
          } else {
              // Revert to original order if the screen size is outside the specified range
              if (container.firstElementChild === image) {
                  container.insertBefore(link, image);
                  link.style.marginTop = '0px';
              }
          }
      });
  }

  // Call the swap function on load
  swapElements();

  // Add event listener to swap on window resize
  window.addEventListener('resize', swapElements);
});
