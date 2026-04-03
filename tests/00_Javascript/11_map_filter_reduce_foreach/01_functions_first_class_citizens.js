// can be assigned to a variable   (function expression syntax)
const foo = function() {
    console.log("Function foo called");
};

foo();

// ----------------------------------
// passed as an argument to other functions

function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = "Sachin";
    console.log(callback(name));
}

processUserInput(greet);
// ------------------------------------

// challenge: Create a function calculate that takes two numbers 
// and a callback function. The callback should define the 
// operation (add, subtract, multiply, divide).

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        return "Division by zero error";
    }
    return a / b;
}  

console.log(calculate(10, 5, add));        // 15
console.log(calculate(10, 5, subtract));    // 5
console.log(calculate(10, 5, multiply));    // 50
console.log(calculate(10, 5, divide));      // 2    