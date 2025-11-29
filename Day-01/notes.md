## Keywords
In a programming language, few words are reserved by the language for its own purpose. We can not change their meaning or repurpose them for a different use case.
For example--> In JS few keywords are- let, const, for, if, else, return etc.

## How can we store some values inside a program?
To store values we can use Variables. Variables are memory buckets that can store our values and has a name as well.

## How to declare variable names in JS ?
The name must have digits (0-9) or letters.
The name can have $ and _.
The first character must not be a digit.
No reserved keywords.

*example-*
let $ = "dollar"; // it can be declare like this
let _ = "under score"; // it can be declare like this
//let 2morrow; //it can not be declare like this
// let react-play; //it can not be declare like this 

## how to create variables in JS?
3 Ways to create variables in JS
1. using Var keyword 
- var marks = 90;
2. using Let keyword
- let marks = 80;
3.using Const keyword
- const marks = 100;

**single equal sign means (=) assignment operator. Left side of the assignment operator is the variable name and right side of the assignment operator is the value.**



**One line of JS Code is equal to one instruction that we want to give to the computer. One Complete instruction is called statement and at the end of every statement in JS we can put a semicolon[but it is optional].**

# Naming Rules for Variable creation in JS

- Variable can contian small alphabets, capital alphabets, digits, underscore, dollar.
- We can't have space or any other



## There are two dataTypes in JavaScript - 1.Primitive dataType 2.non-primitive/reference dataType.

*Primitive dataType* - primitive datatypes are always called by value. it means when we are copying it from somewhere we are not provided by the reference memory or the value of the original data, we are provided by the copy of the data and whatever changes we make on that data changes are applied on that copied data and it does not effect the original value.

*non-primitive/reference dataType* - non-primitive datatype are called by reference it means when we coping it from somewhere we are allocated with the reference means the memory addess directly. So when we made changes in the copied data it changes the original data because they are both pointing towards the same memory location.

## There are two types of memory in JavaScript - 1. Stack Memory 2. Heap Memory.
**Primitive dataType are store in Stack Memory.**
**Values of non-primitive dataTypes are stored in the heap memory, where the value is stored. That memory address is stored in the stack memory.**


## When javascript sees a line of code, it breaks it into three parts - 1. Tokenizing. 2. Parsing tree (abstract syntax tree). 3. Interpreting.
