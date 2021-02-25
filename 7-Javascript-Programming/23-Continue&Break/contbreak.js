/* eslint-disable */
let fuel = 766;
let distance = 0;

while(fuel > 0) {
    distance++;
    
    if(distance >= 100 && distance <= 200) {
        continue;
    }
    
    fuel--;

    if(distance == 500) {
        break;
    }
} 

console.log(distance, fuel);