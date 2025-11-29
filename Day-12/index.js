"use strict"

// If "use strict" is used, then inside functions (especially in the global scope), the this keyword returns undefined instead of referring to the global object.

// The meaning of this -The this keyword means “who called me?” It refers to the object that is calling the function.

// In the global scope,
// this === window → true (in browsers)
// this refers to the global object.

// Implicit Binding -When a function is called as a method of an object, this refers to that object.

const employee = { 
    id: "D457",
    fName: "diya",
    lName:"Roy",
    returnThis: function() {
        return this;
    },
    getFullName:function() {
        return `${this.fName} ${this.lName}`
    }
}


employee.returnThis()

employee.getFullName()

const tom = {
    name:"Tom",
    age:4
}
const jerry = {
    name:"jerry",
    age:3
}
function greetMe(obj) {
    obj.logMsg = function(){
        console.log(`${this.name} is ${this.age} years old`);
    }
    console.log(obj);
}

greetMe(jerry);
jerry.logMsg(); 

greetMe(tom);
tom.logMsg(); 

function sayName() {
    console.log(this);
}
sayName();


//Nested Functions
function outer(a) {
    console.log(this);
    return function inner(b) {
        console.log(this);
    }
}
const result = outer(3);
result(5);


// Arrow Functions and this -Arrow functions don’t have their own this. Instead, they inherit this from their parent scope. If "use strict" is on, and you use an arrow function globally, this refers to the global scope (in browsers, that’s the window).


const getFood = ()=> this;
console.log(getFood()); // refers to global/window



const food = {
    name: "mango",
    color : "yellow",
    getFruit: function(){
        return ()=> `${this.name} is ${this.color}`;
    }
}
console.log(food.getFruit()()); // "mango is yellow"



//Explicit Binding — call, apply, bind
//1. call() -Pass arguments comma-separated.

function greeting() {
    console.log(`${this.name} ${this.age}`);
}
const person = { name: "diya", age: 20 };
greeting.call(person); // diya 20

//2. apply() -Pass arguments as an array.

const likes = function (hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ',' + hobby2);
}
const likePerson = { name: 'diya' };
likes.apply(likePerson, ["sleeping", "eating"]); 

//3. bind()-Creates a new function that can be called later with this permanently set.

const newHobby = function (hobby1, hobby2) {
   console.log(this.name + ' likes ' + hobby1 + ',' + hobby2);
}
const user = { name:"bob" };
const newFun = newHobby.bind(user, "sleeping", "eating");
newFun(); // "bob likes sleeping,eating"

//Constructor Function -When you use new, this inside the constructor refers to the newly created object.

var Cartoon = function(name, animal){
    this.name = name;
    this.animal = animal;
    this.log = function(){
        console.log(this.name + ' is a ' + this.animal);
    }
}

const tomCartoon = new Cartoon("Tom", "Cat");
const jerryCartoon = new Cartoon("Jerry", "Mouse");
tomCartoon.log();   // "Tom is a Cat"
jerryCartoon.log(); // "Jerry is a Mouse"

const greet = {
    name: 'john',
    myname: function(){
        console.log('hello ' + this.name);
    }
}

const retGreet = greet.myname;
retGreet.call(greet); // "hello john"