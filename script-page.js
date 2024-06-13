let allow = true;
var header = document.getElementById("header");
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 190 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("fix");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("fix");
    }, 500);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

var menu = document.getElementById("menu");
var closeBtn = document.getElementById("close-btn");
var menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});

var slides = document.querySelectorAll(".slides");

slides.forEach((index) => {
  index.addEventListener("click", function () {
    if (index.classList.contains("down")) {
      index.classList.remove("down");
    } else {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("down");
      }
      index.classList.add("down");
    }
    console.log(index);
  });
});
