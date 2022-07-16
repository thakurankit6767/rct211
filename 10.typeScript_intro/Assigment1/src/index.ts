//Boolean
let isDone: boolean = false;
isDone = true;

//Number
let price: number = 10;

//String
let first_name: string = "Masai";
let last_name: string = "School";
let full_name: string = `${first_name}_${last_name}`;
// console.log(full_name)

// Array
let arr1: number[] = [1, 2, 3, 4];
let arrayOfStrings: string[] = ["Masai", "School"];
arrayOfStrings.push("Bangalore");
// console.log('arrayOfStrings:', arrayOfStrings)

//Objects
//Primitive typoes TypeScript -> number, string, boolean, null, undefined, symbol and bg=ig-int.

type person = { first_name: string; last_name: string; age: number };
// interface person { first_name: string; last_name: string; age:number}

const masai: person = {
  first_name: "Masai",
  last_name: "School",
  age: 3,
};
// console.log('masai:', masai)

//Tuples - Arrays
//1. The number of elements in the tuple is fixed
//2. The types of elements are known in advance

let tuple: [string, string, number];
tuple = ["Masai", "School", 3];

//Enums -> a group of named constants
enum Colors {
  RED = "Red", //0
  GREEN = "Green", //1
  BLUE = "Blue", //2
}

let greenColor = Colors.GREEN;
// console.log('greenColor:', greenColor)

//Others
let u: undefined;
let n: null;
let a: any;

//Functions
// function sum(a:number,b:number):number{
//     return a + b;
// }

//Arrow function
const sum = (a: number, b: number): number => {
  return a + b;
};
// console.log(sum(2,2))

const printName = ({ first_name, last_name, age }: person): void => {
  console.log(`${first_name}_${last_name}`);
};

const person1: person = {
  first_name: "Masai",
  last_name: "School",
  age: 3,
};
// printName(person1)

//Union
let output: (number | string)[];
output = ["Masai", 3];

//Intersection
type softwareDeveloper = {
  skills: string;
};
// let coder: (person & softwareDeveloper) = {
//     first_name: "Masai",
//     last_name: "School",
//     skills : "coding",
// }
