# Variables and data types

​🔑 Variables and Keywords: var, let, and const
​These three keywords are used to declare variables in JavaScript, but they differ significantly in scope, reassignment/updating, and hoisting.



1. **Scope**
​Function/Global Scope (var): Variables declared with var inside a function are only available within that function. If declared outside any function, they are global. Crucially, if declared inside a block (like an if statement or for loop), they "leak" out and are still accessible outside that block.
​Block Scope (let and const): Variables declared with let or const are confined to the block of code ({...}) where they are defined. This makes your code more predictable and prevents unexpected side effects.

​2. **Mutability and Reassignment**
​let allows you to change its value after initialization (reassignment).
​const means the variable's binding or reference is constant. You must initialize it immediately, and you cannot reassign it to a new value later.
​⚠️ Const and Objects/Arrays: While you cannot reassign a const variable to a new object or array, you can still modify the content of the object or array it holds. The variable's reference to the memory location remains constant, but the data at that location can change.


​💾 **Data Types: Primitives and Objects**
​JavaScript data types are categorized into two major groups: Primitive Types (simple, atomic values) and Object Types (complex, collection values).
​1.**Primitive Data Types**-
​Primitive values are immutable (they cannot be changed) and represent a single, atomic value.
​string (e.g., "hello", 'world'): Represents text data.
​number (e.g., 10, 3.14): Represents both integer and floating-point numbers.
​bigint (e.g., 9007199254740991n): Used for integers larger than the maximum safe value for number.
​boolean (e.g., true, false): Represents a logical entity.
​undefined: A variable that has been declared but not yet assigned a value.
​null: Represents the intentional absence of any object value. It must be explicitly set.
​symbol (introduced in ES6): A unique and immutable value, often used as an identifier for object properties.

​2.**Object Data Types (Reference Types)**-
​Objects are mutable (can be changed) and are used to store collections of data and more complex entities.
​Object: The fundamental object type (e.g., plain objects {} with key-value pairs).
​Array: Ordered lists of values (e.g., []).
​Function: Executable code blocks (functions are first-class objects in JavaScript).
​Date, RegExp, Map, Set, etc.

 **Memory and Comparison**-
​Primitives (By Value)
​When you copy a primitive value, a new, independent copy of that value is made.

let a = 10;
let b = a; // Copy by Value: b is now 10
a = 20;    // Change a
// a is 20, b is still 10 (they are independent)

// Comparison:
let x = 5;
let y = 5;
// x === y is true (because the values are the same)

Objects (By Reference)
​When you copy an object, you are copying the reference (the memory address), not the actual object data. Both variables point to the same object in the Heap. Changing the object through one variable affects the other.

let obj1 = { value: 10 };
let obj2 = obj1; // Copy by Reference: obj2 points to the same object as obj1

obj1.value = 20; // Change obj1's property
// obj2.value is now also 20, because they are the same object.

// Comparison:
let obj3 = { id: 1 };
let obj4 = { id: 1 };
// obj3 === obj4 is false (they are two separate objects, even if their contents are the same)

let obj5 = obj3;
// obj3 === obj5 is true (they point to the exact same object in memory)