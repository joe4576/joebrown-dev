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
  document.querySelectorAll(".current-job-tenure").forEach((tenure) => {
    const startDate = tenure?.dataset.startDate;

    if (!startDate) {
      return;
    }

    const { years, months } = calculateTimeSinceDateInclusive(startDate);

    const monthString = months === 1 ? `${months} month` : `${months} months`;
    const yearString = years === 1 ? `${years} year` : `${years} years`;

    const duration = years > 0 ? `${yearString} ${monthString}` : monthString;

    tenure.innerText = duration;
  });
};

const setupNavigation = () => {
  const toggle = document.querySelector(".service-navigation__toggle");
  const navigation = document.querySelector(".service-navigation__list");

  if (!toggle || !navigation) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.innerText = isOpen ? "Menu" : "Close";
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    toggle.setAttribute("aria-expanded", "false");
    toggle.innerText = "Menu";
    navigation.classList.remove("is-open");
  });
};

setCurrentJobTenure();
setupNavigation();
