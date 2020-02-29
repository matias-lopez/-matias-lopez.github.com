// let header = document.querySelector("header");
// let headerHeight = header.clientHeight;
// let nav = header.firstElementChild;

// const asd = window.addEventListener("scroll", () => {
//   if (window.pageYOffset > headerHeight) {
//     if (nav.classList.contains("nav1")) {
//       nav.classList.toggle("nav1");
//       nav.classList.toggle("nav2");
//     }
//   } else {
//     if (nav.classList.contains("nav2")) {
//       nav.classList.toggle("nav2");
//       nav.classList.toggle("nav1");
//     }
//   }
// });
// $(function() {
//   alert();
// });

//Vars

let nav = document.getElementById("nav");
let menu = document.getElementById("links");
let openElement = document.getElementById("open");
let btns = document.getElementsByClassName("btn-header");
let closed = true;

function menus() {
  let scrolled = window.pageYOffset;
  if (scrolled <= 500) {
    nav.classList.remove("nav2");
    nav.classList.add("nav1");
    nav.style.transition = "1s";
    menu.style.top = "80px";
    openElement.style.color = "white";
  } else {
    nav.classList.remove("nav1");
    nav.classList.add("nav2");
    nav.style.transition = "1s";
    menu.style.top = "100px";
    openElement.style.color = "black";
  }
}

function open() {
  if (closed) {
    menu.style.width = "70vw";
    closed = false;
  } else {
    menu.style.width = "0%";
    menu.overflow = "hidden";
    closed = true;
  }
}

window.addEventListener("load", () => {
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
  menus();
});

window.addEventListener("scroll", () => {
  menus();
});

window.addEventListener("resize", () => {
  if (screen.width >= 700) {
    closed = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
    // console.log("resize");
  }
});

window.addEventListener("click", e => {
  // console.log(e.target);
  if (closed === false) {
    let span = document.querySelector("span");
    if (e.target !== span && e.target !== openElement) {
      menu.style.width = "0%";
      menu.style.overflow = "hidden";
      closed = true;
    }
  }
});

openElement.addEventListener("click", () => {
  open();
});

$(document).ready(() => {
  $(".filter").click(() => {
    let value = $(event.currentTarget).attr("data-name");
    // console.log(value);
    if (value === "all") {
      $(".cont-work").show("2000");
    } else {
      $(".cont-work")
        .not("." + value)
        .hide("2000");
      $(".cont-work")
        .filter("." + value)
        .show("2000");
    }

    $("ul .filter").click(() => {
      $(event.currentTarget).addClass("active");
      $(event.currentTarget)
        .siblings()
        .removeClass("active");
    });
  });
});

// $(document).ready(function() {
//   $(".filter").click(function() {
//     let value = $(this).attr("data-name");
//     console.log(value);
//   });
// });
