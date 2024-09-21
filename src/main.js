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
  item.addEventListener("click", () => {
    closeMobileMenu();
  });
});

const calculateTimeSinceDateInclusive = (date) => {
  const now = new Date();
  const inputDate = new Date(date);

  const years = now.getFullYear() - inputDate.getFullYear();
  const months = now.getMonth() - inputDate.getMonth() + 1;

  return { years, months };
};

const setCurrentJobTenure = () => {
  const tenure = document.getElementById("current-job-tenure");
  const startDate = tenure?.dataset.startDate;

  if (!startDate) {
    return;
  }

  const { years, months } = calculateTimeSinceDateInclusive(startDate);

  const duration =
    years === 0 ? `${months} mos` : `${years} yrs, ${months} mos`;

  tenure.textContent += `(${duration})`;
};

setCurrentJobTenure();
