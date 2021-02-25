/* eslint-disable */
let player = {
    health: 100,
    fun: 0,
    eatApple: function() {
        this.health += 25;
        console.log("You ate an apple! Your health is now " + this.health + "!")
        },
    play: function() {
        this.fun += 50;
        console.log("You played some videogames! Your fun is now "+ this.fun + "!")
    },
    eatCandy: function() {
        this.fun += 25;
        this.health -= 25;
        console.log("You ate some candy! Your fun is now " + this.fun + "! Your health is now " + this.health + "!")
    }   
};

player.eatApple();
player.play();
player.eatCandy();
player.eatCandy();