//Part 1 Humble 

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
}
//Loop through and log each inventory item.
for (let i of adventurer.inventory) {
    console.log(i)
}

//Add a nested object for a companion (Leo) inside adventurer.
adventurer.companion = {
    name: "Leo",
    type: "Cat",
}
//Nest another object inside Leo: a flea named Frank with a couple of belongings.
adventurer.companion.companion = {
    name: "Frank",
    type: "flea",
    inventory: ["Small Hat", "Sunglasses"]
}

//Add a method, roll(mod = 0), that simulates a 1–20 die roll with an optional modifier.
adventurer.roll = function (mod = 0 ) {
    const result = Math.floor(Math.random() * 20 ) + 1 + mod;
    console.log( `${this.name} rolled a: ${result}`)
}

adventurer.roll()

//Part 2

// Create a Character class with: name, health (default 100), inventory (empty array)
//Add a roll() method.
class Character {
    constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    }
    roll(mod = 0 ) {
        const result = Math.floor(Math.random() * 20 ) + 1 + mod;
        console.log( `${this.name} rolled a: ${result}`)
    }
}
//Recreate Robin and companions using this class.

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin)
