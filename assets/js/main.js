(function ($) {
  "use strict";
  /* ======= Sticky Menu ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ====== Open Mobile Menu ====== */
  $(".menu-open-btn").click(function () {
    $(".main-menu").addClass("navBar open-menu");
  });
  $(".menu-close-btn").click(function () {
    $(".main-menu").removeClass("navBar open-menu");
  });
  $(".menu-link").click(function () {
    $(".main-menu").removeClass("navBar open-menu");
  });

  /* ===== Countdown ===== */
  var element = $("#countdown-gampang");
  var finish_d = new Date();
  finish_d.setDate(finish_d.getDate() + 50);
  element.CountdownGampang(
    {
      rampung: finish_d,
      theme: "flat-colors-very-wide",
    },
    function () {
      // callback that is fired when the countdown reaches 0.
      alert("Wes Wayahe Bro :)");
    }
  );

  /* ===== Team CounterUp ===== */
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* ====== Open & Close Header Search Form ====== */
  $(".header-search-icon").click(function () {
    $(".search-overlay").addClass("open-search-overlay");
  });
  $(".search-close-btn").click(function () {
    $(".search-overlay").removeClass("open-search-overlay");
  });

  /* ===== Darkne Main Slider ===== */
  $(".darkne-slider-wrap").slick({
    centerMode: true,
    infinite: true,
    speed: 3000,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    centerPadding: "190px",
    responsive: [
      {
        breakpoint: 1641,
        settings: {
          slidesToShow: 1,
          centerPadding: "170px",
        },
      },
      {
        breakpoint: 1551,
        settings: {
          slidesToShow: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1352,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  });
})(jQuery);
