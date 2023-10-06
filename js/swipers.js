const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  speed: 1500,
  parallax: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const navSwiper = new Swiper(".swipernav", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  slideToClickedSlide: true,
  slidesPerView: 5,
  speed: 1000,
});
swiper.controller.control = navSwiper;
navSwiper.controller.control = swiper;
