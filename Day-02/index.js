console.log("Connected");

//Operator- Symbols + - * /
//operands - x + y, x and y are the operands.
//Assignment Expression x = 2 - Expression is something which can resolve to a value.

//Eveluating Expression - 3 + 4

let x = 4 + 5

//Arithmetic Operator 
let a = 10;
let b = 20;

let f_name = "tapas"
let l_name = "adhikary"
console.log(f_name + l_name); // It is concatined this two variable


console.log(a + b); // 30
console.log(a - b); // -10
console.log(b - a); // 10
console.log(a * b); // 200
console.log(a / b); // 0.5

//Exponencil Operator
console.log(a ** b); // power

//Rmainder Operator
console.log(a % b);

//Post increment
let count = 5;
console.log(count++); //postfix
console.log(++count); //prefix

let y = 10;
y += 5 // x = x + 10 (15)

y -= 3; // y = y - 3 (12)
y *= 2; // y = y * 2 (24)
y /= 4; // y = y / 4 (6)

console.log("***ComparisonOperators***");
4 == 5 //return boolean value true / false
console.log(0 == false); //true
console.log(3 == '3'); //true
console.log(3 === '3'); //check the datatype, return false
console.log(null === null); //true
console.log(undefined === undefined); //true

//NaN = Not  a Number

let obj1 = {
    name: "tapaScript"
} // memory address xx01

let obj2 = {
    name: "tapaScript"
} // memory address yy05

console.log(obj1 === obj2); //they are not point same memory location, return false

console.log(obj1 !== obj2);

2 >= 2 //1st check 2 is greater than 2 or equal to , return true

console.log("***Logical Operators***");

// && || ?? !

//logical AND op1 && op2 - If this 1st operand can be converted to false, then it will return 1st operand otherwise return second operand.
console.log(false && false); //false
console.log(true && false); //false
console.log(true && true); //true

//logical OR op1 || op2 - If this 1st operand can be converted to true, then it will return 1st operand otherwise return second operand.
console.log(false || false); //false
console.log(true || false); //true
console.log(true || true); //true
console.log("cow" || "horse"); //cow

//Nullish coalescing operator op1 ?? op2 - If op1 value is null or undefined then nullish coalescing operator will return the value of op2.

let a1 = null ?? 1; // 1
let a2 = undefined ?? 3; //3
let a3 = false ?? "tapas" // false

console.log("***Conditional (ternary) Operator ***");
let age = 20
let result = age > 18 ? "eligible" : "not eligible";
console.log(result);

//Bitwise Operator
// Bitwise &[Bitwise AND],Bitwise |[Bitwise OR],Bitwise ^[Bitwise XOR],Bitwise ~[Bitwise NOT], Bitwise >>[Bitwise rigthsift],Bitwise <<[Bitwise leftsift]

//Bitwise AND 15 & 9
(15 & 9) = 9
    (1111 & 1001) = 1001 = 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3);

(15 / 2) = 7(1)
    (7 / 2) = 3(1)
        (3 / 2) = 1(1)

            (9 / 2) = 4(1)
                (4 / 2) = 2(0)
                    (2 / 2) = 1(0)

                        (15 | 9) = 15

                            (1111 | 1001) = 1111

                                (15 ^ 9) = 6
                                    //(1111 ^ 1001) = 0110

                                    (9 << 2) = 36

                                        (1001 << 2) = 100100

                                            (9 >> 2) = 2
//(1001 >> 2) = 0010


// Grouiping
console.log("**** Grouping ****")

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r) // 1 + 2 * 3 = 1 + 6 = 7
p + (q * r) // 7

    (p + q) * r // (1 + 2) * 3 = 3 * 3 = 9

//(p * r + q * r) = 1 * 3 + 2 * 3 = 3 + 6 = 9

p * (r + q) * r


// typeof
console.log("**** typeof ****")


typeof "tapas"; // "string"
typeof false; // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1, 2, 3, 4]
typeof numbers; // "object"

typeof null; // "object"


// instanceof
console.log("**** instanceof ****")

// object instanceof objectType