document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector(".carousel-arrow.prev");
  const nextBtn = document.querySelector(".carousel-arrow.next");

  let currentSlide = 0;
  const slideCount = slides.length;

  // Function to update carousel position
  function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Next Slide function
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  }

  // Event Listener
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);


  // dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  // const login = document.querySelector(".login-btn");
  // const registration = document.querySelector(".signup-btn");
  // function log() {
  // alert("Login successful");
  // }
  // function regis() {
  //   alert("Registration Page is Coming Soon");
  // }
  // login.addEventListener("click", log);
  // registration.addEventListener("click", regis);
});




// Auth Modal Functionality

