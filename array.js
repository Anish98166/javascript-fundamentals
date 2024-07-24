// let multi = [1, 2, 3, 4];
// let output = multi.map((value, index) => {
//   //map method always return
//   return value * 2;
// });
// console.log(output);

//Use map method if both input and output are arrays and both input and outputs length are same.

// let list = ["a", "b", "c"];
// let output = list.map((value, index) => {
//   return `${value}${index}`;
// });
// console.log(output);

// let list = [1, 3, 4, 5]; // [100,300,0,500]

// let output = list.map((value, index) => {
//   if (value % 2 === 0) {
//     return value * 0;
//   } else {
//     return value * 100;
//   }
// });
// console.log(output);

// let list = ["my", "name", "is"]; // ['MYN',"NAMEN","ISN"]

// let output = list.map((value, index) => {
//   return value.toUpperCase() + "N";
// });

// let list = ["r", "a", "m"]; // ["R","a","m"]

// let output = list.map((value, index) => {
//   if (index === 0) {
//     return value.toUpperCase();
//   } else {
//     return value;
//   }
// });
// console.log(output);

//Split => convert string into array
// Join => convert array into string

// console.log("anish".split(""));
// let out = ["a", "n", "i", "s", "h"].join("");
// console.log(out);
// console.log(typeof out);

// 'my name is anish adhikari' = ['my','name','is','anish','adhikari']

//for loop

// for (i = 2; i <= 10; i++) {
//   console.log(i);
// }
// i = 0 (initialization) this condition only runs at first

// i < 3 (condition) this condition runs until it meet its requirement

// i++ (after thought) this condition is executed everytime the loop body is executed

//For loop repeats until a specified condition evaluates to false.

//filter

// let arr = ["b", "c"];
// let output = arr.filter((value, index) => {
//   if (value === "a") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let list = [1, 2, 3, 4];
// // filter => output elements must be inputs element
// let output = list.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// [1, 3, 33, 89, 55, 98, 2, 4, 6, 90];

// ["ram", "hari", "john"]; //

//find
//it only return first match
// let arr = [1, 2, 3, 4];
// let output = arr.find((value, index) => {
//   return true;
// });
// console.log(output);

// let input = ["", "ram", "hari", 0, 1, 2, null, undefined, true, false];

// let output = input.filter(Boolean);
// console.log(output);
//[ 'ram', 'hari', 1, 2, true ]

//includes
//includes only gives true or false
// let list = [1, 2, 3, 4, 5];
// console.log(list.includes(5));

//Push => push value to last element of an array
// pop => remove the last element of the array
// unshift => push value to first element of an array
// shift => remove first element of an array

// let list = [1, 2, 3];
// list.push(5);
// list.pop();
// list.unshift("ram");
// list.shift();
// console.log(list);

// sort

// let list = ["d", "a", "y", "p", "e"];
// let output = list.sort(); // number sort does not work like this
// console.log(output);

//Number sort
// let list = [1, 10, 9, 3, 8, 5];
// let output = list.sort((a, b) => {
//   return a - b;
// });
// console.log(output);

// Reduce

// syntax: reduce(()=>{},0)

// let list = [1, 2, 3, 4];
// let output = list.reduce((previous, current) => {
//   return previous + current;
// }, 0);
// console.log(output);

//find the sum of all even elements of an array.
// let list = [1, 2, 3, 4];
// let output = list
//   .filter((value, index) => {
//     if (value % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   .reduce((pre, cur) => {
//     return pre + cur;
//   }, 0);
// console.log(output);
