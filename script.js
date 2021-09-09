let searchBtn = document.querySelector("#searchBtn");
let searchBarContainer = document.querySelector(".searchBarContainer");
let loginBtn = document.querySelector("#loginBtn");
let loginForm = document.querySelector(".loginFormContainer");
let formClose = document.querySelector("#formClose");
let menu = document.querySelector("#menuBar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vidBtn");

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBarContainer.classList.toggle("active");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBarContainer.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");

    let src = btn.getAttribute("data-src");
    document.querySelector("#videoSlider").src = src;
  });
});

var swiper = new Swiper(".reviewSlider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brandSlider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
