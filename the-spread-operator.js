/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
// Copying an array
arr3 = [4, 5, 6];
arr4 = [...arr3]
console.log(arr4)
// Copying an object
let obj = {a:1, b:2, c:3};
let obj2 = {...obj, d:4};
console.log(obj2);
;// Copying only part of an array/object
let arr5 = [...arr1, {...obj}, ...arr3, "x", "y", "z"];
console.log(arr5);