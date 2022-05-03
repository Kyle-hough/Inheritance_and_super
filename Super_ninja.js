//parent
class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name} Health: ${this.health}, Speed: ${this.speed}, Strenth: ${this.strength}`);
        return this;
    } 
    drinkSake() {
        console.log(`${this.name} drank some Sake`)
        this.health += 10;
        return this;
    }
    
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
console.log("-------------------------------------------------------------------");
ninja1.drinkSake();
console.log(ninja1.health);
console.log("-------------------------------------------------------------------");

//child 
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom();
superSensei.showStats();
console.log("-------------------------------------------------------------------");