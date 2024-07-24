// let { name, country, ...rest } = {
//   // rest operator always placed at last
//   name: "ram",
//   age: 50,
//   location: "ktm",
//   country: "nepal",
// };
// console.log(rest);

// let sum = (a, ...b) => {
//   console.log(a);
//   console.log(b);
// };
// sum(1, 2, 3, 4, 5, 6);

// let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Spread operator
//spread operator are wrapper opener.
// let list = [1, 2, 3];
// let list1 = ["ram", "harry", "john"];

// let output = [10, 11, 9, "n9solution", ...list1, "ant", ...list];
// console.log(output);

let info = {
  name: "ram",
  age: 50,
  location: "ktm",
};
// let info1 = { ...info };
// console.log(info1);

let info2 = { ...info, country: "nepal", isMarried: true };
console.log(info2);
