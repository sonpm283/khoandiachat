$(document).ready(function () {

  
  backTop.init()
});


const categorySlide = {
  init: function () {
    this.categorySlide();
  },
  categorySlide: function () {
    $(".category__slide-wrap").owlCarousel({
      items: 4,
      dots: false,
      loop: false,
      nav: false,
      autoplay: true,
      margin: 20,
      slideTransition: 'linear',
      autoplayTimeout: 5000,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  },
};


const backTop = {
  init: function() {
      this.backTop()
  },
  backTop: function() {
      $(window).scroll(function() {
          if($(window).scrollTop() > 150) {
              $('.back-top').addClass('active')
          }else {
              $('.back-top').removeClass('active')
          }
        });
  }
}

