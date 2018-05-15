var playerOne = document.querySelector(".playerOne");
var playerTwo = document.querySelector(".playerTwo");
var reset = document.querySelector(".reset");
var input = document.querySelector("input");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var goalDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var goal = 5;
var gameOver = false;
var isWinner = false;

input.addEventListener("change", function() {
  goalDisplay.textContent = input.value;
  goal = Number(input.value);
});

playerOne.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === goal) {
      gameOver = true;
      p1Display.classList.add("winner");
      isWinner = true;
    };
  };
  p1Display.textContent = p1Score;
});

playerTwo.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === goal) {
      gameOver = true;
      p2Display.classList.add("winner");
      isWinner = true;
    };
  };
  p2Display.textContent = p2Score;
});

reset.addEventListener("click", function() {
  gameOver = false;
  p1Score = 0;
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
});
