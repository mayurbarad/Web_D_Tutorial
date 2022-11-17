var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImgSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSource);

// SECOND IMAGE

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSource2);

// RESULT

if (randomNumber1 > randomNumber2) {
  document.querySelector(".hh1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".hh1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector(".hh1").innerHTML = "It's Draw";
}
