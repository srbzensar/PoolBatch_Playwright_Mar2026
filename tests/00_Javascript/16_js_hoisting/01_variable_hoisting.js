// var x = 5;
// console.log(x); // Output: 5

// console.log(y); // Error: y is not defined

// var z;  // pulled the declaration of the variable to the top
console.log(z); // Output: undefined
var z = 20;

console.log(z); // Output: 20

// var a;
// console.log(a); // Output: undefined

console.log(b); // Output: undefined
var b;

// console.log(c);  // variable is hoisted but it is in temporal dead zone (TDZ)   
// let c = 15; // Error: Cannot access 'c' before initialization

let d;
console.log(d); // Output: undefined
