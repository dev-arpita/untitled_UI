const menu = document.getElementById("menu-btn");
const exitMenu = document.getElementById("exit-btn");
const sidebar = document.getElementById("sidebar");
menu.addEventListener("click", () => {
  sidebar.style = console.log("clicked");
});

exitMenu.addEventListener("click", () => {
  console.log("clicked");
});
console.log(sidebar);
