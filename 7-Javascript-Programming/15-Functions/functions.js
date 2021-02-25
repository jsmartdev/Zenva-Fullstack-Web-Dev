/* eslint-disable */
// 1 hour = 60 minutes

function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
}

hourToMinutes(10);
hourToMinutes(30);

let daysToHours = function(days) {
    let result = days * 24;
    console.log(result);
};

daysToHours(2);
daysToHours(5);

let balance = 100;
let stock = 50;
let price = 5;
let quantity = 60;

if(stock >= quantity) {
    stock -= quantity;
    balance += quantity * price;
    console.log("Stock is " + stock);
    console.log("Balance is " + balance);
}

else {
    console.log("Not enough stock.")
}





