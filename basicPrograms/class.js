let age;
class Car {
  constructor(nameOfCar, yearOfManufactured) {
    this.nameOfCar = nameOfCar;
    this.yearOfManufactured = yearOfManufactured;
  }
  age(currentYear) {
    age = currentYear - this.yearOfManufactured;
    console.log(`Current Age of car is ${age}`);
  }
}
const objOfCar = new Car("Ford", 2012);
objOfCar.age(2022);
console.log(
  `Name of the car is ${objOfCar.nameOfCar} and it's manufactured in the year ${objOfCar.yearOfManufactured}, now it's age is about ${age} years`
);
