var randomNumber1 = Math.floor(Math.random() * 6) + 1; //creates a random num 1-6
var randomDiceImg = "dice" + randomNumber1 + ".png"; //creates a string for dice imgs
var randomImageSource = "images/" + randomDiceImg; // images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //creates a random num 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//which player wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
