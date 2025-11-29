## JavaScript Object

**In JavaScript, one of the non-primitive data types is the object, which stores data in key–value pairs.
Objects can be declared in two ways:**

*Object Literal*: {}

*Constructor Function*: A function declared using the function keyword, with the first letter capitalized.
You call it using () after the name, and write your code inside {}.

**Accessing Object Properties-**
To access any value from an object, we use the dot (.) operator.
We can also change object values using the dot operator with the = assignment operator.
When a key contains special characters or spaces, we must declare the key inside quotes (""), and to access that key, we use square brackets ([]).

*We can add a new variable (property) to an object using:*
Dot Notation — most commonly used
Bracket Notation- []
Object.assign() method
Spread operator (...) — allows one object to be stored inside another

**Checking Properties**-
The **in** operator checks whether a property exists in an object.
The **instanceof** operator checks whether an object is created by a particular constructor function or class.
It returns a boolean value (true or false).

🏭 **Factory Function**-

A factory function is a function that creates and returns a new object.
It works as a blueprint for object creation, similar to a constructor function,
but it doesn’t use the new keyword.

Factory functions handle the complexity of creating objects and can be reused.
They often use closures to declare variables and functions,
which keeps them private inside the function.

🔁 **for...in Loop**-

The for...in loop iterates over the properties of an object.
It’s similar to converting object keys into an array using Object.keys(), Object.values(), or Object.entries().

for (let key in Profile) {
   console.log(key);
   console.log(Profile[key]);
}

🗝️ **Object.keys()**-

Object.keys() returns an array of a given object’s own property names (keys).
Keys are always declared on the left-hand side of the key–value pair.

💾 **Object References**-
let fruit = { name: "mango" };
let anotherFruit = { name: "mango" };

Even though both have the same value, they point to different memory locations.
So, fruit and anotherFruit are not the same.

🧱 **Object.assign()** -

Object.assign() takes two parameters — a target and a source object.
It copies the properties from the source object into the target object and returns the target.
It performs a shallow copy.

🌊 **Shallow Copy**-

A shallow copy creates a new object by copying only the top-level properties.
However, if the object contains nested objects, those nested objects still reference the same memory address.
That’s why changing the nested object affects the original object too.

🌌 **Deep Copy**-

A deep copy creates a completely new object,
including all nested objects, ensuring that changes in the copied object
do not affect the original object.

🔹 You can create a deep copy using structuredClone(obj) (modern JavaScript method).

🔢 **Object.entries()**-

Object.entries() converts an object into an array of [key, value] pairs.

let obj = { 
    name: "Sita",
    age: 32,
};
let convertedArr = Object.entries(obj);
console.log(convertedArr);

🔁 **Object.fromEntries()**-

Object.fromEntries() converts an array (or Map) back into an object.

let entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);

let objEntries = Object.fromEntries(entries);
console.log(objEntries);

❄️ **Object.freeze()**-

Object.freeze() makes an object completely immutable —
you cannot add, remove, or change any property.

🧊 **Object.isFrozen()**-

Returns a boolean value indicating whether the object is frozen.

🔒 **Object.seal()**-

**-Object.seal() prevents adding or removing properties,
but you can still modify existing property values.

🔍 **Object.hasOwn()**-

Object.hasOwn() returns a boolean value indicating
whether the object itself (not its prototype) has a specific property.

🧩 **Object Destructuring**-

Destructuring allows you to extract properties from an object into variables
using {} curly braces on the left-hand side.

let Student = {
    name: "Ram",
    age: 20,
    isCitizen: false,
    Address: {
        pin: 9076,
        Email: "ram@gmail.com"
    }
};


*You can also rename variables using a colon : (called an alias):*

let { isCitizen: citizen } = Student;
console.log(citizen);


*You can assign default values if a property doesn’t exist:*

let { name, age, food = "rice" } = Student;
console.log(name, age, food);


*For nested objects, destructure by chaining curly braces:*

let { Address: { pin: setPin } } = Student;
console.log(setPin);

let { Address: { Email } } = Student;
console.log(Email);