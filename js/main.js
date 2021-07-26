$(document).ready(function () {
  backTop.init()
  bannerSlider.init()
});


const bannerSlider = {
  init: function () {
    this.bannerSlider();
  },
  bannerSlider: function () {
    $("#banner-slide").owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
    });
    $("#banner-slide").trigger("refresh.owl.carousel");
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

