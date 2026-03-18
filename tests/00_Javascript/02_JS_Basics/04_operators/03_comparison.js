let a = 10;
let b = "10";

console.log("a == b:", a == b);       // true (checks value only)
console.log("a === b:", a === b);     // false (strict equality check type and value) 
console.log("a != b:", a != b);       // false
console.log("a > 5:", a > 5);         // true
console.log("a <= 10:", a <= 10);     // true

// ---------------------------
let x = 5;
console.log(typeof x); // "number"

let y = null;
console.log(typeof y); // "object" (this is a known quirk in JavaScript)