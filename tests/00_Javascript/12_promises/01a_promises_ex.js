// Promises in JavaScript

// Basic Example of a Promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Test passed!");
//   } else {
//     reject("Test failed!");
//   }
// });

// myPromise
//   .then(result => console.log(result))   // if resolved
//   .catch(error => console.log(error));   // if rejected

// ----------------

// Output: Test passed! or Test failed! based on the success variable

// Explanation:
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to write cleaner asynchronous code by using .then() and .catch() methods.

// above is an example of a simple promise that either resolves or rejects based on the 'success' variable.
// resolve() is called when the operation is successful.
// reject() is called when it fails.
// .then() handles success, .catch() handles failure.

// Note: Change the value of 'success' to false to see the rejection case.

// --------------------------------

// // Additional Example with asynchronous operation
const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const dataFetched = true; // Simulate data fetching
    if (dataFetched) {
      resolve("Data fetched successfully!");
    } else {
      reject("Data fetching failed!");
    }
  }, 2000);
});

asyncPromise
  .then(result => console.log(result))   // if resolved
  .catch(error => console.log(error));   // if rejected

  // Output after 2 seconds: Data fetched successfully! or Data fetching failed!
// Explanation:
// This simulates an asynchronous operation using setTimeout.
// The promise resolves or rejects based on the simulated data fetching result.