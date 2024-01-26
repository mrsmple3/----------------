document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu");
  var navMenu = document.querySelector(".header_content .nav");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("nav_active");
  });
});
