const reveal = () => {
  const sections = document.querySelectorAll(".reveal");
  for (let i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = sections[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

const night = document.querySelector(".toggle__theme");
const body = document.querySelector("body");
const headings = document.querySelectorAll(".section__heading--h2");

const onNightMode = () => {
  body.style.backgroundColor = "#242323";
  headings.forEach((heading) => {
    heading.style.color = "var(--primary)";
    night.style.backgroundColor = "var(--primary)";
  });
};

const onLightMode = () => {
  body.style.backgroundColor = "var(--primary)";
  headings.forEach((heading) => {
    heading.style.color = "var(--dark)";
    night.style.backgroundColor = "var(--dark)";
  });
};

night.addEventListener("click", () => {
  const isNight = night.getAttribute("data-isnight");
  if (isNight === "true") {
    night.setAttribute("data-isnight", "false");
    onLightMode();
  } else {
    night.setAttribute("data-isnight", "true");
    onNightMode();
  }
});
