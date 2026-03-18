// const greetUser = function(userName) {
//     console.log("Hello, Good Morning " + userName);
// }
// // greetUser("Sachin");
// greetUser(); // Hello, Good Morning undefined

// -----------------------
const greetUser = function(userName = "Guest") {
    console.log("Hello, Good Morning " + userName);
}
// greetUser("Sachin");
greetUser(); // Hello, Good Morning Guest
