$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: true,
        dotsClass: 'slider_dots',
        prevArrow: '<button type="button" class="slick-promo slick-prev"><span></span><span></span></button>',
        nextArrow: '<button type="button" class="slick-promo slick-next"><span></span><span></span></button>',
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            }
          },

        ]
    });
    $('.orders').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        dotsClass: 'slider_dots',
        prevArrow: '<button type="button" class="arrow-order prev-order"><span></span><span></span><span></span></button>',
        nextArrow: '<button type="button" class="arrow-order next-order"><span></span><span></span><span></span></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: true
              }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
                centerMode: true,
                dots: false,
              }
            },
            

          ]
    });

  });

