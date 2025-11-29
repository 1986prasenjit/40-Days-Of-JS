let user = {
    name:"ram",
    age: 56,
    "is-adimin":true
}
console.log(user.name);
console.log(user.age);

user.isCinicitizan = true;
user["Movie-Lover"] = true

console.log(user);
console.log(user["is-adimin"]);

user.age = 46;
user["Movie-Lover"] = false;

// delete user["Movie-Lover"]
// delete user.age;
console.log(user);


//dynamic value pawa jay

let someKey = "age";

console.log(user[someKey]);


let car = prompt("which is your fav car?");

let favCar = {
    [car]:5
}

console.log(favCar);


//! constactar function

function Car(model,price){
    this.model = model;
    this.price = price;
}

let car1 = new Car("BMD",89765);
let car2 = new Car("Int",6859);

console.log(car1);
console.log(car2);

console.log(car1 instanceof Car);


let Person = new Object()

Person.name = "sita";
Person.age = 67;
console.log(Person);


//! factory Function

function createUer(name, age){
    return{
        name,
        age,
        greet(){
            console.log(this.name);
            
        }
    }
}

const user1 = createUer("taras", 90);
console.log(user1);

console.log(user1.name);

console.log(user1.age);

user1.greet();



const user2 = createUer("Ram", 70);
console.log(user2);



let Profile ={
    name:"shreya",
    company: "CreoWis",
    massage: function(){
        console.log(`${this.name} works at ${this.company}`);
        
    },
    Address: {
        city:"kolkata",
        pin: 687389,
        greeting: function(){
            console.log("welcome to India");
            
        }
    }
}

console.log(Profile.Address.greeting());

//! we can check whether the property exists in the object using the in operator.

console.log("selary" in Profile);


///! for ...in

for (let key in Profile) {
   console.log(key);
   console.log(Profile[key]);
   
}

//! Object.keys() give me all the keys in object with in the Array.
console.log(Object.keys(Profile));

//! object References

let fruit = {name:"mango"};

let anotherFruit = {name:"mango"};


// fruit and anotherFruit value are same but this to variabe pointing two diffrent memory location. this to are not same
console.log(fruit == anotherFruit);
console.log(fruit === anotherFruit);

fruit = anotherFruit

// this two variable Pointing same memory location. Thats why its return true.

console.log(fruit == anotherFruit);
console.log(fruit === anotherFruit);


let target = {q:2,t:8};
let sources = {p:7,a:6};
//!assign method copies all enumerable own properties from one or more source objects to a target object.
// it Returns the target object.
let resultAssing = Object.assign(target,sources)
console.log(resultAssing);

 const obj3 ={
    a:1,
    b:{c:2},
 }

 //! assign method makes a shallow copy which means it creates a new memory for the copied object (obj4). However if the object has nested objcets like b:{c:2}, those are copied by reference. So if you change obj4.b.c, it will also change the original object.

 const obj4 = Object.assign({}, obj3);
 console.log(obj4);
 obj4.b.c = 4;

 console.log(obj3);
 console.log(obj4);

 obj4.a = 100

  console.log(obj3);
 console.log(obj4);

 //! deep copy
 const obj5 = structuredClone(obj3);
  obj5.b.c = 8;

 console.log(obj5);
 console.log(obj3);

 obj5.a = 70

  console.log(obj5);
 console.log(obj3);

//! obj convart an Array

let obj = {
    name:"shita",
    age:32,
}
let convarArr = Object.entries(obj)
console.log(convarArr);


//! Array convart to object 

let entrices = new Map([
    ["foo","bar"],
    ["baz", 42],
])

let objEntries = Object.fromEntries(entrices);
console.log(objEntries);

//! freeze()

let emp ={
    sel:400,
}
Object.freeze(emp);

emp.sel = 700
console.log(emp);

//! isFrozen()

console.log(Object.isFrozen(emp));

//! seal()- prevents adding or deleting properties, but allows modify existing once.
let dept = {
    name:"ram"
}
Object.seal()

dept.name = "hd"
console.log(dept);

//! hasOwn()

let resultHasOwn = Object.hasOwn(dept, "name")
console.log(resultHasOwn);

let resultHasOwn2 = Object.hasOwn(dept, "age")
console.log(resultHasOwn2);

//! destructure object 

let Student = {
    name:"ram",
    age:20,
    issritizen: false,
    Address: {
        pin: 9076,
        Email:"ram@gmail.com"
    }
}
//! Aliases 
let {issritizen : sritizen} = Student;
console.log(sritizen);

//! create new variable 
let {name,age,food = "rice"} = Student;
console.log(name,age,food);

//! nested object with aliases
let {Address:{pin:setPin}} = Student;
console.log(setPin);

//! nested object 
let {Address:{Email}} = Student;
console.log(Email);


//! destructure function parameter

function sendGreet({greet:{address}}) {
    console.log(address);
}
sendGreet(student);

//! destructure loop

let students = [
    {
        name :"diya",
        age:20
    },
    {
        name :"Ram",
        age:25
    },
    {
        name :"Sita",
        age:30
    }
];

for(let{name, age} of students){
    console.log(name,age);
}

//! optional chaining

const employee = {
    salary :{
        amount : 10000
    }
}
const employeeName = employee.deprt?.name;
console.log(employeeName);