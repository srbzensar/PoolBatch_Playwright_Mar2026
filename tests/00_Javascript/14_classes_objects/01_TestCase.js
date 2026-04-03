class TestCase {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    printResult() {
        console.log(`Test Case: ${this.name}, Status: ${this.status}`); 
    }

}


const loginTest = new TestCase("Login Test", "Passed");
loginTest.printResult(); // Output: Test Case: Login Test, Status: Passed   

const signupTest = new TestCase("Signup Test", "Failed");
signupTest.printResult(); // Output: Test Case: Signup Test, Status: Failed
