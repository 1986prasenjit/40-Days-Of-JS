## What is Hoisting in JavaScript?

Hoisting in JavaScript is the process of creating memory for variables and functions during the memory creation phase of the execution context.
If it’s for a variable, it is called variable hoisting, and if it’s for a function, it is called function hoisting.

🧩 Do var, let, and const get hoisted?
When a variable is declared with var, memory is created during the memory creation phase and it is initialized with undefined.
That’s why if we use console.log() before assigning a value, we get undefined.
When a variable is declared with let (or const), memory is also created during the memory creation phase, but it is not initialized with any value.
So, if we try to access it before initialization, we get a ReferenceError saying "Cannot access before initialization."

✅ Example for var
console.log('name is', name); 
// Output: name is undefined 
// Because memory is created for 'name' and initialized with undefined.

var name;
name = 'tom'; // The value is now assigned.

console.log('name is', name); 
// Output: name is tom


✅ Example for let
console.log('name is', name); 
// ReferenceError: Cannot access 'name' before initialization
// Because memory is created but not initialized with any value.

let name;
name = 'tom'; // The value is now assigned.

console.log('name is', name); 
// Output: name is tom


⚡ What is the Temporal Dead Zone (TDZ) in JavaScript?
The Temporal Dead Zone (TDZ) is the area in a block where a variable cannot be accessed until it is initialized. Variables declared with let and const are hoisted but remain uninitialized in the TDZ. If you try to access them before initialization, JavaScript throws a ReferenceError. The TDZ starts from the top of the block and ends when the variable is initialized with a value. Once the initialization happens, the code below can access that variable normally.

🔍 Example for Temporal Dead Zone (TDZ)
{
    // Temporal Dead Zone (TDZ) starts here
    
    // console.log('name is', name); 
    // ReferenceError: Cannot access 'name' before initialization
    // Because 'name' is in the TDZ.

    let name = 'tom'; // TDZ ends here

    console.log('name is', name); 
    // Output: name is tom
}
