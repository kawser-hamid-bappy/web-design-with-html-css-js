const navBar = document.querySelector(".nav-bar");
const close = document.querySelector(".nav-close");
const mobile = document.querySelector(".mobile-menu");

mobile.addEventListener("click", () => {
  navBar.classList.add("show");
});
close.addEventListener("click", () => {
  navBar.classList.remove("show");
});

var swiper = new Swiper(".hero-slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".project-slides", {
  effect: "coverflow",
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
