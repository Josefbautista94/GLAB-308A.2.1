//Part 1 

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
adventurer.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a: ${result}`)
}

// adventurer.roll()

//Part 2

// Create a Character class with: name, health (default 100), inventory (empty array)
//Add a roll() method.
class Character {
    static MAX_HEALTH = 100; // Adding static health for part 4

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a: ${result}`)
    }
}
//Recreate Robin and companions using this class.

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin)


//Part 3

//Make an Adventurer class extending Character, with:

//A role property

//Inventory starting with “bedroll” and “50 gold coins”

//A new method like scout()
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizzard"] // Adding static roles for part 4
    constructor(name, role) { // The constructor method runs automatically whenever you create a new Adventurer.
        //It takes two arguments: name (like "Robin") and role (like "Wizard").

        super(name) // calls the parent class constructor (Character) and passes in name
        // It sets up this.name, this.health = 100, and this.inventory = [] from the Character class.

        //Adventures have specialized roles
        if (!Adventurer.ROLES.map(r => r.toLowerCase()).includes(role.toLowerCase())) {
            // mapping through the array and putting both the input role and ROLES to toLowerCase to avoid case issues
            throw new Error(`This isn't an existing role: ${role}, It should be one of these : ${Adventurer.ROLES}`)
        }
        this.role = role;// Adds a new property role that's specific to Adventurer, like "Fighter" or "Healer".
        // Character didn’t have this — so this line customizes the subclass.

        // Every adventurer starts with a bed and 50 gold coins
        this.inventory.push("bedroll", "50 gold coins")
    }
    //Adventurers have the ability to scout ahead of them.
    scout() { // Declaring a new method called scout(), unique to Adventurer (not in the parent class)
        console.log(`${this.name} is scouting ahead...`)
        super.roll(); //Calls the roll() method from the Character class using super.

    }
}

//Create a Companion class as a specialized version of Character.
class Companion extends Character {
    constructor(name, type) {
        super(name) //  Calls parent constructor to set name, health, inventory

        this.type = type; // Adds a custom property unique to Companion
    }
    assist() {
        console.log(`${this.name} the ${this.type} is assisting their adventurer!`);
    }
}
// let robin = new Adventurer("Robin", "Healer");
// console.log(robin);

let leo = new Companion("Leo", "Kitty Cat")
leo.inventory = ["Cat Nip", "Toy Mouse", "Water bottle"]
console.log(leo);

//Part 4

//Add static MAX_HEALTH = 100 to Character. ✅

//Add static ROLES = ['Fighter', 'Healer', 'Wizard'] to Adventurer. ✅

//Add a check in the Adventurer constructor to make sure role is valid. ✅

//Completed all above!

//Part 5 

//Make an AdventurerFactory class with:

//A generate(name) method to create adventurers of a given role.

//Methods like findByIndex() and findByName().

class AdventurerFactory {
    constructor(role) { // constructor takes a single role like "Healer" or "Fighter".
        this.role = role;
        this.adventurers = []; //It saves that role and initializes an empty array
    }
    generate(name) { //  creates a new adventurer using the provided name and the role stored in the factory.
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer) //adds the new adventurer to the internal adventurers array.
        return newAdventurer;
    }
    findByIndex(index) {// Lets you find an adventurer by their index in the array.
        return this.adventurers[index]
    }
    findByName(name) {
        return this.adventurers.find((f) => f.name === name) // Using .find() to return the first adventurer with a matching name.
    }
}
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin")

console.log(robin)

//Part6

//Add a duel() method to Adventurer that:

//Takes another adventurer as a parameter.

//Uses roll() for both.

//Subtracts health from the lower roller.

//Repeats until one drops to 50 health.

//Logs a winner.

//Part 7

//Create more adventurers and companions.

//Add fun roles like “Dragon” or “Elf.”

//Add methods to simulate trading, exploring, or fighting.

//Maybe even define classes for items or enemies.

