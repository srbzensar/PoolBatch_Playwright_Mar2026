
// Base class or parent class or super class
class BaseTest {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`Starting test: ${this.name}`);
  }
}

// Derived class or child class or sub class
class LoginTest extends BaseTest {
  validateLogin() {
    console.log("Validating login functionality...");
  }
}

// Usage
const test = new LoginTest("Login Test");
test.start();         // Inherited from BaseTest
test.validateLogin(); // Defined in LoginTest

// =================================================

// Challenge:
// Create a Page class with a method open(url) that logs "Opening <url>".
// Create a LoginPage class that extends Page and adds a method login() that logs "Logging in...".

class Page {
  open(url) {
    console.log(`Opening ${url}`);
  }
}

class LoginPage extends Page {
  login() {
    console.log("Logging in...");
  }
}

const loginPage = new LoginPage();
loginPage.open("https://example.com/login"); // Opening https://example.com/login
loginPage.login();                           // Logging in...
// =================================================
