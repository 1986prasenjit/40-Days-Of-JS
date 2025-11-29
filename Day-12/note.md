# JavaScript — What is `this`?

In JavaScript, `this` is a **keyword**.  
The `this` keyword means *who called it?*  
It always refers to its **calling context**.  
Whoever calls `this`, `this` refers to that caller.


## 🟢 Implicit Binding

Here, JavaScript itself determines the calling context of the `this` keyword.  
When we call a function as a **method** of an object using **dot notation** (`object.method`),  
the `this` inside that method refers to that **object**.

**Example:**
const employee = { 
    id: "D457",
    fName: "diya",
    lName: "Roy",
    returnThis: function() {
        return this;
    },
    getFullName: function() {
        return `${this.fName} ${this.lName}`;
    }
}

console.log(employee.returnThis());   // Refers to employee object
console.log(employee.getFullName());  // "diya Roy"

**Standalone Function** -
In a standalone function, the this keyword refers to: The global object in Node.js (global), or The window object in browsers.If "use strict" is used, this becomes undefined in such cases.

**Example**:

function sayName() {
    console.log(this);
}
sayName();

## 🔵 Arrow Function

An arrow function does not have its own this keyword.
Instead, it inherits this from its parent scope.
Even if "use strict" is used, the arrow function’s this still refers to its parent’s this.
If the parent scope is the global scope and there is no explicit this,
then it refers to the window object.

**Example**:

const getFood = () => this;
console.log(getFood()); // Refers to global/window

const food = {
    name: "mango",
    color: "yellow",
    getFruit: function() {
        return () => `${this.name} is ${this.color}`;
    }
}
console.log(food.getFruit()()); // "mango is yellow"

## 🟣 Constructor Function

When we use a function as a constructor with the new keyword,
the new keyword creates an empty object and sets this to refer to that object.
Inside the constructor function, this refers to the newly created object.

**Example**:

function Profile(name, age) {
    this.name = name;
    this.age = age;
}

const user = new Profile("diya", 25);
console.log(user); // Profile { name: "diya", age: 25 }

## 🔴 Explicit Binding

Explicit binding means we manually set the calling context of the this keyword.
There are three main methods used for explicit binding:

1.call()

2.apply()

3.bind()

## 🔸 call() Method

In the call() method, we first mention the function that uses this,
then call it with the object whose context we want to bind.
Arguments are passed comma-separated.

**Example**:

function greeting() {
    console.log(`${this.name} ${this.age}`);
}

const person = {
    name: "diya",
    age: 20
}

greeting.call(person); // diya 20

## 🔸 apply() Method

In the apply() method, arguments are passed as an array.

**Example**:

const likes = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ', ' + hobby2);
}

const likePerson = { name: "diya" };
const hobbiesApply = ["sleeping", "eating"];

likes.apply(likePerson, hobbiesApply);
// diya likes sleeping, eating

## 🔸 bind() Method

In the bind() method, the function is stored in a variable.
The bind() method returns a new function with a permanently bound this context.

**Example**:

const newHobby = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ', ' + hobby2);
}

const user = { name: "bob" };

const newFun = newHobby.bind(user, "sleeping", "eating");
newFun(); // bob likes sleeping, eating
