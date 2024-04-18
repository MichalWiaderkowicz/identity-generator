const fs = require("fs");

const genders = ["M", "F"];
const maleNames = ["Adam", "Bartosz", "Cezary", "Dariusz", "Ernest"];
const femaleNames = ["Aleksandra", "Barbara", "Celina", "Danuta", "Ewa"];
const lastNames = ["Antczak", "Braszak", "Chyra", "Dudek", "Eward"];
const people = [];

const randChoice = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

for (let i = 0; i < 20; i++) {
  const person = {
    id: i + 1,
    gender: "",
    firstName: "",
    lastName: "",
    age: "",
  };

  person.gender = randChoice(genders);

  if (person.gender === "M") {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);

  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  people.push(person);
}

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile("people.json", jsonData, (err) => {
  if (err) {
    console.log("Something went wrong :(");
  } else {
    console.log("Everything is ok!!! Check people.json");
  }
});
