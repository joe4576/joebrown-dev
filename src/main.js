document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  const { documentElement } = document;

  documentElement.style.setProperty("--x", `${x}%`);
  documentElement.style.setProperty("--y", `${y}%`);
});
