## Control Flow

JavaScript code normally executes line by line, from top to bottom.
But sometimes, we need to change this order — that’s when Control Flow comes into play.

While executing code line by line, if JavaScript encounters a function call, it temporarily stops executing the lines below, goes inside that function, and executes the code written inside it.
After finishing the function, it comes back and continues executing the remaining lines of code.

**The main control flow keywords in JavaScript are: if, if-else, switch-case, break, and continue.**

*if* - if is a reserved keyword, meaning you cannot use it as a variable name.
An if statement is followed by parentheses () where we write a condition.
If the condition is true, the code inside the curly braces {} will execute; if it’s false, it will be skippedn and goes into the else[next line] part.

*syntax-*
if (condition){
    //body of the code
}

*else* - If the if condition is false, JavaScript executes the code inside the else block.
else is always used together with an if statement — it cannot be used alone.
*syntax-*
if (condition){
    //code to execute if the condition true
}else{
    //code to execute if the condition false
}

*if–else if* - Sometimes, we need to check multiple conditions, not just one.
In that case, we can use if–else or elseif statements to handle more than one condition.

*syntax-*

if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition1 is false AND condition2 is true
} else if (condition3) {
  // Code to execute if condition1 and condition2 are false AND condition3 is true
} else {
  // Code to execute if none of the above conditions are true (optional)
}

*switch–case* - The switch statement executes code faster in some situations.
After the switch keyword, we write a value or condition inside parentheses ().
Inside curly braces {}, we define multiple cases. Each case has a value — when that value matches the condition, that case block runs. We use the break keyword to stop checking further cases once a match is found.
If we don’t use break, JavaScript will continue checking all cases below, even if one is already true. To handle situations when no case matches, we use the default keyword. If none of the cases are true, the default block will execute.

*syntax-* 

switch(expression) {
    case value 1:
        code to be executed if expession match
        break;
    case value2:
        code to be executed if expession match
        breake;
        //more cases
    default:
        code to be executed if no case matches the execute
}

*Ternary Operator* - The ternary operator is a shortcut for writing an if...else statement. It’s also known as a conditional operator.

**Syntax:**
condition ? expressionIfTrue : expressionIfFalse

First, we write the condition, then a question mark (?).
If the condition is true, the first expression runs;
if it’s false, the second expression runs.