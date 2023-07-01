// let ramee = 'Danny';
// ramee.toLowerCase();
// console.log(ramee); // Danny - the string method didn't mutate the string
console.log("All Clear")
// let arr = [1, 3, 5, 7];
// arr.pop();
// console.log(arr)
// ramee = 'Anna'

// let id: number = 5;
// let firstname: string = 'danny';
// let hasDog: boolean = true;

// let unit: number; // Declare variable without assigning a value
// unit = 5;
// console.log(unit)

let x = 2;
let y = 1;

x = y;
y = 100;
// console.log(x)
let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
// console.log(point2.y)

// Declare a variable called person with a specific object type annotation
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
  };
  
  // Assign person to an object with all the necessary properties and value types
  person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  
  person.isProgrammer = false; // ERROR: should be a boolean
  
  
  person = {
    name: 'John',
    location: 'US',
    isProgrammer : false
  }; 
  