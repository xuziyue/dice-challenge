// document.addEventListener("DOMContentLoaded", function(event) {
//   alert("DOM fully loaded and parsed");
// });
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);


var result;

if (randomNumber1 > randomNumber2) {
  result = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  result = "Player 2 Wins!";
} else {
  result = "Draw!";
}

document.querySelector("h1").textContent = result;