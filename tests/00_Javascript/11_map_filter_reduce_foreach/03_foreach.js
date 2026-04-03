// .forEach() is used to iterate over each element in an array 
// and perform an action, but unlike map(), it does not return a new array. 

const numbers = [1, 2, 3, 4, 5];

// Using forEach to print each number
numbers.forEach(num => {
    console.log(num);
});

// challenge: print square of each number
numbers.forEach(num => {
    console.log(num * num);
});

// Using forEach to calculate the sum of numbers
let sum = 0;
numbers.forEach(num => {
    sum += num;
});
console.log("Sum of Numbers:", sum); // 15

// using forEach to print even numbers
console.log("Even Numbers:");
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

