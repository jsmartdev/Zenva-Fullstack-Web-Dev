/* eslint-disable */

let database = ["turtle", "cat", "dog", "bird"];

console.log(database);
console.log(database.length);

let animal = database[0];
console.log(animal);

database[0] = "lizard";
console.log(database);

let newAnimal = database[0];
console.log(newAnimal);

let lastAnimal = database[database.length - 1]
console.log(lastAnimal);

database.push("fish");
console.log(database);

database.pop();
console.log(database);
