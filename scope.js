//scope

// {} = block

// {
//   let a = 10;
//   //   console.log(a);
// }
// console.log(a);

// A variable will be known within its block from the line where it is defined.

// {
//   // parent block
//   let a = 1;
//   {
//     // child block
//     a = 10;
//   }
//   console.log(a);
// }

// when a variable is called, first it is searched in its own block, if variable is not find in that block, then it will be searched in its parent block.

// {
//   let a = 1;
//   {
//     let a = 10;
//     console.log(a);
//   }
//   console.log(a);
// }
// A variable can not be defined twice(redefined) in same block. but we can redefine same variable in different block.
