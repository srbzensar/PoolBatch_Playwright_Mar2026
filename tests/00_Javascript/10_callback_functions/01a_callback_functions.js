
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sunil", sayBye);
// Output:
// Hello, Sunil
// Goodbye!

// sayBye is passed as a callback to greet.
// greet calls sayBye after greeting the user.
