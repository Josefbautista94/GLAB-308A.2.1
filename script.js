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
        return result;
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
    static ROLES = ["Fighter", "Healer", "Wizzard", "Bum", "Merchant", "Elf"] // Adding static roles for part 4
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
    duel(otherAdventurer) {
        while (this.health > 50 && otherAdventurer.health > 50) { // While boths health is above 50 the duel is valid
            const myRoll = this.roll() // our adventurers roll
            const othersRoll = otherAdventurer.roll() // the others roll

            if (myRoll > othersRoll) { // if my roll is higher we get a hit in and deduct their health
                otherAdventurer.health -= 1;
                console.log(`${this.name} got a good hit in! ${otherAdventurer.name}'s current health is :${otherAdventurer.health}`)
            }
            else if (othersRoll > myRoll) { // if i get a bad roll
                this.health -= 1;
                console.log(`${otherAdventurer.name} got a good hit on ${this.name}, current health is ${this.health}`)
            }
            else {
                console.log(`It's a draw! No damage take this round.`)
            }

        }
        const winner = this.health > 50 ? this.name : otherAdventurer.name; // first adventurer to go below 50 looses
        console.log(`${winner} is the winnner of this duel!`)
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
        return this.adventurers.find((f) => f.name.toLowerCase() === name.toLowerCase()) // Using .find() to return the first adventurer with a matching name.
    }
}
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin")

console.log(robin)

//Part6

//Add a duel() method to Adventurer that: 

//Takes another adventurer as a parameter.✅

//Uses roll() for both.✅

//Subtracts health from the lower roller.✅

//Repeats until one drops to 50 health.✅

//Logs a winner.✅


//Part 7

//Create more adventurers and companions.
//Add fun roles like “Dragon” or “Elf.”
const bum = new AdventurerFactory("Bum");
const merchant = new AdventurerFactory("Merchant");
const elf = new AdventurerFactory("Elf");

const patrick = bum.generate("Patrick")
patrick.companion = new Companion("Hector", "Sewer Rat")

const franky = merchant.generate("Frank")
franky.companion = new Companion("Chopper", "Reindeer")

const saria = elf.generate("Saria")
saria.companion = new Companion("Link", "Wolf")

console.log(patrick)
console.log(franky)
console.log(saria)

//Add methods to simulate trading, exploring, or fighting.
patrick.duel(saria)

//Maybe even define classes for items or enemies.
class Enemy extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    dialouge() {
        let arrOfDialouge = ["wants to start some trouble!",
            "is looking for a fight!",
            "emerges from the shadows!",
            "snarls with fury!",
            "lets out a chilling scream!",
            "says, 'You dare challenge me?'",
            "growls, 'This is my territory!'",
            "bares its teeth menacingly!",
            "says, 'You're in the wrong forest, friend.'",
            "slams the ground with rage!",
            "glares with burning eyes!",
            "hisses, 'I'll make this quick.'",
            "growls low... something’s coming.",
            "says, 'I've been waiting for this.'",
            "laughs maniacally.",
            "says, 'Prepare to meet your doom!'",
            "roars into the sky!",
            "licks its lips, ready to pounce.",
            "shakes the earth with every step.",
            "chuckles, 'This will be fun.'"]
        let randomQuote = arrOfDialouge[Math.floor(Math.random() * arrOfDialouge.length)]
        console.log(`${this.name} the ${this.type} ${randomQuote}`)
    }
}

let henry = new Enemy("Henry", "Ghost");
henry.dialouge();

let marvin = new Enemy("Marvin", "Alien");
marvin.dialouge();
