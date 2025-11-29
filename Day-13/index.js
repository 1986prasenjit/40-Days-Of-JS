console.log("Error Handling");

/*
1. Different types of error in javascript
2. try...catch syntax and flow
3. Real-world use cases with try...catch
4. Throwing Error
5. Rethrowing Error
6. The try...catch...finally
7. Creating Custom Error
8. Self Assignment Operator
*/

//Parsing error ~
//runtime error ~

/*
What is an Exception in Javascript?
=> Exceptions are runtime errors that disrupt program execution.
*/

//Examples:
//console.log(x); //! ReferenceError: x is not defined

let obj = null;
//console.log(obj.name); //! TypeError: Cannot read properties of null

//console.log("Hii" //! SyntaxError

//let arr = new Array(-1); //! RangeError

//decodeURIComponent("%"); //! URIError

//eval("var a = ;"); //! EvalError

//! try...catch:- When Javascript executing your code  line by line, whereever it hits the try, it will first execute the code inside the try. If there is no error in the code inside the try, the catch is not going to get executed. But in case an error occurs inside the try then point where the error occur the execution of your Javascript code will be halted there and then control will be shifted to catch block it will shift using the information about the error.

// try {
    
// } catch (error) {
    
// }

/*
1. Code inside try gets executed.
2. if no error in the try block, the catch block will be ignored and will not be executed.
3. if there is an error in the try block, the execution of the try block will be suspended and the control will
move to the catch block. In the catch block you can find the error details and do the needful.
 */

 try {
    console.log("Hii");
    abc;
    console.log("Bye");
 } catch (error) {
    console.error("Something went wrong", error);
    console.log(error.name);
    console.log(error.message);
   console.log(error.stack);
}

//! Real-world use cases

function divideNumber(a,b) {
    try{
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const result = a / b;
        console.log(result);
    } catch(error){
        console.error("Got a math error", error.message);
    }
}

console.log(divideNumber(15,0));

const person = {
    name: "Diya",
    address:{
        city: "Kolkata"
    }
}

function getPostalCode(user) {
    try {
        console.log(user.address.courty.postalCode);
        
    } catch (error) {
        console.error("Error accessing property:", error.message);
    }
}

getPostalCode(person);

function validateAge(age) {
    try {
        if (isNaN(age)) {
            throw new Error("Invalid input: Age must be a Number")
        }
        console.log(`User age is: ${age}`);
    } catch (error) {
        console.error("Validation Error :",error.message);
    }
}

validateAge("diya");

//! The try...catch...finally - finally run hobei.

try {
    //code that may throw an error
} catch (error) {
    //code to handle the error
}finally{
    // code that always runs (cleanup actions)
}

function processInformation(information) {
    try {
        console.log("Processing Information...");
        if (!information) throw new Error("No Information available to process");
        console.log("Information processed");
    } catch (error) {
        console.log("Error:",error.message);
    }finally{
        console.log("Cleanup : Closing database connection");
    }
}

processInformation();

//! Custom Error

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    //this.stack = new Error().stack;
}
//ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
    if (age < 40) {
        throw new ValidationError("You are not a senior citizen");
    }
    return "You are a senior citizen";
}
try {
    const message = validateCitizen(30);
    console.log(message);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

//! Self Assignment Operator ?=

let x;
let y = 10;

//x ?= 20; // x is undefined, so x becomes 20
//y ?= 30; // y is already 10, so y remains 10

//console.log(x); // output: 20
//console.log(y); // output: 10