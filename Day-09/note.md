## What is Scope?
Scope determines where variables, functions, and objects can be accessed or used in JavaScript. It defines the accessibility and visibility of these values in different parts of the code.

## Types of Scope (4 Types) -

1.Global Scope 
2.Function (Local) Scope
3.Block Scope
4.Module Scope


**1. Global Scope**
In JavaScript, the global scope refers to the outermost scope.
If a variable or function is declared in the global scope, it can be accessed from anywhere in the code.
A variable or function declared outside of any function or block belongs to the global scope.
When a variable is declared in the global scope using var, it automatically becomes a property of the global object (in browsers, the global object is window).
However, when we declare a variable using let or const, it does not get added to the global object because both are block-scoped.
👉 Therefore, when declaring global variables, it’s better to use let or const, but it’s even better to declare variables inside functions or blocks to avoid polluting the global scope.

**2. Function (Local) Scope**
Every function in JavaScript creates a new scope.
Variables declared inside a function are accessible only within that function, not outside it.
However, the function itself can access variables from its parent scope. var is function-scoped, meaning if you declare a variable using var inside a function, it is only accessible within that function.


**3. Block Scope**
A block is represented by a pair of curly braces {}. When we declare a variable inside {}, that variable cannot be accessed from outside the block. let and const are block-scoped. Since var is function-scoped, a variable declared using var inside a block can still be accessed from outside that block.
👉 That’s why we usually use let and const for declaring block-scoped variables.

**Scope Chain-**
In JavaScript, a variable’s position in the source code determines where it can be accessed — this is called lexical scoping. When a nested function (a function inside another function) is created, multiple scopes form a scope chain. 

*A nested function can access variables from:*
Its own scope

Its parent scope

The global scope

When a variable is referenced, the JavaScript engine first searches for it in the current scope. If not found, it moves up to the parent scope. This process continues until the global scope is reached. If the variable is still not found, JavaScript throws a ReferenceError saying “the variable is not defined.”


**Variable Shadowing**-

When a variable in the inner scope has the same name as a variable in the outer scope, the inner variable shadows (or overrides) the outer one.
This means the outer variable becomes temporarily inaccessible inside that inner scope.
If we declare a variable using let or const in a scope where a variable with the same name is already declared using var, JavaScript throws a SyntaxError.
Also, since var is not block-scoped, when using loops, if we initialize a variable like i with var, anyone can modify it outside the loop.
👉 Therefore, we always use let for declaring the loop variable i.
