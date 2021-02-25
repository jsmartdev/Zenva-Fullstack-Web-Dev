/* eslint-disable */

let distance = 85;
let fuel = 35;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFunctional = true;

if (!isEngineFunctional || distance > 200) {
    console.log("Not gonna make it! Nice knowing you!");
}

else if (distanceCondition && fuel >= 100 || distance < 100 && fuel >= 25) {
    console.log("Congratulations! We're not gonna die in the vacuum of space!");
}
