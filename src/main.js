const mobileItems = document.querySelectorAll(".mobile-item");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

let isOpen = false;

const openMobileMenu = () => {
  mobileMenu.style.display = "block";
  isOpen = true;
};

const closeMobileMenu = () => {
  mobileMenu.style.display = "none";
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

  let years = now.getFullYear() - inputDate.getFullYear();
  let months = now.getMonth() - inputDate.getMonth() + 1;

  if (now.getDate() < inputDate.getDate()) {
    months--;
  }

  if (months <= 0) {
    months += 12;
    years--;
  }

  return { years, months };
};

const setCurrentJobTenure = () => {
  const tenure = document.getElementById("current-job-tenure");
  const startDate = tenure?.dataset.startDate;

  if (!startDate) {
    return;
  }

  const { years, months } = calculateTimeSinceDateInclusive(startDate);

  const monthString = months === 1 ? `${months} mo` : `${months} mos`;
  const yearString = years === 1 ? `${years} yr` : `${years} yrs`;

  const duration = years > 0 ? `${yearString} ${monthString}` : monthString;

  tenure.textContent += `(${duration})`;
};

setCurrentJobTenure();
