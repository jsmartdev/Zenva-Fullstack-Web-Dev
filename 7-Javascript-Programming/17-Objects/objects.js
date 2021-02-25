/* eslint-disable */
let player = {
    age: 99,
    name: "Bob",
    isActive: true,
    outfit: {
        color: "blue",
        size: "medium",
        cost: 100,
        isNew: true
    }
};

console.log(player);

player.health = 100;

console.log(player);

delete player.health;

console.log(player);

console.log(player.outfit.color);

player.outfit.size = "large";

console.log(player);
console.log(player.outfit.size);