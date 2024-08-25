const mobileItems = document.querySelectorAll(".mobile-item");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

let isOpen = false;

const openMobileMenu = () => {
  mobileMenu.style.height = "100%";
  isOpen = true;
};

const closeMobileMenu = () => {
  mobileMenu.style.height = 0;
  isOpen = false;
};

hamburger.addEventListener("click", () => {
  isOpen ? closeMobileMenu() : openMobileMenu();
});

closeMenu.addEventListener("click", () => {
  closeMobileMenu();
});

mobileItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    mobileItems.forEach((item) => {
      item.parentElement.classList.remove("bg-blue-400");
    });

    event.target.parentElement.parentElement.classList.toggle("bg-blue-400");
    closeMobileMenu();
  });
});
