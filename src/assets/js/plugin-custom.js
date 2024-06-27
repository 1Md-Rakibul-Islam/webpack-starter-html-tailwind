// Testimonial one Carousel start
let testimonialsCarousel = document.querySelector(".testimonials-carousel");
if (testimonialsCarousel) {
  const swiper = new Swiper(testimonialsCarousel, {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: false,
    grabCursor: true,
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
  });
}
// Testimonial one Carousel end

// Testimonial two Carousel start
let testimonialsTwoCarousel = document.querySelector(
  ".testimonials-two-carousel"
);
if (testimonialsTwoCarousel) {
  const swiper = new Swiper(testimonialsTwoCarousel, {
    loop: false,
    spaceBetween: 24,
    slidesPerView: 1,
    // speed: 100,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    //   reverseDirection: true,
    // },
    centeredSlides: false,
    grabCursor: true,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });
}
// Testimonial two Carousel end

// Courses Carousel start
let coursesCarousel = document.querySelector(".courses-carousel");
if (coursesCarousel) {
  const swiper = new Swiper(coursesCarousel, {
    loop: true,
    slidesPerView: 5,
    speed: 1000,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".name-next",
      prevEl: ".name-prev",
    },
  });
}
// Courses Carousel end

// Text-4 Carousel start
let textCarousel = document.querySelector(".text-carousel");
if (textCarousel) {
  const swiper = new Swiper(textCarousel, {
    loop: true,
    slidesPerView: "auto",
    speed: 5000,
    spaceBetween: 24,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: false,
  });
}
// Text-4 end
