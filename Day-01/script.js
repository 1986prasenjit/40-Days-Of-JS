console.log("Hello World");

var name1;
let name2;

let $ = "dollar"; // it can be declare like this
let _ = "under score"; // it can be declare like this
//let 2morrow; //it can not be declare like this
// let react-play; //it can not be declare like this


//!const name3;// We Cannot do this when a variable is declared with const, the error we will get is:- SyntaxError: Missing initializer in const declaration;

//Variables are used to store data in JS
/* 
!`var`: Function-scoped, can be redeclared (not recommended);
var address = "Bangalore";
console.log(address);
var address = "USA";//Valid for var
console.log(address);

!`let`: Block-scope, can be reassigned
let address1 = "Bangalore";
console.log(address);
let address1 = "USA";// Here we will get an error because let cannot be redeclared, but let can be reassigned. Error we will get :- Identifier 'address1' has already been declared
console.log(address);

!`const`: Block-scope, **cannot** be reassigned.
const address2 = "Bangalore";
console.log(address);
const address2 = "USA";// Here we will get an error because const cannot be redeclared nor cannot be reassigned.
console.log(address);
*/

/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
  */

let student = {
    name: "Alice",
    age: 22,
    isEnrolled: true
};
console.log(student.name); // Output: Alice   

let arr = [1, 2, 4, 5]


let a = 10;
let b = a; // 10
b = 20; // 20
console.log(a); // 10 (original remains unchanged)



