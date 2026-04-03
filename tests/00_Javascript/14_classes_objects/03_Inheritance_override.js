class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

// -------------------------------

const animal = new Animal();
animal.speak(); // Output: Animal speaks

// -------------------------------

const pet = new Dog();
pet.speak(); // Output: Dog barks
// The speak method in Dog overrides the speak method in Animal

// =================================================    

// Challenge:
// Create a Vehicle class with a method move() that logs "Vehicle is moving".
// Create a Airplane class that extends Vehicle and overrides the move() method to log "Airplane is flying".

class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class Airplane extends Vehicle {
  move() {
    console.log("Airplane is flying");
  }
}
const myVehicle = new Vehicle();
myVehicle.move(); // Output: Vehicle is moving

const myAirplane = new Airplane();
myAirplane.move(); // Output: Airplane is flying
// The move method in Airplane overrides the move method in Vehicle
// =================================================
