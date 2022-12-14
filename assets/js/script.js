/*  Swiper slider   */

new Swiper('.slides-3', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 3,
    }
  }
});

/* --------- Scroll top button ----------*/

const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  const togglescrollTop = function () {
    window.scrollY > 200 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
  window.addEventListener('load', togglescrollTop);
  document.addEventListener('scroll', togglescrollTop);
  scrollTop.addEventListener('click', window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }));
}

/* --------- Pricing Card ----------*/

$(document).ready(function () {
  var scrollCount = 0,
    latestScrollTop = 0,
    doc = $("#pricing"),
    top = 0;
  $(window).bind('scroll', function (e) {

    top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (latestScrollTop < top) {
      // Scroll down, increment value
      scrollCount += 1;
    } else {
      // Scroll up, decrement value
      scrollCount -= 1;
    }

    latestScrollTop = top;
    console.log(latestScrollTop);

    if (latestScrollTop > 1480 && latestScrollTop < 3680) {
      $(".service_col_three_main").addClass("service_fixed")
    }
    else {
      $(".service_col_three_main").removeClass("service_fixed")
    }
    // Pricing Table card 
    if (latestScrollTop > 2100 && latestScrollTop < 2570) {
      $("#compare_packages").addClass("compare_packages")
    }
    else {
      $("#compare_packages").removeClass("compare_packages")
    }

    // =================
    if (latestScrollTop > 2570) {
      $(".my-3").addClass("d-priceNone")
      $(".delivery").addClass("d-priceNone")
      $("#img_replace").addClass("table-img_replace")
    }
    else{
      $(".my-3").removeClass("d-priceNone")
      $(".delivery").removeClass("d-priceNone")
      $("#img_replace").removeClass("table-img_replace")
    }

  });
});