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

  tenure.innerText = `(${duration})`;
};

setCurrentJobTenure();
