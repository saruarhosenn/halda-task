/* ===== Preloader ===== */
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/* ===== Scroll Back To Top ===== */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
    mybutton.style.right = "3rem";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.right = "-10rem";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ========== Darkne Inner Slider ========== */
var swiper = new Swiper(".darkne-slider-fade", {
  spaceBetween: 0,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ========== Hero Slider ========== */
var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  speed: 3000,
  grabCursor: false,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});


