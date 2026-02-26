/* ===== Banner ===== */
const bannerSwiper = new Swiper(".bannerSwiper", {
  loop: true,
  navigation: {
    nextEl: ".bannerSwiper .swiper-button-next",
    prevEl: ".bannerSwiper .swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
  autoHeight: true,   // 自動高度配合圖片
});

/* ===== Focus ===== */
const focusSwiper = new Swiper(".focusSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".focusSwiper .focus-next",
    prevEl: ".focusSwiper .focus-prev",
  },
  autoHeight: true,
});

/* ===== Shorts ===== */
const shortsSwiper = new Swiper(".shortsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  autoHeight: true,
});

/* ===== Doctor ===== */
const doctorSwiper = new Swiper(".doctorSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".doctorSwiper .doctor-next",
    prevEl: ".doctorSwiper .doctor-prev",
  },
  autoHeight: true,
});

/* ===== Case ===== */
const caseSwiper = new Swiper(".caseSwiper", {
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".caseSwiper .swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
});

/* ===== KOL ===== */
const kolSwiper = new Swiper(".kolSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: ".kolSwiper .kol-next",
    prevEl: ".kolSwiper .kol-prev",
  },
  autoHeight: true,
});

/* ===== Video Modal ===== */
const modal = document.getElementById("videoModal");
const iframe = modal.querySelector("iframe");
const closeBtn = modal.querySelector(".close-btn");

document.querySelectorAll(".video-card").forEach(card => {
  card.addEventListener("click", function () {
    const videoSrc = this.dataset.videoSrc;
    iframe.src = videoSrc + "?autoplay=1&rel=0";
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  iframe.src = "";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});
