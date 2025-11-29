# How JavaScript Works Under the Hood:

A Deep Dive into the Execution Context
If you've ever written a single line of JavaScript, you might have wondered, "What's actually happening when I run my code?" It feels like magic, but it's a very logical process. To truly understand JavaScript, we need to look behind the curtain at something called the Execution Context.

---

Even if you have a completely empty .js file and link it to an HTML file, JavaScript does something interesting. It creates a Global Execution Context. This is the foundational environment where all your code will be read and executed.

---

Think of an execution context as a box or a container where JavaScript code is evaluated and run. There are two main types:

1. Global Execution Context (GEC): The default context that's created as soon as the JavaScript engine starts running your script.

2. Functional Execution Context (FEC): A new context that's created every single time you call a function.

---

## The Global Execution Context (GEC)

When the GEC is created, it gives you two special things right away: the window object (in browsers) and the this keyword.

In the global scope, this is equal to window. They both point to the exact same object in memory. Anything you create outside of a function—variables, other functions—becomes a property of this global object.

## The Call Stack: The Manager of Execution

So, how does JavaScript keep track of all these execution contexts, especially when you have functions calling other functions? It uses something called the Call Stack.

_Imagine a stack of plates. You can only add a new plate to the top, and you can only remove the top plate. The Call Stack works exactly like that. It follows a LIFO (Last-In, First-Out) principle._

---

- When your script starts, the Global Execution Context is pushed onto the bottom of the stack.

- When a function is called, a new Functional Execution Context is created for it and pushed on top of the stack.

- If that function calls another function, another FEC is pushed on top.

- Once a function finishes its job, its context is popped off the top of the stack.

- Finally, when the entire script is done, the GEC is popped off, and the stack becomes empty.

---

The Two Phases of Execution
Every execution context, whether global or functional, is created in two phases. This two-step process is what explains some of **JavaScript's quirky behaviors, like hoisting.**

## Phase 1: Memory Creation Phase

In this first phase, JavaScript doesn't execute any code. Instead, it just scans through the context to find all the variable and function declarations.

- For variables (declared with var): It allocates memory and assigns them a placeholder value of undefined.

- For functions: It allocates memory and stores the entire function definition within it.

- So, before a single line of your code is actually run, JavaScript already knows about all your variables (as undefined) and has the full body of your functions ready to go.

## Phase 2: Code Execution Phase

Now that the prep work is done, JavaScript goes through your code line by line and actually executes it.

- It assigns the real values to the variables that were previously set to undefined.

- When it sees a function call, it pauses its execution in the current context. It then creates a brand new Functional Execution Context for that function and pushes it onto the call stack.

- This process then repeats inside the function—it will have its own Memory Creation and Execution phases. Once the function is done, its context is popped from the stack, and execution continues where it left off in the previous context.

---

## What About Complex Objects? [The Heap]

One last piece of the puzzle is the Heap. The Call Stack is great for simple, primitive data types (like numbers and strings). But for more complex, non-primitive data types like objects, arrays, and even functions, JavaScript stores them in a different memory space called the Heap.

The Call Stack doesn't store the object itself; it just keeps a reference or a memory address that points to where that object is located in the Heap.

## Let's Tie It All Together

It might sound complex, but it's a very systematic process. JavaScript creates a global environment (GEC), uses a Call Stack to manage function calls, and within each context, it first sets up memory for variables and functions before actually executing the code.

Understanding this flow is a huge step toward becoming a more confident and capable JavaScript developer. It demystifies why the code behaves the way it does and gives you a solid foundation to build upon.
