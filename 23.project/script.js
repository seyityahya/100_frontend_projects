const toggleButton = document.getElementById("menu-toggle");
const sayfa = document.getElementById("menu-navbar");
const closeButton = document.getElementById("close-button");
const logo = (document = document.getElementById("logo"));

toggleButton.addEventListener("click", function () {
  sayfa.style.display = "flex";
  logo.style.display = "none";
});

closeButton.addEventListener("click", function () {
  sayfa.style.display = "none";
  logo.style.display = "flex";
});
