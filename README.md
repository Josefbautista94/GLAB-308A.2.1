# 🗡️ An Object-Oriented Adventure

Welcome to the Object-Oriented Adventure — a mini RPG-style simulation built in JavaScript using key programming concepts like classes, inheritance, and factories.

This lab was created as part of a guided assignment and extended with creative features including monsters, companions, dialogue, and battles.

---

## 📜 Overview

This project demonstrates object-oriented programming in JavaScript by creating a cast of adventurers, companions, and enemies — each with unique behaviors and roles.

---

##  Features

###  Part 1: Object Basics
- Created an `adventurer` object named **Robin** with health and an inventory.
- Added a **nested companion** named **Leo**, who also has a companion: **Frank the Flea**.
- Implemented a `roll()` method to simulate a 1–20 dice roll with an optional modifier.

###  Part 2: Character Class
- Built a `Character` class with:
  - `name`, `health`, and `inventory` properties.
  - A `roll()` method that returns a random number between 1–20.

###  Part 3: Adventurer & Companion Classes
- `Adventurer` class extends `Character`, adding:
  - A `role` (e.g., Fighter, Healer, Elf)
  - Starting items (`bedroll`, `50 gold coins`)
  - A `scout()` method
  - A `duel()` method to battle another adventurer until one drops below 50 health
- `Companion` class extends `Character` and includes a `type` and an `assist()` method.

###  Part 4: Static Properties
- Used `static MAX_HEALTH` in `Character` (set to 100).
- Used `static ROLES` in `Adventurer` for role validation.

###  Part 5: Adventurer Factory
- Built an `AdventurerFactory` to:
  - Generate multiple adventurers with the same role
  - Search adventurers by name or index

###  Part 6: Duel System
- Added a battle system (`duel()`) where adventurers:
  - Roll dice each round
  - Lose health if they roll lower
  - Fight until one hits 50 health
  - Log a winner

###  Part 7: Creative Expansion
- Created multiple adventurers with unique roles (Bum, Merchant, Elf)
- Each adventurer has a unique companion (Reindeer, Sewer Rat, etc.)
- Built an `Enemy` class with a `dialogue()` method
- Random quotes are pulled from an array to add character personality

