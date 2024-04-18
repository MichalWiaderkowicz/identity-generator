const fs = require("fs");

const genders = ["M", "F"];
const maleNames = [Adam, Bartosz, Cezary, Dariusz, Ernest];
const femaleNames = [Aleksandra, Barbara, Celina, Danuta, Ewa];
const lastNames = [Antczak, Braszak, Chyra, Dudek, Eward];
const people = [];

const randChoice = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

for (let i = 0; i < 20; i++) {
  console.log("Loop iteration: " + i);
}
