// const number = [1, 2, 3, 4, 5];

// const doubleNumber = number.map((num) => num * 3);

// console.log("Orignal array", number);
// console.log("Double array", doubleNumber);

// Define an object representing a car
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
  // Method to display information about the car
  displayInfo: function () {
    return `This ${this.year} ${this.brand} ${this.model} is ${this.color}.`;
  },
};

// Access and display information about the car
console.log(car.displayInfo());
