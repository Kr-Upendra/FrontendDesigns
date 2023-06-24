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
