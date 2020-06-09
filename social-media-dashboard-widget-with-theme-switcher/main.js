let checkbox = document.getElementById("dark-theme-switch");
let body = document.querySelector("body");

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
