// When Do We Prefer Arrow Functions in JavaScript?

//  1. When You Want Lexical this (MOST IMPORTANT REASON)
// Arrow functions do NOT have their own this.
// They inherit this from the surrounding scope.
// ✅ Preferred: Callbacks, async code, event handlers inside classes
// e.g.
// class LoginPage {
//   constructor() {
//     this.pageName = "Login Page";
//   }

//   load() {
//     setTimeout(() => {
//       console.log(this.pageName);
//     }, 1000);
//   }
// }

// new LoginPage().load();
// // ✅ Output: Login Page

// ❌ Problem with normal function
// setTimeout(function () {
//   console.log(this.pageName);
// }, 1000);
// // ❌ undefined (or window/global)
// ✅ Use arrow functions when you need this from the outer context.


// ✅ 2. For Short, Inline, Functional Code
// Arrow functions shine when code is small and expressive.
// ✅ Preferred: array methods
// const players = ["Rohit", "Virat", "Gill"];

// const upper = players.map(p => p.toUpperCase());
// const filtered = players.filter(p => p.startsWith("V"));

// ✅ Cleaner
// ✅ Less boilerplate
// ✅ More readable

// ✅ 3. For Callbacks & Promise Chains
// ✅ Preferred

// fetch("/api/users")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// compared to 
// .then(function (res) {
//   return res.json();
// })

// ✅ Arrow functions reduce noise
// ✅ Ideal for async workflows (Playwright, API testing)

// ---------------------------------------------

// ✅ Prefer Arrow Functions When:

// Writing callbacks
// Using array methods
// Writing short utility functions
// Handling async code
// You want lexical this

// ❌ Avoid Arrow Functions When:

// Defining object methods
// Writing constructors
// Using this dynamically
// Working with prototypes
// Needing arguments

// ----------------------------------------------
// parameters vs arguments
// Parameters: The named variables in a function’s signature.

// In below example, a and b are parameters:
const add = (a, b) => a + b;
// ✅ Totally fine. Arrow functions can have parameters just like normal functions.

// arguments object: A special, array‑like object available inside regular (non‑arrow) functions 
// that contains all arguments passed to that function, regardless of named parameters.

function sum() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
}
sum(1, 2, 3);

// //  Arrow functions do NOT have their own arguments object.
// const sum = () => {
//   console.log(arguments); // ❌ ReferenceError in global/module scope
// };
// sum(1, 2, 3);
// // ✅ Use rest parameters instead   
// const sum1 = (...args) => {
//   console.log(args); // [ 1, 2, 3 ]
// }