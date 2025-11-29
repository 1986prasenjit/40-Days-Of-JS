
# JavaScript Execution Context and Call Stack

JavaScript, even if you keep your HTML file and JS file completely empty, by default creates a **Global Execution Context**.  
There are two main types of Execution Contexts:  
1. **Global Execution Context**  
2. **Functional Execution Context**  

---

## 🌍 Global Execution Context

When the Global Execution Context is created, we immediately get access to two things:  
- the **`this` keyword**  
- the **Window object**  

In fact:  

```js
console.log(this === window); // true (in browsers)
```

Anything created outside of a function belongs to the **Global Execution Context**.

---

## 📦 The Role of the Call Stack

JavaScript manages execution contexts with the **Call Stack**.  

- At first, the **Global Execution Context** is pushed into the call stack.  
- Whenever JavaScript encounters a function call, it creates a new **Functional Execution Context** for that function and pushes it into the stack.  
- The Call Stack works in **LIFO (Last In, First Out)** order.  

👉 That means the **last function** that entered will be the **first to finish**.

### Example

```js
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();
```

### Call Stack Flow

1. Global Execution Context → pushed  
2. `first()` → pushed  
3. `second()` → pushed  
4. `third()` → pushed  
5. `third()` finishes → popped  
6. `second()` finishes → popped  
7. `first()` finishes → popped  
8. Global Execution Context → popped (program ends)  

Visualizing it like a stack of plates 🍽️: the last one placed is the first one picked up.

---

## 🧠 Memory Management

- **Primitive values** (numbers, strings, booleans) are stored directly in the **stack**.  
- **Non-primitive values** (objects, arrays, functions) are stored in the **heap**, and only their **reference (memory address)** is kept in the stack.

---

## ⚡ Phases of Execution Context

Each Execution Context (both Global and Functional) has **two phases**:  

### 1️⃣ Memory Creation Phase
- Variables are initialized with **`undefined`**.  
- For functions, the **entire function body** is stored in memory.  

### 2️⃣ Execution Phase
- Variables get their actual values.  
- If a function is called, JavaScript checks its existence in memory and creates a new **Functional Execution Context** for it.  

---

## 🏗️ Functional Execution Context

Every function has its own execution context with the same two phases:  

### 1️⃣ Memory Creation Phase
- Variables declared in the function are initialized with **`undefined`**.  
- Any inner functions are fully stored in memory.  

### 2️⃣ Execution Phase
- Variables are assigned their actual values.  
- If another function is called inside, a **new Functional Execution Context** is created for it.  
- This continues until all functions resolve.  

---

## 🔄 How It All Ends

1. The Global Execution Context enters the stack first.  
2. Then functions are pushed one by one as they are called.  
3. The **last function pushed** is the **first to finish** and gets removed.  
4. Once all functions are done, the Global Execution Context itself is popped, ending the program.  

---

## ✅ Quick Recap
- **Execution Context** = the environment where JS code runs.  
- Two types: **Global** and **Functional**.  
- Each has two phases: **Memory Creation** + **Execution**.  
- **Call Stack** manages them using **LIFO**.  
- Non-primitives → **Heap**, primitives → **Stack**.  

---

## 📌 Final Note
This is the invisible engine behind how JavaScript runs your code.  
Understanding **Execution Context** and the **Call Stack** is like seeing the wiring inside the machine—it makes debugging and advanced concepts much easier.
