$(".beforeAfter-slider").slick({
  slidesToShow: 1,
  draggable: false,
  swipeToSlide: false,
  swipe: false,
  prevArrow: $(".beforeAfter").find(".prev"),
  nextArrow: $(".beforeAfter").find(".next"),
  dots: true,
});
$(".services-slider").slick({
  slidesToShow: 4,
  prevArrow: $(".other-servise").find(".prev"),
  nextArrow: $(".other-servise").find(".next"),
  dots: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".gallery-slider").slick({
  slidesToShow: 4,
  prevArrow: $(".gallery").find(".prev"),
  nextArrow: $(".gallery").find(".next"),
  dots: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".partners-slider").slick({
  slidesToShow: 6,
  prevArrow: $(".partners").find(".prev"),
  nextArrow: $(".partners").find(".next"),
  dots: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// $(".swiper-wrapper").slick({
//   slidesToShow: 1,
//   arrows: false,
// });
