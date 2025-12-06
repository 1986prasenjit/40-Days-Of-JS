**Loops are fundamental to programming as they allow you to execute a block of code repeatedly. This is often called iteration.**

*Loop types in javaScript along with the control statements break and continue.*

*1. The for Loop:*

​The for loop is the most common and structure-heavy loop, typically used when you know exactly how many times you want to loop.

**​Syntax and Structure:**

for ([initialization]; [condition]; [final-expression]) {
  // statement
}

​[initialization]: Executed once before the loop starts. It typically initializes a counter variable (e.g., let i = 0).
​[condition]: A condition checked before each iteration. If it evaluates to true, the loop body executes. If it's false, the loop terminates.
​[final-expression]: Executed after the loop body in each iteration. It's usually used to increment or decrement the counter (e.g., i++).
​Example

for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Output: Count: 0, 1, 2, 3, 4

*2. The while Loop:*

​The while loop is used when the number of iterations is unknown and the loop continues as long as a specified condition is true.

**​Syntax and Structure:**

while (condition) {
  // statement
  // Code must eventually make the condition false to avoid an infinite loop
}
​condition: Checked before each iteration. If it's true, the loop body executes. If it's false, the loop terminates.

let count = 0;
while (count < 3) {
  console.log("Current count: " + count);
  count++; // Essential to change the condition
}
// Output: Current count: 0, 1, 2

*3. The do...while Loop:*

​The do...while loop is similar to while, but it guarantees that the loop body will execute at least once, because the condition is checked after the first execution.

**​Syntax and Structure:**

do {
  // statement
} while (condition);


​condition: Checked after each iteration. If it's true, the loop repeats.
Example

let x = 10;
do {
  console.log("Executed once, even though x is not < 5. x = " + x);
  x++;
} while (x < 5);
// Output: Executed once, even though x is not < 5. x = 10


​These loops are designed specifically for iterating over collections like arrays and objects in JavaScript.

*​4. The for...in Loop (Objects):*

​The for...in loop iterates over the enumerable properties (keys) of an object.

**​Syntax and Structure**

for (variable in object) {
  // statement using object[variable]
}
Example

const person = { name: "Alice", age: 30, city: "NY" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: Alice, age: 30, city: NY


​⚠️ Note: It's generally not recommended for iterating over arrays due to potential unexpected property order and inherited properties. Use for or for...of for arrays.

*​5. The for...of Loop (Iterables):*

​The for...of loop iterates over the values of iterable objects like Arrays, Strings, Maps, Sets, and more.

**​Syntax and Structure**

for (variable of iterable) {
  // statement
}
Example
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
// Output: red, green, blue

​🛑 **Loop Control Statements:**

​These statements allow you to alter the flow of execution within a loop.

*​6. break:*
​The break statement immediately terminates the loop (or a switch statement) and transfers control to the statement immediately following the loop.
​
**Example**

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stops the loop entirely when i is 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4 (5 and up are skipped)

*7. continue:*
​The continue statement skips the current iteration of the loop and proceeds to the next iteration.

**​Example**

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the rest of the body for i=2
  }
  console.log(i);
}
// Output: 0, 1, 3, 4 (2 is skipped)