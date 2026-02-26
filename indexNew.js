const bannerSwiper = new Swiper(".bannerSwiper", {
  loop: true,
  navigation: {
    nextEl: ".bannerSwiper .swiper-button-next",
    prevEl: ".bannerSwiper .swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
	/* ===== Focus ===== */
const focusSwiper = new Swiper(".focusSwiper", {
  
    slidesPerView: "auto",
  spaceBetween: 30,        // 片之間間距
  loop: false,             // 可改 true 看是否需要無限循環
  navigation: {
    nextEl: ".focusSwiper .focus-next",
    prevEl: ".focusSwiper .focus-prev",
  },
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
});

//影片
// 取得元素
const modal = document.getElementById("videoModal");
const iframe = modal.querySelector("iframe");
const closeBtn = modal.querySelector(".close-btn");


// 點擊縮圖 → 開啟影片
document.querySelectorAll(".video-card").forEach(card => {

  card.addEventListener("click", function () {

    const videoSrc = this.dataset.videoSrc;

    iframe.src = videoSrc + "?autoplay=1&rel=0";

    modal.style.display = "flex";

  });

});


// 關閉按鈕
closeBtn.addEventListener("click", function () {

  modal.style.display = "none";

  iframe.src = "";

});


// 點擊背景關閉
modal.addEventListener("click", function (e) {

  if (e.target === modal) {

    modal.style.display = "none";

    iframe.src = "";

  }

});