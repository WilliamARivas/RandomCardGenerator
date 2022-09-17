/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.body.addEventListener("load", event => {
  let numberField = document.querySelector("h1");
  numberField.innerHTML = randomNumber();
});

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
function randomNumber() {
  let newNum = Math.floor(Math.random() * (myCardArray.length + 1));
  return myCardArray[newNum];
}
