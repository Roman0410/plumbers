Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".beforeAfter .card .slide").twentytwenty();
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

$(".filter-item").click(function (event) {
  let wiki = $(".wiki");
  $(this).closest(wiki).find(".filter-item").removeClass("open");
  $(this).addClass("open");
});
$(".filter-name").click(function (event) {
  let wiki = $(".wiki");
  $(this).closest(wiki).find(".filter-name").removeClass("open");
  $(this).addClass("open");
});

// let filter = $("[data-filter]");

// filter.on("click", function () {
//   let filterItem = $(this).data("filter");
//   let wiki = $(this).closest(".wiki");
//   $("[data-serv]").each(function () {
//     let serviceInfo = $(this).data("serv");

//     if (serviceInfo != filterItem) {
//       $(this).addClass("hide");
//     } else {
//       $(this).removeClass("hide");
//     }
//   });
// });
$("[data-filter]").on("click", function () {
  let filterItem = $(this).data("filter");
  let $filterContainer = $(this).closest(".wiki");
  $filterContainer.find("[data-serv]").each(function () {
    let serviceInfo = $(this).data("serv");

    if (serviceInfo !== filterItem) {
      $(this).addClass("hide");
    } else {
      $(this).removeClass("hide");
    }
  });
});

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
