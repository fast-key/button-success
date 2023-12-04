const global = document.querySelector(".Global");

const navButtonList = document.querySelector(".nav-button-list");

const iconbuttonclose = document.querySelector(".icon-button-close");
const iconbuttonmenu = document.querySelector(".icon-button-menu");

document
  .querySelector(".icon-button-menu")
  .addEventListener("click", function () {
    iconbuttonmenu.classList.add("hidden");
    navButtonList.classList.add("Global");
    iconbuttonclose.classList.add("show");

    document
      .querySelector(".icon-button-close")
      .addEventListener("click", function () {
        iconbuttonmenu.classList.remove("hidden");
        navButtonList.classList.remove("Global");
        iconbuttonclose.classList.remove("show");
      });
  });

// document
//   .querySelector(".icon-button-close")
//   .addEventListener("click", function () {
//     iconbuttonclose.classList.remove("show");
//     navButtonList.classList.add("hidden");
//     iconbuttonmenu.classList.add("show");
//   });
