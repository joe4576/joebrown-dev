const mobileItems = document.querySelectorAll(".mobile-item");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

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

const setHeroHeight = () => {
  // SVH units are not supported in all browsers, i.e. Firefox.
  // SVH also causes lag on scroll in some in-app browsers, so
  // set the hero height manually instead.
  const remMultiplier = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  const headerHeightPx =
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--header-height")
      .split("rem")[0] * remMultiplier;

  const windowHeight = window.innerHeight;

  document.documentElement.style.setProperty(
    "--hero-height",
    `${windowHeight - headerHeightPx}px`,
  );
};

const isDesktop = navigator.maxTouchPoints === 0;
let initialWidth = window.innerWidth;

window.addEventListener("resize", ({ target }) => {
  const newWidth = target.innerWidth;

  // Allow resize on desktop, or if the width has changed
  // on mobile (changing screen orientation).
  if (isDesktop || newWidth !== initialWidth) {
    initialWidth = newWidth;
    setHeroHeight();
  }
});

window.addEventListener("DOMContentLoaded", setHeroHeight);

setCurrentJobTenure();
