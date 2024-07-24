//primitive or non-primitive datatype
//primitive => call by value
//string,number,boolean,undefined,null
// let name = 'ram'
// console.log(typeof "ram");
// console.log(typeof 1);

//non-primitive => call by reference
// array,object, function, date
// let sum = () => {};
// console.log(typeof [1]);
// console.log(typeof { name: "ram" });
// sum();
// console.log(typeof sum);
// console.log(typeof new Date());

// In javascript, a primitive datatype is data that is not an object and has no methods or properties.

//set => filter duplicate data
// let list = [1, 3, 5, 7, 9, 1, 5, 9, 10, 11, 1];
// let output = [...new Set(list)];
// console.log(output);
