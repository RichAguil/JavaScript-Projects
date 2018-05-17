var numSquares = 9;
var colors = generateRandomColors(9);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var mediumButton = document.querySelector("#mediumButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  mediumButton.classList.remove("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.backgroundColor = "#232323";
    }
  }
});

mediumButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  mediumButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.backgroundColor = "#232323";
    }
  }
})

hardButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  mediumButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 9;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.backgroundColor = "#232323";
    }
  }
})

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  resetButton.textContent = "New Colors!";
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.backgroundColor = "#232323";
    }
  };
  h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (this.style.backgroundColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    };
  });
};

function changeColors(color) {
  for (i = 0; i < squares.length; i ++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var randomIndex = Math.floor(Math.random()*colors.length);
  return colors[randomIndex];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};

function randomColor() {
  var red = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  return "rgb(" + red + ", " + blue + ", " + green + ")";
};
