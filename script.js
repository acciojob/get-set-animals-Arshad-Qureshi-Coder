//complete this code
class Animal {
	constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("a sound the animal makes.");
  }
}

class Dog extends Animal {
	bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
	 purr() {
    console.log("purr");
  }
}
animal.makeSound();
cat.makeSound(); // Output: The animal makes a sound.
cat.purr();
dog.makeSound(); // Output: The animal makes a sound.
dog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
