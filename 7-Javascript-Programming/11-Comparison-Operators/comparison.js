/* eslint-disable */

let item = "engine";

if(item != "engine") {
    console.log("not engine!")
} 

else {
    console.log("engine!");
}

let score = 45;

if(score >= 60) {
    console.log("Pass!")
}

else if (score <= 20) {
    console.log("Academic Probation!")
}

else {
    console.log("Not Pass!")
} 

let isEngine = item == "engine";

console.log(isEngine);

// Challenge

let balance = 45;
let itemPrice = 100;

if (balance > itemPrice) {
    let change = balance - itemPrice;
    console.log("Thank you for shopping! " + "$" + change + " is your change.");
}

else if(balance < itemPrice) {
    let more = itemPrice - balance;
    console.log("You will need $" + more + " more to buy this item.");
}

else {
    console.log("Thank you for shopping! $0.00 is your change")
}
