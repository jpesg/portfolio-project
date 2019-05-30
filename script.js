var navBtn = document.querySelector(".nav__btn");
navBtn.addEventListener("click", showNav);

function showNav() {
  var navLinks = document.querySelector(".nav__links");
  console.log(navLinks);
  navLinks.classList.toggle("show__links");
}
