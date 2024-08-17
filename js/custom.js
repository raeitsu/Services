window.addEventListener("scroll", function () {
  const targets = document.querySelectorAll(".fade-list li:nth-child(-n+5)");

  targets.forEach((target) => {
    const elementTop = target.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;

    if (elementTop < triggerPoint) {
      target.classList.add("visible");
    } else {
      target.classList.remove("visible");
    }
  });
});
