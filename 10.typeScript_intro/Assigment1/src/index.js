//Boolean
var isDone = false;
isDone = true;
//Number
var price = 10;
//String
var first_name = "Masai";
var last_name = "School";
var full_name = "".concat(first_name, "_").concat(last_name);
// console.log(full_name)
// Array
var arr1 = [1, 2, 3, 4];
var arrayOfStrings = ["Masai", "School"];
arrayOfStrings.push("Bangalore");
// interface person { first_name: string; last_name: string; age:number}
var masai = {
    first_name: "Masai",
    last_name: "School",
    age: 3
};
// console.log('masai:', masai)
//Tuples - Arrays
//1. The number of elements in the tuple is fixed
//2. The types of elements are known in advance
var tuple;
tuple = ["Masai", "School", 3];
//Enums -> a group of named constants
var Colors;
(function (Colors) {
    Colors["RED"] = "Red";
    Colors["GREEN"] = "Green";
    Colors["BLUE"] = "Blue";
})(Colors || (Colors = {}));
var greenColor = Colors.GREEN;
// console.log('greenColor:', greenColor)
//Others
var u;
var n;
var a;
//Functions
// function sum(a:number,b:number):number{
//     return a + b;
// }
//Arrow function
var sum = function (a, b) {
    return a + b;
};
// console.log(sum(2,2))
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person1 = {
    first_name: "Masai",
    last_name: "School",
    age: 3
};
// printName(person1)
//Union
var output;
output = ["Masai", 3];
// let coder: (person & softwareDeveloper) = {
//     first_name: "Masai",
//     last_name: "School",
//     skills : "coding",
// }
