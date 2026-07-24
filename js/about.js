
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
// =====================
// box1 하위 탭만 제어
// =====================
function rankingTab(menuSelector, itemSelector, groups) {

  const buttons = document.querySelectorAll(menuSelector);
  const items = document.querySelectorAll(itemSelector);

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // ALL(실시간)
      if (btn.dataset.type === "all") {
        items.forEach(item => item.style.display = "flex");
        return;
      }

      items.forEach(item => item.style.display = "none");

      const range = groups[btn.id];

      if (!range) return;

      for (let i = range[0]; i <= range[1]; i++) {

        const target = document.querySelector(`#${itemSelector.replace(".", "")}${i}`);

        if (target) target.style.display = "flex";

      }

    });

  });

}
// ================
// 
const subTabs = document.querySelectorAll("#box1 .sub_tab");
const subBoxes = document.querySelectorAll("#box1 .nav_sub_box");

subTabs.forEach(tab => {
  tab.addEventListener("click", () => {

    subTabs.forEach(t => t.classList.remove("active"));
    subBoxes.forEach(box => box.classList.remove("active"));

    tab.classList.add("active");

    const num = tab.id.replace("sub", "");
    document.querySelector("#sub_box" + num).classList.add("active");

  });
});


const rankBtns = document.querySelectorAll("#sub_box1 .nav_sub_box_menu button");
const rankItems = document.querySelectorAll("#sub_box1 .main_content");

const rankGroups = {
  dayBtn: [1, 10],
  weekBtn: [11, 20],
  monthBtn: [21, 40]
};

rankBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    rankBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.id === "realBtn") {
      rankItems.forEach(item => item.style.display = "flex");
      return;
    }

    rankItems.forEach(item => item.style.display = "none");

    const [start, end] = rankGroups[btn.id];

    for (let i = start; i <= end; i++) {
      const item = document.querySelector("#item" + i);
      if (item) item.style.display = "flex";
    }

  });

});

const onlyBtns = document.querySelectorAll("#sub_box2 .nav_sub_box_menu button");
const onlyItems = document.querySelectorAll("#sub_box2 .main_content");

const onlyGroups = {
  onlyDayBtn: [1, 10],
  onlyWeekBtn: [11, 21],
  onlyMonthBtn: [22, 32]
};

onlyBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    onlyBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.id === "onlyRealBtn") {
      onlyItems.forEach(item => item.style.display = "flex");
      return;
    }

    onlyItems.forEach(item => item.style.display = "none");

    const [start, end] = onlyGroups[btn.id];

    for (let i = start; i <= end; i++) {

      const item = document.querySelector("#item_only" + i);

      if (item) item.style.display = "flex";

    }

  });

});
const bagBtns = document.querySelectorAll("#box2 .nav_sub_box_menu button");
const bagItems = document.querySelectorAll("#box2 .main_content");

const bagGroups = {
  bagDayBtn: [41, 47],
  bagWeekBtn: [48, 56],
  bagMonthBtn: [57, 68]
};

bagBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    bagBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.id === "bagRealBtn") {
      bagItems.forEach(item => item.style.display = "flex");
      return;
    }

    bagItems.forEach(item => item.style.display = "none");

    const [start, end] = bagGroups[btn.id];

    for (let i = start; i <= end; i++) {
      const item = document.querySelector("#item" + i);
      if (item) item.style.display = "flex";
    }

  });

});

const mainTabs = document.querySelectorAll(".tab");
const mainBoxes = document.querySelectorAll(".nav_tab_box");

mainTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    mainTabs.forEach(t => t.classList.remove("active"));
    mainBoxes.forEach(box => box.classList.remove("active"));

    tab.classList.add("active");

    const num = tab.id.replace("tab", "");
    const box = document.querySelector("#box" + num);

    box.classList.add("active");

    // 하위탭 초기화
    const subTabs = box.querySelectorAll(".sub_tab");
    const subBoxes = box.querySelectorAll(".nav_sub_box");

    subTabs.forEach(t => t.classList.remove("active"));
    subBoxes.forEach(b => b.classList.remove("active"));

    if (subTabs.length) subTabs[0].classList.add("active");
    if (subBoxes.length) subBoxes[0].classList.add("active");

  });

});

console.log(document.querySelectorAll("#bag_box1 .main_content").length);
console.log(document.querySelectorAll("#box2 .sub_tab").length);
console.log(document.querySelectorAll("#box2 .nav_sub_box").length);


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


