/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const clubs = {};
const spades = {};
const diamonds = {};
const hearts = {};
const suits = [hearts, spades, diamonds, clubs];

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function SetupSuits() {
  SetupSuit(hearts, "♥", "-red-400");
  SetupSuit(diamonds, "♦", "-red-400");
  SetupSuit(spades, "♠", "-black");
  SetupSuit(clubs, "♣", "-black");
}
function SetupSuit(object, icon, color) {
  object.color = color;
  object.icon = icon;
  return object;
}

window.onload = function() {
  //write your code here
  SetupSuits();
  CreateCard();
  CreateCard();
  CreateCard();
};

function CreateCard() {
  const ranSuit = GetRandomFromArray(suits);
  const elementToAppend = document.createElement("div");
  let card = `<div class="w-[200px] h-[300px] bg-white flex flex-col space-inbetween items-center justify-between p-3 rounded-2xl m-5">
      <div class="flex justify-start w-full"><div class="text${
        ranSuit.color
      } text-7xl">${ranSuit.icon}</div></div>
      <h1 class="text-5xl text${ranSuit.color}">${GetRandomFromArray(
    values
  )}</h1>
      <div class="flex justify-end w-full" ><div class="rotate-180 text${
        ranSuit.color
      } text-7xl">${ranSuit.icon}</div></div>

      </div>`;
  elementToAppend.innerHTML = card;
  document.body.appendChild(elementToAppend);
}

function GetRandomFromArray(arr) {
  const length = arr.length;
  const ran = Math.ceil(Math.random() * length) - 1;
  return arr[ran];
}
