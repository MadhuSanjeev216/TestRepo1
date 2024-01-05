
class Car {
    constructor(nameOfCar, yearOfManufactured){
        this.nameOfCar = nameOfCar;
        this.yearOfManufactured = yearOfManufactured;
    }
    age(currentYear) {
        let age = currentYear  - this.yearOfManufactured;
        console.log(`Current Age of car is ${age}`);
    }
}
const objOfCar = new Car('Ford', 2012);
objOfCar.age(2022)
