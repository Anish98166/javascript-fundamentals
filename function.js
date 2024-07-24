// define function, call function, pass value to function, function with return, arrow function

//syntax of a function
// function () {}

// function sum() {
//   // define function
//   console.log("my name is ram");
// }
// // Function code will not execute unless we call it.we have to call function to execute the function code block.
// sum(); // function call

//call function
// let sum = function () {
//   console.log("i am a function");
// };

// console.log("a");
// console.log("b");
// sum();

//pass value to function
// let sum = function (y, z, a) {
//   // parameter
//   let add = a + y + z;
//   console.log(add);
// };

// sum(2, 4, 5); // arguments

// It is not necessary to have same number of arguments and parameters.
// default value

// let sum = function (a, b, c = 6) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// sum(1, 2);

//function with return

// let sum = function (a, b) {
//   let c = a + b;
//   return c;
// };

// let output = sum(6, 4);
// console.log(output);

// Function without return, call normally : sum()
//Function with return, call by store it in a variable like : let output = sum()

//arrow function
// let sum = (a, b) => {
//   console.log("i am ram");
//   console.log(a + b);
//   let c = a * b;
//   return c;
// };

// let output = sum(2, 4);
// console.log(output);

// let sum = (num1, num2) => {
//   // let num3 = num1 + num2;
//   return num1 + num2;
// };
// let add = sum(2, 4);
// console.log(add);

//Javascript is a dynamic language because a variable can be stored different value at a different time.
// let name = "ram";

// name = "harry";

// console.log(name);
// name = true;
// console.log(name);

//Javascript function can only return one value.
// let sum = () => {
//   return 1, 2, 3, 4;
// };
// let a = sum();
// console.log(a);

// console.log(new Date()); // gives date in iso data with current date and time
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());

//define
// function sum() {
//   console.log("i am function");
// }
// //call function
// sum();

//pass value to function
// function sum(a, b) {
//   console.log("i am function");
//   console.log(a * b);
// }
// sum(2, 6);

//  default value
// function sum(a, b, c, d = 10) {
//   console.log("i am function");
//   console.log(a + b + c + d);
// }
// sum(2, 6, 4, 1);
// function with return

// let sum = function (a, b) {
//   let c = a + b;
//   return c;
// };
// function without return => call normally: sum()
// function with return => call by storing it in a variable : let variable = sum()
// let add = sum(2, 6); //c
// console.log(add);

// arrow function
// let sum = (a, b) => {
//   let c = a + b;
//   return c;
// };
// let add = sum(2, 4);
// console.log(add);

// call back function
let fun1 = () => {};
let fun2 = () => {};

// A callback function is a function passed into another function as an argument.
//callback function example: map, reduce, filter
fun1(fun2);
// here callback function is fun2
// fun1 is higher order function

// Higher order function
// A function which takes argument as function. A function which return another function is called higher order function.
