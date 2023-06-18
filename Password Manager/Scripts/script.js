const menuBar = document.querySelector(".navbar__bars");
const navigation = document.querySelector(".navbar__right");

menuBar.addEventListener("click", () => {
  const showBtn = menuBar.getAttribute("data-true");
  if (showBtn === "false") {
    menuBar.setAttribute("data-true", "true");
    navigation.style.left = "0%";
  } else {
    menuBar.setAttribute("data-true", "false");
    navigation.style.left = "-100%";
  }
});

// Make btn to active

const links = document.querySelectorAll(".navbar__right--ul-list__link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
