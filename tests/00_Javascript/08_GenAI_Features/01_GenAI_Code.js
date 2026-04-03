// // write a code to find factorial without using recursion
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5)); // Output: 120

// // write a code to find factorial without using recursion
// function factorial(n) {
//     // Input validation
//     if (!Number.isInteger(n) || n < 0) {
//         throw new Error("Factorial is defined for non-negative integers only");
//     }
//     if (n === 0 || n === 1) {
//         return 1; 
//     }
    
//     let result = 1; // Use BigInt to handle large numbers
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
// console.log(factorial(10)); // Output: 3628800

// write a code to find factorial of a number using recursion
function factorial(n) {
    // Input validation
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial is defined for non-negative integers only");
    }
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(10)); // Output: 3628800

