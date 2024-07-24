//Object

//Array is a collection of values whereas object is a collection of key value pairs. key value pairs are called properties.

// let list = {
//   name: "harry",
//   age: 20,
//   location: "ktm",
// };

//get value
// console.log(list.location);
// console.log(list.name);
// console.log(list);
//change value
// list.name = "ram";
// console.log(list);

//delete value

// delete list.location;
// console.log(list);

// let info = {
//   name: "ram",
//   favFruits: ["apple", "mango", "orange"],
//   location: {
//     city: "kathmandu",
//     province: "Bagmati",
//     country: "Nepal",
//   },
//   age: () => {
//     console.log("i am function");
//   },
// };

// info.age();
// console.log(info);
// console.log(info.name);
// console.log(info.favFruits[2]);
// console.log(info.location.country);

// let products = [
//   { name: "mobile", price: 15000 },
//   { name: "battrey", price: 5000 },
//   { name: "radio", price: 3000 },
// ];
//[15000, 5000, 3000] => map
//[23000] => reduce

// let output = products
//   .map((value, index) => {
//     return value.price;
//   })
//   .reduce((pre, cur) => {
//     return pre + cur;
//   }, 0);
// console.log(output);

//sort
// let list = [5, 10, 7, 3, 1, 11];
// let output = list.sort((a, b) => {
//   return a - b;
// });
// console.log(output);

//String sort by length
// let list = ["ram", "anish", "nsolution", "harry", "zebra"];
// let output = list.sort((y, z) => {
//   return y.length - z.length;
// });
// console.log(output);

//Convert object into array

// let info = {
//   name: "ram",
//   age: 50,
//   location: "ktm",
// };

// let output = Object.keys(info);
// let output = Object.values(info);
// let output = Object.entries(info); //[ [ 'name', 'ram' ], [ 'age', 50 ], [ 'location', 'ktm' ] ]
// console.log(output);

//Convert array into object
// let info = [
//   ["name", "ram"],
//   ["age", 50],
//   ["location", "ktm"],
// ];

// let output = Object.fromEntries(info);
// console.log(output);
