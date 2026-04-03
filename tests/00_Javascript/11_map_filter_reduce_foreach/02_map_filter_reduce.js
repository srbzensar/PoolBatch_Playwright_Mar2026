// These methods are useful for transforming and aggregating data in arrays.

// map() - transforms each element in an array and returns a new array
// filter() - filters elements based on a condition and returns a new array
// reduce() - reduces the array to a single value based on a reducer function

const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// challenge: factorial of each number
// const factorials = numbers.map(num => {
//     let fact = 1;
//     for (let i = 2; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// });

const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

const factorials = numbers.map(num => factorial(num));


console.log("Factorials:", factorials); // [1, 2, 6, 24, 120]

// Using filter to get marks greater than or equal to 60
const marks = [45, 67, 89, 34, 90, 56];
const passedMarks = marks.filter(mark => mark >= 60);
console.log("Passed Marks:", passedMarks); // [67, 89, 90]

// Using reduce to calculate the sum of numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sum); // 15

// challenge: from below array, create a new array which contains square of even numbers only
// const numbers = [1, 2, 3, 4, 5];
// expected output: [4, 16]


// ------- Extra explanation ----------------------
// Note: predicate function is a function that returns a boolean value (true or false)
const evenSquares = numbers
    .filter(num => num % 2 === 0) // filter even numbers
    .map(num => num * num);       // square the even numbers

console.log("Even Squares:", evenSquares); // [4, 16]
// here predicate is num => num % 2 === 0 
// -----------------------------