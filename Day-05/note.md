## JavaScript Functions
A function is a method in programming that allows us to avoid repeating the same tasks multiple times. This means that in programming, we often have several lines of code that we need to repeat frequently. Instead of writing those repetitive lines again and again, we can store them inside a function. Whenever we need to execute those lines, we can simply call the function.
This approach promotes reusability, saves time, and reduces the number of lines in our code while creating a program.

**Different Types of Functions:**

1. *Function Declaration*
A function declaration is a type of function where we use the function keyword followed by the function name, parentheses () for parameters, and curly braces {} that contain the function body.
To call the function, we write its name followed by parentheses.
**Example:**
function printThis() {
    console.log("print");
}

printThis();


2. *Function Expression*
A function expression is a type of function where the function is stored inside a variable. A function expression doesn’t necessarily need a name.
Here, the function is treated as a value assigned to the variable. To call the function, we use the variable name followed by parentheses.
**Example:**
let printMe = function() {
    console.log("Print Me");
}
printMe();


*Parameters & Arguments*
When declaring a function, we write parameters inside the parentheses — these act as input placeholders.
When calling the function, we pass arguments, which are the actual values for those parameters.
**Example:**
function sum(a, b) {
    const result = a + b;
    console.log(result);
}
sum(5, 7);


*Return Statement*
When JavaScript encounters a return keyword inside a function, it stops executing any code below that line and returns the specified value.
If nothing is returned, the function will output undefined.
**Example:**
function sum(a, b) {
    const result = a + b;
    console.log(result);
    return result;
}
sum(5, 7);


*Default Parameter*
If no argument is passed during a function call, the function can still run successfully by using default parameter values.
If an argument is later provided, it will overwrite the default value.
**Example:**
function cal(a = 0, b = 0) {
    return 2 * (a + b);
}
console.log(cal(2, 2));


*Rest Parameter*
We use a rest parameter when we are not sure how many arguments a function will receive.
The rest parameter must always be the last parameter, and it collects all remaining arguments into an array.
**Example:**
function calculator(x, y, ...z) {
    console.log(x, y, z);
}

calculator(1, 2, 3, 4, 5); 
// x = 1, y = 2, z = [3, 4, 5]


3. *Nested Function*
A nested function is a function defined inside another function.
The inner function exists only within the outer function and cannot be accessed from outside.
**Example:**
function outer() {
    console.log("outer");
    
    return function inner() {
        console.log("inner");
    }
}

let result = outer();
result();


4. *Anonymous Function*
An anonymous function is a function without a name.
**Example:**
let printMe = function() {
    console.log("Print Me");
}
printMe();


5. *Callback Function*
A callback function is a function that is passed as an argument to another function and is executed inside that function’s body.
**Example:**
function foo(func) {
    console.log("foo");
    func();
}

function func() {
    console.log("buzz");
}

foo(func);


6. *Pure Function*
A pure function always returns the same output for the same input and does not depend on or modify external data.
**Example:**
let msg = "Hi ";
function greet(name) {
    return msg + name;
}
console.log(greet("Ram"));


7. *Higher Order Function (HOC)*
A Higher Order Function is a function that accepts another function as an argument or returns a function from within itself.
**Example:**
function getCapture(camera) {
    camera();
}

function camera() {
    console.log("canon");
}

getCapture(camera);

function returnFun() {
    return function() {
        console.log("Hello");
    }
}

returnFun()();


8. *Arrow Function*
An arrow function is similar to a function expression but does not require the function keyword.
It has no own this context — instead, it inherits this from its parent scope.
If the function body has a single expression, the return keyword can be omitted.
**Example:**
let print = () => {
    console.log("print");
}
print();

let prints = (a) => { console.log(a); };
prints("apple");

let calNumber = (b) => 2 * b;
console.log(calNumber(5));


9. *IIFE (Immediately Invoked Function Expression)*
An IIFE is an anonymous function that executes immediately after it is defined.
The entire function is enclosed in parentheses, followed by another pair of parentheses to invoke it.
To execute multiple IIFEs together, separate them with a semicolon ;.
**Example:**
(function(count) {
    console.log("Hey JS");
})();

(function(count) {
    console.log("Hey JS", count);
})(1);

(function(count) {
    console.log("Hey CSS", count);
})(2);
