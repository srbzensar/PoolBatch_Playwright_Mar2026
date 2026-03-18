function outer() {
    let outerVar = "I am from outer function";

    function inner() {
        let innerVar = "I am from inner function";
        // console.log(innerVar);
        console.log(outerVar);
    }
    inner(); // must be called to execute inner function
    console.log(outerVar);
    // console.log(innerVar); // Error: innerVar is not defined
}


outer();