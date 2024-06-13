// Meue js
let ClikToShow = document.getElementById("menu");
let MobileMenu = document.getElementsByClassName("mob-menu")[0];
let Webapp = document.getElementsByClassName("webapp")[0];
let Cross = document.getElementById("cross");
console.log(MobileMenu);

ClikToShow.addEventListener("click", function () {
  console.log("iam cliked");
  MobileMenu.style.display = "block";
  Webapp.style.display = "none";
});

Cross.addEventListener("click", function () {
  MobileMenu.style.display = "none";
  Webapp.style.display = "block";
});
