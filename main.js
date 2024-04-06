$(document).ready(function () {
    $(window).scroll(function () {
      // Check if we're at the banner section
      var bannerHeight = $("#banner-section").outerHeight();
      if ($(this).scrollTop() > bannerHeight) {
        // Change navbar background to black
        $(".navbar").addClass("navbar-change");
      } else {
        // Revert back to original navbar style
        $(".navbar").removeClass("navbar-change");
      }
    });
  });
  
  var swiper = new Swiper(".card_slider", {
    loop: false,
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 40,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  