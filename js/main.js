$(document).ready(function () {
  backTop.init()
  bannerSlider.init()
  menuMobile.init()
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

// menu mobile 
const menuMobile = {
  init: function() {
      this.menuMobile()
  },
  menuMobile: function() {
      const menuBtn = $(".js-menu-btn")
      const menuMobile = $(".menumobile")
      const menuOverlay = $(".menumobile-overlay")

      menuBtn.click(function() {
          menuMobile.addClass("active")
      })

      menuOverlay.click(function() {
          menuMobile.removeClass("active")
      })
  }
}

$(".js-search-form").click(function() {
  console.log("hi")
  $(".top-bar-form").toggleClass("active")
})