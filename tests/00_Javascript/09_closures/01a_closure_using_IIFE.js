// * A closure is a function that "remembers" the variables from its outer scope 
// even after that outer function has finished executing.
// ** Think of it like a backpack — the inner function carries the 
// outer function’s variables with it wherever it goes.

function outer() {
    // private variable
    let count = 0;

    // function to increment the count
    function increment() {
        console.log("Increment function called");
        count++;
        console.log("Count is: " + count);
    }
    return increment; // returning the inner function
}

const counter = outer(); // counter now holds the reference to the inner function
// outer() has finished execution, but the inner function still has access to the count variable
console.log(typeof counter); // function

counter(); // Count is: 1
counter(); // Count is: 2
counter(); // Count is: 3

// console.log(count); // undefined error as count is not in global scope
// console.log(counter.count); // undefined as count is not a property of counter function

console.log("==================================================");

const counter_again = (() => {
    let count = 0;
    return () => {
        count++;
        console.log("Count is: " + count);
    };
})(); // IIFE returning the inner function and assigning it to counter_again

counter_again(); // Count is: 1
counter_again(); // Count is: 2 
counter_again(); // Count is: 3

