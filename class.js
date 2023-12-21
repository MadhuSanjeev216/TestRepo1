class Car {
    constructor(nameOfCar, yearOfManufactured){
        this.nameOfCar = nameOfCar;
        this.yearOfManufactured = yearOfManufactured;
    }
    age(currentYear) {
        let age = currentYear  - yearOfManufactured;
        console.log(age);
    }
}
const objOfCar = new Car('Ford', 2012);
console.log(objOfCar);
//ObjOfCar.age(2022)