const items = document.querySelectorAll(".item");

let index = 0;

items[index].classList.add("active");

setInterval(() => {

  // 현재 공지 아래로 내리기
  items[index].classList.remove("active");
  items[index].classList.add("out");

  // 다음 공지 계산
  const next = (index + 1) % items.length;

  // 애니메이션 끝난 뒤 다음 공지 표시
  setTimeout(() => {
    items[index].classList.remove("out");

    items[next].classList.add("active");

    index = next;
  }, 100);

}, 4000);

const closeBtn = document.querySelector(".notice_icon");
const panel = document.querySelector(".notice");

closeBtn.addEventListener("click", () => {
  panel.style.display = "none";
});

// ===============================
// 햄버거
const menuBtn = document.querySelector(".header_hamburger");
const sidebar = document.querySelector(".header_sidebar");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// ===============================
// 아코디언
// ===============================
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    // 다른 버튼의 active 제거
    accordionBtns.forEach((b) => {
      if (b !== btn) {
        b.classList.remove("active");
        b.nextElementSibling.style.maxHeight = null;
      }
    });

    // 현재 버튼 active 토글
    btn.classList.toggle("active");

    const content = btn.nextElementSibling;

    if (btn.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }

  });
});

// ================================================
// 슬라이더
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    1040: {
      slidesPerView: 4,
    },
  },
});

document.querySelector(".swiper-button-next").style.color = "#111";
document.querySelector(".swiper-button-prev").style.color = "#111";



// 버튼
const next = document.querySelector(".swiper-button-next");
const prev = document.querySelector(".swiper-button-prev");

// 색상
next.style.color = "#111";
prev.style.color = "#111";

// =================================
// 탭 메뉴 
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    panes.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.dataset.tab)
      .classList.add("active");
  });
});
// ===============================================================
// 푸터 아코디언
const footerItems = document.querySelectorAll(".footer_accordion-item");

footerItems.forEach((item) => {
  const header = item.querySelector(".footer_accordion-header");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    footerItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});


