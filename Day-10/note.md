## Closure in JavaScript
To understand a closure, first you need to know about outer and inner functions.
An inner function is defined inside an outer function. The inner function can access everything from the outer function, but the outer function cannot access anything from the inner function.
A closure is a function (in this case, the inner function) that remembers the variables declared in its outer function. Even after the outer function has finished executing, the inner function still remembers and can access the outer function’s variables.

*Usefulness of Closures in JavaScript*-

1.Closures can create private variables that can only be accessed by the inner function.
2.Closures can be used to create factory functions.

**Example:**
function add(firstNum) {
    return function inner(secondNum) {
        return firstNum + secondNum;
    }
}

let facResult = add(2);
console.log(facResult(5)); // Output: 7
console.log(facResult(3)); // Output: 5

3.Since we are returning the inner function, we can call it multiple times.



## Closure and Memory Leak-
function addBigData() {
    let bigData = new Array(100000).fill("*");
    return function() {
        console.log(bigData[3]);
    }
}

let facResult = addBigData();
console.log(facResult());

**A closure always remembers its outer variables or objects. However, when the garbage collector tries to clean up memory, it sees that the closure is still holding a reference to those variables — so it doesn’t free that memory. This can cause a memory leak if closures are not used carefully.**