Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});

$(".faq-item").click(function (event) {
  $(this).toggleClass("open");
});
// $(window).scroll(function () {
//   let header = $(".header");
//   let scrollPosition = $(window).scrollTop();
//   if (scrollPosition > 100) {
//     header.addClass("header-scroll");
//   } else {
//     header.removeClass("header-scroll");
//   }
// });

const forms = document.querySelectorAll("#main-form form");
if (forms.length) {
  forms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const res = await fetch(form.attributes.action.value, {
        method: form.attributes.method.value,
        body: formData,
      }).then((res) => res.json());
    });
  });
}
