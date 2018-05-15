function changeColor() {
  if (isPurple == false) {
    document.body.style.background = "purple";
    isPurple = true;
  } else {
    document.body.style.background = "white";
    isPurple = false;
  };
};

var isPurple = false;
var button = document.querySelector("button");
button.addEventListener("click", changeColor);
