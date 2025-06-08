const mobileItems = document.querySelectorAll(".mobile-item");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const hero = document.getElementById("hero");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

mobileItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
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

window.addEventListener("load", () => {
  const isDesktop = navigator.maxTouchPoints === 0;

  if (isDesktop) {
    return;
  }

  // Overwrite hero height on mobile to prevent scroll
  // lag that occurs in some browsers when using svh
  // units inside a calculated property.
  requestAnimationFrame(() => {
    const heroHeight = hero.offsetHeight;

    document.documentElement.style.setProperty(
      "--hero-height",
      `${heroHeight}px`,
    );
  });
});

setCurrentJobTenure();
