// Text-4 Carousel start
let textCarousel = document.querySelector(".text-carousel");
if (textCarousel) {
  const swiper = new Swiper(textCarousel, {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    speed: 6000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: true,
  });
}
// Text-4 end

// services Carousel start
let servicesCarousel = document.querySelector(".services-carousel");
if (servicesCarousel) {
  const swiper = new Swiper(servicesCarousel, {
    loop: true,
    slidesPerView: 5,
    speed: 1000,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1800: {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".service-next",
      prevEl: ".service-prev",
    },
  });
}
// services Carousel end

// team Carousel start
let teamCarousel = document.querySelector(".team-carousel");
if (teamCarousel) {
  const swiper = new Swiper(teamCarousel, {
    loop: true,
    slidesPerView: 5,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".team-next",
      prevEl: ".team-prev",
    },
  });
}
// team Carousel end

// case studies Carousel start
let caseStudiesCarousel = document.querySelector(".case-studies-carousel");
if (caseStudiesCarousel) {
  const swiper = new Swiper(caseStudiesCarousel, {
    loop: true,
    slidesPerView: 5,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".case-studies-next",
      prevEl: ".case-studies-prev",
    },
  });
}
// case studies Carousel end

// testimonials info Carousel start
let testimonialsCarousel = document.querySelector(".testimonials-carousel");
if (testimonialsCarousel) {
  const swiper = new Swiper(testimonialsCarousel, {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 24,
    slidesPerView: 1,
    centeredSlides: false,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
  });
}
// testimonials info end

// blogs Carousel start
let blogsCarousel = document.querySelector(".blogs-carousel");
if (blogsCarousel) {
  const swiper = new Swiper(blogsCarousel, {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 24,
    slidesPerView: 1,
    centeredSlides: false,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 1,
        spaceBetween: 18,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: ".blogs-next",
      prevEl: ".blogs-prev",
    },
  });
}
// blogs end

// home banner start
let homeBannerCarousel = document.querySelector(".home-banner-carousel");
if (homeBannerCarousel) {
  const swiper = new Swiper(homeBannerCarousel, {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },

    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  });
}
// home banner end

// Related Products Carousel start
let relatedProducts = document.querySelector(".related-products-carousel");
if (relatedProducts) {
  const swiper = new Swiper(relatedProducts, {
    loop: true,
    slidesPerView: 4,
    speed: 1500,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
      },
    },
  });
}
// Related Products Carousel end
