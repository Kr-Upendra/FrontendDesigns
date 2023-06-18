const navbar = document.querySelector(".navbar__navigation");
const menuIcon = document.querySelector(".navbar__menu--icon");
const menu = document.querySelector(".navbar__menu");
const menuClose = document.querySelector(".navbar__navigation--close");

const forgotBtn = document.querySelector(".formsection__cont--box-form__btn");
const emailAlert = document.querySelector(".formsection__cont--box-alert");
const emailAlertText = document.querySelector(
  ".formsection__cont--box-alert__para"
);
const emailField = document.querySelector(".email__field");

menu.addEventListener("click", () => {
  const visibility = navbar.getAttribute("data-hide");
  if (visibility === "false") openNavbar();
  else closeNavbar();
});

menuClose.addEventListener("click", () => {
  closeNavbar();
});

const openNavbar = () => {
  navbar.setAttribute("data-hide", true);
  menuIcon.setAttribute("src", "./images/close.png");
};

const closeNavbar = () => {
  navbar.setAttribute("data-hide", false);
  menuIcon.setAttribute("src", "./images/menu.png");
};

function emailValidation(field) {
  const value = field.value;
  if (value.length === 0) emailAlertText.innerHTML = "Please provide an email!";
  else if (!value.includes("@") || !value.includes("."))
    emailAlertText.innerHTML = "Please provide a valid email!";
}

forgotBtn.addEventListener("click", () => {
  emailValidation(emailField);
  const getValue = emailAlert.getAttribute("aria-hidden");
  if (getValue === "true") emailAlert.setAttribute("aria-hidden", "false");
  else {
    emailAlertText.innerHTML = "Email sent successfully!";
    emailAlert.style.backgroundColor = "rgba(0, 128, 0, 0.192)";
  }
});
