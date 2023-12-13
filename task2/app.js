"use strict";

const btnEl = document.getElementById("btn");
const bodyEl = document.querySelector("body");

const randomNumber = () => {
   return Math.floor(Math.random() * 256)
};

// randomNumber();

const randomColor = () => {
   return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

btnEl.addEventListener("click",() => {
    bodyEl.style.backgroundColor = randomColor();
});