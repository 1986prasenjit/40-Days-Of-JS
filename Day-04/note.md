## JavaScript Loops

In JavaScript, a loop allows us to execute a block of code repeatedly until a specified condition becomes false. Instead of writing the same code multiple times, we use loops to make our code more efficient and readable.

## Types of Loops in JavaScript - for, for...of, for...in, while, do...while Loop

**for Loop** - The for loop is used when we know exactly how many times we want to run the loop.
A for loop has three parts:

*Initialization – where we set the starting value.*
*Condition – the loop continues to run while this condition is true.*
*Increment/Decrement – updates the loop counter after each iteration.*

**Example:**
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

**The for...of** - loop is used to iterate over iterable objects such as arrays, strings, or sets.
It gives us the values of the iterable instead of the keys or indexes.

*Example:*
const numbers = [10, 20, 30, 40];

for (const num of numbers) {
    console.log(num);
}
// Output: 10, 20, 30, 40
This loop is very useful when you just need the values and not their indexes.

**for...in Loop** -The for...in loop is used to iterate over the properties of an object.
It loops through the keys (property names) of the object.

*Example:*
const person = {
    name: "John",
    age: 25,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

**while Loop** -The while loop is used when we don’t know how many times we want to run the loop.
Before each iteration, the condition is checked — if it’s true, the code inside the loop executes.

*Example:*
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

**do...while Loop** -The do...while loop is similar to the while loop, but in this case, the loop body executes at least once before checking the condition.

*Example:*
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

**Nested Loop** -When one loop is placed inside another loop, it is called a nested loop.
The inner loop runs completely for each iteration of the outer loop.

*Example:*
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("Row", i, "Col", j);
    }
}

**Break & Continue**
*The break and continue statements are used to control the flow of loops.*
**break → exits the loop completely.**
**continue → skips the current iteration and moves to the next one.**

*Example:*
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 1, 2

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 1, 2, 4, 5

**Infinite Loop** -When the condition of a loop never becomes false, the loop continues endlessly — this is called an infinite loop.

*Example:*
// Infinite for loop
// for(;;) {
//     console.log("Looping forever");
// }

// Infinite while loop
// while (true) {
//     console.log("Looping forever");
// }

// Infinite do...while loop
// do {
//     console.log("Looping forever");
// } while (true);