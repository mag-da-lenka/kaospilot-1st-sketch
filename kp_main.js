// up BUTTON
const toTopButton = document.getElementById("up-button");
window.onscroll = () => { showBtnOnScrollDown() };
const showBtnOnScrollDown = () => {
  if (document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}
const goToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// mobile nav
const openMobileNav = () => {
  document.getElementById("mobileNav")
    .style.height = "100%";
  toTopButton.style.display = "none";
}
const closeMobileNav = () => {
  document.getElementById("mobileNav")
    .style.height = "0%";
}