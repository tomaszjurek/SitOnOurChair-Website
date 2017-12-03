document.addEventListener("DOMContentLoaded", function(event) {
  // Zadanie 1
  var menuHover = document.querySelector("ol > li");
  menuHover.addEventListener("mouseover", function(event) {
    var subMenu = this.querySelector("ul");
    subMenu.style.display = "inline-block";
    subMenu.style.position = "absolute";
    subMenu.style.right = "26%";
    subMenu.style.top = "0";

    var paddingSub = document.querySelectorAll("ol > li > ul li");
    for (var i = 0; i < paddingSub.length; i++) {
      paddingSub[i].style.padding = "5px 10px";
      paddingSub[i].style.textTransform = "none";
    };
  });

  menuHover.addEventListener("mouseout", function(event) {
    var subMenu = this.querySelector("ul");
    subMenu.style.display = "none";
  });

  // Zadanie 2
  var images = document.querySelectorAll("section.articles img");

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function(event) {
      var opacityBox = this.querySelectorAll(".opacity-box");
      this.nextElementSibling.style.display = "none";
    });
  }

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseout", function(event) {
      var opacityBox = this.querySelectorAll(".opacity-box");
      this.nextElementSibling.style.display = "block";
    });
  }

  // Zadanie 3
  var nextButton = document.querySelector(".arrow-right");
  var prevButton = document.querySelector(".arrow-left");
  var slider = document.querySelector("div.relative-arrow");
  var slidePics = document.querySelectorAll(".slide");
  var index = 0;
  slidePics[index].classList.add("notVisible");
  var length = slidePics.length - 1;

  nextButton.addEventListener("click", function(event) {
    slidePics[index].classList.remove("notVisible");
    index++;
    if (index == slidePics.length) {
      index = 0
    }
    slidePics[index].classList.add("notVisible");
  });

  prevButton.addEventListener("click", function(event) {
    slidePics[index].classList.remove("notVisible");
    index--;
    if (index < 0) {
      index = slidePics.length - 1
    }
    slidePics[index].classList.add("notVisible");
  });

  // Zadanie 4
  var transportCheckbox = document.querySelector("#transport");
  var yourChair = document.querySelector(".panel_left h4");
  var chairColor = document.querySelector(".panel_left .color");
  var chairPattern = document.querySelector(".panel_left .pattern");
  var transport = document.querySelector(".panel_left .transport");

  var listChoice = document.querySelectorAll(".drop_down_list");
  var elementsChoice = document.querySelectorAll(".list_panel>li");

  var chairPrice = document.querySelector(".panel_right h4");
  var colorPrice = document.querySelector(".panel_right .color");
  var patternPrice = document.querySelector(".panel_right .pattern");
  var transportPrice = document.querySelector(".panel_right .transport");

  var labelsList = document.querySelectorAll(".list_label");
  var sumPrice = document.querySelector(".sum strong");
  var sum = 0;


  for (var i = 0; i < listChoice.length; i++) {
    listChoice[i].addEventListener("click", function(event) {
      this.querySelector(".list_panel").classList.toggle("visible");
    });
  }

  for (var i = 0; i < elementsChoice.length; i++) {
    if (i < 3) {
      elementsChoice[i].addEventListener("click", function(event) {
        yourChair.innerText = this.innerText;
        chairPrice.innerText = this.dataset.price;
        labelsList[0].innerText = this.innerText;
        sum = sum + parseFloat(this.dataset.price);
        sumPrice.innerText = sum + (" zł");
      });
    }
    if (i > 3 & i < 6) {
      elementsChoice[i].addEventListener("click", function(event) {
        chairColor.innerText = this.innerText;
        colorPrice.innerText = this.dataset.price;
        labelsList[1].innerText = this.innerText;
        sum = sum + parseFloat(this.dataset.price);
        sumPrice.innerText = sum + (" zł");
      });
    }
    if (i > 6) {
      elementsChoice[i].addEventListener("click", function(event) {
        chairPattern.innerText = this.innerText;
        patternPrice.innerText = this.dataset.price;
        labelsList[2].innerText = this.innerText;
        sum = sum + parseFloat(this.dataset.price);
        sumPrice.innerText = sum + (" zł");
      });
    }
  }

  transportCheckbox.addEventListener("click", function(event) {
    if (transportCheckbox.checked) {
      transport.innerText = "Transport";
      transportPrice.innerText = transportCheckbox.dataset.price;
      sum = sum + parseFloat(this.dataset.price);
      sumPrice.innerText = sum + (" zł");
    }
  });
});
