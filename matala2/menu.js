const menuBtn = document.querySelector(".mobile-nav button");

function showMobileMenu() {
  const menu = document.querySelector(".mobile-nav ul");
  menu.style.transform = "translateX(0%)";
}

menuBtn.addEventListener("click", showMobileMenu);

function hideMobileMenu() {
  const menu = document.querySelector(".mobile-nav ul");
  menu.style.transform = "translateX(-120%)";
}

const closeMenuBtn = document.querySelector("#Btnmenu");
closeMenuBtn.addEventListener("click", hideMobileMenu);
