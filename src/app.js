/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numberField = document.querySelector("h1");
let suitField = document.querySelectorAll("img");
console.log(suitField);

window.onload = function() {
  numberField.innerHTML = randomNumber();
  let myNewSuit = randomSuit();
  for (let each of suitField) {
    each.src = myNewSuit;
  }
};

let myCardArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let suitOfCard = {
  spades:
    "http://cdn.shopify.com/s/files/1/1788/4029/articles/Card_spade.svg_9cf87a27-6d61-47f3-8431-80f32611e2cc_1024x1024.png?v=1565209205",
  clubs:
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Card_club.svg/1200px-Card_club.svg.png",
  hearts:
    "https://cdn.pixabay.com/photo/2012/04/13/20/38/hearts-33564_1280.png",
  diamonds:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png"
};

function randomNumber() {
  let newNum = Math.floor(Math.random() * myCardArray.length);
  return myCardArray[newNum];
}
function randomSuit() {
  let newSuit = Math.floor(Math.random() * Object.keys(suitOfCard).length);
  let keys = Object.keys(suitOfCard);
  if (newSuit === 0 || newSuit === 1) {
    numberField.style.color = "black";
  } else {
    numberField.style.color = "red";
  }
  console.log(suitOfCard[keys[newSuit]]);
  return suitOfCard[keys[newSuit]];
}
console.log(randomNumber());
