

// Slick Carousel for clients image sliding initializer only
$(document).ready(function () {
    $('.clients-boxes').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        dots: false,
        arrows: false,
        pauseonhover: false,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4.7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 4.4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
// Slick Carousel for clients image sliding initializer only ends-----



// team swiper slider
const teamSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 25, // Space between slides
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      981: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
// team swiper slider ends ---------