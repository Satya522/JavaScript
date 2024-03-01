
# Welcome to JavaScript Course

###### Connect with Me: 

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github)](https://github.com/Satya522)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/satyendra7312)
[![LeetCode](https://img.shields.io/badge/-LeetCode-02569B?style=flat&logo=LeetCode&logoColor=white)](https://leetcode.com/Satya522)

## Table of Contents

1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Basic Syntax](#basic-syntax)
4. [Variables](#variables)
5. [Data Types](#data-types)
6. [Operators](#operators)
7. [Control Structures](#control-structures)
   - [If...Else](#if-else)
   - [Switch](#switch)
   - [For Loop](#for-loop)
   - [While Loop](#while-loop)
8. [Functions](#functions)
9. [OOPs](#oops)
10. [Arrays](#arrays)
11. [Error Handling](#error-handling)
12. [Regular Expressions](#regular-expressions)
13. [Events](#events)
14. [DOM Manipulation](#dom-manipulation)
15. [Asynchronous JavaScript](#asynchronous-javascript)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
   - [Async/Await](#async-await)
16. [Modules](#modules)
17. [Testing](#testing)
18. [Debugging](#debugging)
19. [Best Practices](#best-practices)
20. [Advanced Topics](#advanced-topics)
   - [Closures](#closures)
   - [Prototypes](#prototypes)
   - [ES6 Features](#es6-features)
21. [Libraries and Frameworks](#libraries-and-frameworks)
22. [Deployment](#deployment)
23. [Conclusion](#conclusion)
24. [API References](#api-references)
25. [Performance](#performance)
26. [Security](#security)
27. [Compatibility](#compatibility)
28. [Contributing](#contributing)
29. [License](#license)
30. [Acknowledgments](#acknowledgments)

## 1.Introduction

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

JavaScript enables interactive web pages and is an essential part of web applications. The majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.

JavaScript was initially created to "make web pages alive". The programs in this language are called scripts. They can be written right in a web page's HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don't need special preparation or compilation to run. This makes JavaScript very convenient. It also allows you to easily test small snippets of code.

JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

JavaScript should not be confused with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantic, and use.

## 2.Setup and Installation

Before you start working with JavaScript, you need to have Node.js and npm (node package manager) installed on your computer. Follow the steps below to install them:

1. **Install Node.js:**
   - Visit the official [Node.js website](https://nodejs.org/) and download the installer.
   - Run the installer (the .msi file you just downloaded in the previous step.)
   - Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

2. **Verify Installation:**
   - Open a new command prompt (win + r, then type cmd and hit enter).
   - Type `node -v` and hit enter. The system should display the Node.js version installed on your computer.
   - Type `npm -v` and hit enter. The system should display the npm version installed on your computer.

3. **Setup Your Project:**
   - Create a new directory for your project and navigate into it.
   - Run `npm init -y` to create a new `package.json` file for your project. This file will keep track of all your project's dependencies.

4. **Install Project Dependencies:**
   - If your project requires any external libraries or frameworks, you can install them using npm. For example, to install Express.js, you would run `npm install express`.

Now you're ready to start writing JavaScript code!

NOTE: If you want to work with JavaScript in the browser, you don't need to install Node.js or npm. You can simply 
create an HTML file and write your JavaScript code inside a `<script>` tag. but If you want to write code in IDE then 

## 2.1JavaScript IDEs and Download Links

Here are some popular Integrated Development Environments (IDEs) for JavaScript:

1. **Visual Studio Code:** Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).
   - Download link: [Visual Studio Code](https://code.visualstudio.com/download)

2. **WebStorm:** WebStorm is a powerful IDE for modern JavaScript development, perfectly equipped for building applications in React, Angular, Vue.js and Node.js.
   - Download link: [WebStorm](https://www.jetbrains.com/webstorm/download/)

3. **Atom:** Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in JavaScript, and embedded Git Control, developed by GitHub.
   - Download link: [Atom](https://atom.io/)

4. **Sublime Text:** Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.
   - Download link: [Sublime Text](https://www.sublimetext.com/download)

5. **Brackets:** Brackets is a lightweight, yet powerful, modern JavaScript editor. It's crafted from the ground up for web designers and front-end developers.
   - Download link: [Brackets](http://brackets.io/)

Remember to choose the one that best fits your needs and preferences.

## 3.Basic Syntax

JavaScript syntax is the set of rules that define how JavaScript programs are constructed. Here are some basic syntax rules:

1. **Case Sensitivity:** JavaScript is case-sensitive. This means `myVariable`, `myvariable`, and `MYVARIABLE` are three different variables.

2. **Statements:** JavaScript statements are composed of values, operators, expressions, keywords, and comments. Each statement is executed by the JavaScript engine, which reads the script from top to bottom.

3. **Semicolons:** JavaScript statements are separated by semicolons. Although semicolons are optional in JavaScript, it is a good practice to use them.

4. **Whitespace:** JavaScript ignores multiple spaces. You can use white space to make your code more readable.

5. **Comments:** Comments are used to explain JavaScript code, and to make it more readable. Single-line comments start with `//`. Multi-line comments start with `/*` and end with `*/`.

6. **Variables:** You can declare a variable with the `var` keyword, followed by any name you like.

7. **Data Types:** JavaScript has dynamic types. This means the same variable can be used to hold different data types.

8. **Operators:** JavaScript has arithmetic operators (`+`, `-`, `*`, `/`, `%`), assignment operators (`=`, `+=`, `-=`, etc.), comparison operators (`==`, `===`, `!=`, `!==`, etc.), logical operators (`&&`, `||`, `!`), and more.

9. **Control Structures:** JavaScript includes control structures like `if`, `else`, `while`, `for`, `switch`, etc.

10. **Functions:** A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

Here is an example of a simple JavaScript program:

```javascript
// This is a single-line comment

/* This is a
   multi-line
   comment */

// Declare a variable
var x;

// Assign a value to the variable
x = 5;

// Declare and assign a value to a variable
var y = 6;

// Create a function
function add(a, b) {
  return a + b;
}

// Use the function
var z = add(x, y);

// Display the result
console.log(z);  // Outputs: 11
```


## 4.Variables

In JavaScript, variables are used to store data values. A variable can be thought of as a named container that you can use to store data in.

1. **Declaring Variables:** In JavaScript, you can declare a variable using the `var`, `let`, or `const` keyword. For example:
   ```javascript
   var x;
   let y;
   const z = 10;
   ```
The `var` keyword is used in pre-ES6 versions of JavaScript. `let` and `const` are new in ES6. `const` is used for constant values that cannot be changed.

2. **Assigning Values to Variables:** You can assign values to variables using the `=` operator. For example:
   ```javascript
   x = 5;
   y = 'Hello, world!';
   ```

3. **Variable Types:** JavaScript is a dynamically typed language. This means that the same variable can be used to hold different types of data. For example:
   ```javascript
   var data = 10;        // data is a number
   data = 'Hello, world!'; // now data is a string
   ```

4. **Variable Scope:** In JavaScript, the scope of a variable declared with `var` is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you use `let` and `const`, the scope is limited to the block, statement, or expression where it's defined.

5. **Hoisting:** In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope. However, the assignments are not hoisted. This means that you can refer to a variable before it's declared, but not before it's assigned a value.

Here is an example of using variables in JavaScript:

```javascript
// Declare a variable
var x;

// Assign a value to the variable
x = 5;

// Declare and assign a value to a variable
var y = 6;

// Use the variables
var z = x + y;

// Display the result
console.log(z);  // Outputs: 11
```

## 5.Data Types

JavaScript is a dynamically typed language, which means a variable can hold different types of values because it's not bound to any given type. Here are the basic data types in JavaScript:

1. **Number:** The number type represents both integer and floating point numbers. There are many operations for numbers, e.g. multiplication `*`, division `/`, addition `+`, subtraction `-`, and so on.
   ```javascript
   var num = 42; // integer
   var price = 9.99; // floating point number
   ```

2. **String:** A string in JavaScript must be surrounded by quotes. Both single and double quotes are acceptable.
   ```javascript
   var str1 = 'Hello, world!';
   var str2 = "Hello, world!";
   ```

3. **Boolean:** The boolean type has only two values: `true` and `false`. This type is commonly used to store yes/no values.
   ```javascript
   var isReading = true; // yes, I'm reading
   var isSleeping = false; // no, I'm not sleeping
   ```

4. **Null:** This type has only one value: `null`. It means nothing, empty or value unknown.
   ```javascript
   var emptyValue = null;
   ```

5. **Undefined:** A variable that has not been assigned a value has the value `undefined`.
   ```javascript
   var x;
   console.log(x); // Outputs: undefined
   ```

6. **Object:** The object is a complex data type that allows you to store collections of data.
   ```javascript
   var student = {
     firstName: 'John',
     lastName: 'Doe',
     age: 20
   };
   ```

7. **Array:** An array is a type of object used for storing multiple values in a single variable.
   ```javascript
   var fruits = ['Apple', 'Banana', 'Mango'];
   ```

8. **Function:** The function is callable object that executes a block of code. Since functions are objects, so it is a data type also.
   ```javascript
   function greet() {
     return 'Hello, world!';
   }
   ```

In addition to these, there are some special types in JavaScript like `Symbol` and `BigInt`.

Remember, JavaScript variables can be reassigned to any type. You can start with a string, then assign a number to it, and then assign an object to it. JavaScript is very flexible about the types of values it requires.

## 6.Operators
In JavaScript, operators are special symbols that are used to perform operations on operands (values). Here are the main types of operators in JavaScript:

1. **Arithmetic Operators:** These are used to perform arithmetic operations. Examples include `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), and `%` (modulus).


2. **Assignment Operators:** These are used to assign values to variables. Examples include `=` (assignment), `+=` (add and assign), `-=` (subtract and assign), `*=` (multiply and assign), and `/=` (divide and assign).


3. **Comparison Operators:** These are used to compare two values. Examples include `==` (equal to), `===` (equal value and equal type), `!=` (not equal), `!==` (not equal value or not equal type), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to).


4. **Logical Operators:** These are used to determine the logic between variables or values. Examples include `&&` (and), `||` (or), and `!` (not).


5. **Bitwise Operators:** These are used to perform bitwise operations on operands. Examples include `&` (and), `|` (or), `^` (xor), `~` (not), `<<` (left shift), `>>` (right shift), and `>>>` (zero fill right shift).


6. **Ternary Operator:** This is a shorthand way of writing an `if...else` statement. It's represented as `? :`.


Operators are used to perform operations on variables and values. Here are the main types of operators in JavaScript:

### Arithmetic Operators

Arithmetic operators are used to perform arithmetic between variables and/or values.

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (Remainder)
- `++` Increment
- `--` Decrement

```javascript
var a = 10;
var b = 5;

console.log(a + b); // Outputs: 15
console.log(a - b); // Outputs: 5
console.log(a * b); // Outputs: 50
console.log(a / b); // Outputs: 2
console.log(a % b); // Outputs: 0
```


### Assignment Operators

Assignment operators are used to assign values to JavaScript variables.

- `=` x = y
- `+=` x = x + y
- `-=` x = x - y
- `*=` x = x * y
- `/=` x = x / y
- `%=` x = x % y

```javascript
var a = 10;

a += 5;  // Same as a = a + 5; Now, a is 15
a -= 5;  // Same as a = a - 5; Now, a is 10
a *= 5;  // Same as a = a * 5; Now, a is 50
a /= 5;  // Same as a = a / 5; Now, a is 10

```

### Comparison Operators

Comparison operators are used in logical statements to determine equality or difference between variables or values.

- `==` equal to
- `===` equal value and equal type
- `!=` not equal
- `!==` not equal value or not equal type
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

```javascript
var a = 10;
var b = '10';

console.log(a == b);  // Outputs: true
console.log(a === b); // Outputs: false
console.log(a != b);  // Outputs: false
console.log(a !== b); // Outputs: true
console.log(a > b);   // Outputs: false
console.log(a < b);   // Outputs: false
console.log(a >= b);  // Outputs: true
console.log(a <= b);  // Outputs: true
```

### Logical Operators

Logical operators are used to determine the logic between variables or values.

- `&&` and
- `||` or
- `!` not

```javascript
var a = 10;
var b = 5;
var c = 20;

console.log(a > b && a < c); // Outputs: true
console.log(a > b || a > c); // Outputs: true
console.log(!(a > b));       // Outputs: false
```

### Bitwise Operators

Bitwise operators are used to perform bitwise operations on operands.

- `&` AND
- `|` OR
- `^` XOR
- `~` NOT
- `<<` Zero fill left shift
- `>>` Signed right shift
- `>>>` Zero fill right shift

```javascript
var a = 5;  // Binary: 101
var b = 3;  // Binary: 011

console.log(a & b);  // Outputs: 1 (Binary: 001)
console.log(a | b);  // Outputs: 7 (Binary: 111)
console.log(a ^ b);  // Outputs: 6 (Binary: 110)
console.log(~a);     // Outputs: -6 (Binary: 110)
console.log(a << 1); // Outputs: 10 (Binary: 1010)
console.log(a >> 1); // Outputs: 2 (Binary: 10)
console.log(a >>> 1); // Outputs: 2 (Binary: 10)
```

### Ternary Operator

The ternary operator is a shorthand way of writing an `if...else` statement. It's represented as `? :`.

- `? :` Ternary

```javascript
var a = 10;
var b = 5;

var result = (a > b) ? 'a is greater than b' : 'a is not greater than b';
console.log(result); // Outputs: 'a is greater than b'
```

Please Note that: Operators are very important for any programming language. They are used to perform various operations on variables and values. 

## 6.1 KeyWords In JavaScript
In JavaScript, keywords are reserved words that are used to perform specific tasks. Here are some of the most commonly used keywords in JavaScript:

### Variables

- `var`: Used to declare a variable.
- `let`: Used to declare a block scope local variable.
- `const`: Used to declare a block scope read-only named constant.

### Functions

- `function`: Used to declare a function.
- `return`: Used to specify the value to be returned by a function.

### Conditional Statements

- `if`: Used to specify a block of code to be executed if a condition is true.
- `else`: Used to specify a block of code to be executed if the condition is false.
- `switch`: Used to select one of many code blocks to be executed.
- `case`: Used to specify the code to be executed if the condition in the switch statement is true.
- `default`: Used to specify the code to be executed if no case condition is true.

### Loops

- `for`: Used to create a for loop.
- `while`: Used to create a while loop.
- `do`: Used to create a do...while loop.
- `break`: Used to exit a loop or a switch statement.
- `continue`: Used to skip the current iteration of a loop and continue with the next one.

### Error Handling

- `try`: Used to specify a block of code to test for errors.
- `catch`: Used to specify a block of code to handle errors.
- `finally`: Used to specify a block of code to be executed regardless of the try...catch result.
- `throw`: Used to create custom errors.

### Objects and Classes

- `new`: Used to create an object.
- `this`: A reference to the object that the function is a method of.
- `delete`: Used to delete a property from an object.
- `typeof`: Used to find out the type of a JavaScript variable.
- `instanceof`: Used to check whether an object is an instance of a specific class.
- `in`: Used to check whether a property exists in an object.
- `void`: Used to discard the return value of a function.
- `import`: Used to import functions, objects or values from other JavaScript modules.
- `export`: Used to export functions, objects or values to other JavaScript modules.
- `class`: Used to define a class in JavaScript.
- `extends`: Used to create a class that is a child of another class.
- `super`: Used to call the constructor of the parent class.

### Asynchronous Programming

- `async`: Used to declare an asynchronous function.
- `await`: Used to wait for a Promise to be resolved or rejected.



## 7.Control Structures

In JavaScript, control structures are used to control the flow of execution of the program, based on certain conditions. These are used to perform different actions for different decisions and repeat a block of code for a number of times. Here are the main types of control structures in JavaScript:

1. **If...Else Statements:** The `if` statement is used to specify a block of JavaScript code to be executed if a condition is true. If the condition is false, another block of code can be executed using the `else` statement.

```javascript
var age = 15;

if (age > 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
```

2. **Else If Statement:** The `else if` statement is used to specify a new condition to test, if the first condition is false.

```javascript
var score = 85;

if (score < 50) {
    console.log("Fail");
} else if (score < 60) {
    console.log("Grade D");
} else if (score < 70) {
    console.log("Grade C");
} else if (score < 80) {
    console.log("Grade B");
} else {
    console.log("Grade A");
}
```

3. **Switch Statement:** The `switch` statement is used to select one of many code blocks to be executed. It's often used as an alternative to `if...else` if you have a long list of conditions.

```javascript
var day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
```

4. **For Loop:** The `for` loop is used to repeat a block of code a number of times. It's often used when you know beforehand how many times the script should run.

```javascript
for (var i = 0; i < 5; i++) {
    console.log(i);
}
```

5. **While Loop:** The `while` loop is used when you want to run the same block of code while a condition is true. The loop will continue running as long as the condition is true. It will only stop once the condition becomes false.

```javascript
var i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

6. **Do...While Loop:** The `do...while` loop is similar to the `while` loop, but with a key difference: the `do...while` loop will always execute the block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```javascript
var i = 0;

do {
    console.log(i);
    i++;
}
while (i < 5);
```

These control structures are fundamental to any kind of JavaScript code, as they allow you to control the flow of execution of the code, based on conditions and loops.

## 8.Functions
In JavaScript, functions are one of the fundamental building blocks. A function is a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

Here's a detailed explanation of functions in JavaScript:

1. **Function Declaration:** To declare a function, you use the `function` keyword, followed by the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets `{}`.

```javascript
function myFunction(parameter1, parameter2) {
    // Code to be executed
}
```

2. **Function Invocation:** The code inside the function will execute when the function is invoked. The function is invoked using the function name followed by parentheses.

```javascript
myFunction(arg1, arg2);
```

3. **Function Parameters:** Function parameters are listed inside the parentheses in the function definition. Function arguments are the values received by the function when it is invoked.

```javascript
function myFunction(x, y) {
    // x and y are parameters
    return x * y;   // Function returns the product of x and y
}

myFunction(10, 2); // 10 and 2 are arguments
```

4. **Function Return:** The `return` statement stops the execution of a function and returns a value from that function.

```javascript
function myFunction(x, y) {
    return x * y;   // Function returns the product of x and y
}

var z = myFunction(10, 2); // z = 20
```

5. **Function Scope:** Variables declared within a JavaScript function become local to the function. Local variables have function scope and can only be accessed from within the function.

```javascript
function myFunction() {
    var x = 10;   // x is a local variable
    console.log(x);
}

myFunction(); // Outputs: 10
console.log(x); // Error: x is not defined
```

6. **Anonymous Functions & Function Expressions:** A function expression is similar to and has the same syntax as a function declaration. One way to define a function expression is as an anonymous function (a function without a name).

```javascript
var x = function(y) { return y * y };
```

7. **Arrow Functions:** Arrow functions allow us to write shorter function syntax. Arrow functions do not have their own `this`. They are not well suited for defining object methods.

```javascript
const x = (x, y) => x * y;
```

8. **Callback Functions:** A callback function is a function passed as an argument to another function. This technique allows a function to call another function.

```javascript
function myFunction(callbackFunction) {
    callbackFunction();
}

myFunction(function() { console.log('Hello World!') }); // Outputs: "Hello World!"
```

9. **Immediately Invoked Function Expressions (IIFE):** An IIFE is a JavaScript function that runs as soon as it is defined.

```javascript
(function() {
    console.log('Hello World!');
})(); // Outputs: "Hello World!"
```

10. **Generator Functions:** A JavaScript generator is a function which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

```javascript
function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // Outputs: 10
console.log(gen.next().value); // Outputs: 20
```

11. **Async Functions:** An async function is a function declared with the `async` keyword. Async functions are instances of the AsyncFunction constructor, and the `await` keyword is permitted within them.

```javascript
async function myFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World!"), 1000)
  });
  const result = await promise; 
  console.log(result);
}

myFunction(); // Outputs: "Hello World!" after 1 second
```

Functions are a block of code designed to perform a particular task. They are executed when we invoke or call the function. We can pass data, known as parameters, into a function. Functions are reusable in JavaScript by declaring them once and calling them anywhere in your code.

Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple terms, a higher-order function is a function that either takes one or more functions as parameters, returns a function as its result, or both. Here are some examples of higher-order functions in JavaScript:

1. **Array.prototype.map():** The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);
console.log(squares); // Outputs: [1, 4, 9, 16, 25]
```

2. **Array.prototype.filter():** The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(number => number % 2 === 0);
console.log(evens); // Outputs: [2, 4]
```

3. **Array.prototype.reduce():** The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // Outputs: 15
```

4. **Function.prototype.bind():** The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // Outputs: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // Outputs: 42
```

5. **Custom Higher-Order Function:** You can also create your own higher-order functions. For example, here's a function that takes a function as an argument and uses it to transform an array of numbers:

```javascript
function transform(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squares = transform(numbers, number => number * number);
console.log(squares); // Outputs: [1, 4, 9, 16, 25]
```

These are just a few examples of higher-order functions in JavaScript. They are a powerful feature of the language and are used extensively in functional programming.

### Callback Functions Uses In JavaScript
Callback functions in JavaScript are commonly used in the following scenarios:

1. **Asynchronous Programming:** Callbacks are heavily used in asynchronous programming. This is when you want to wait for a process to complete before proceeding with the rest of the code. For example, when reading a file or fetching data from an API, you can use a callback function to handle the data once it's available.

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
```

2. **Event Listeners:** Callbacks are used in event listeners to specify a function to be executed when an event occurs.

```javascript
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked!');
});
```

3. **Array Methods:** JavaScript array methods like `map()`, `filter()`, `reduce()`, `forEach()`, etc., all take callback functions as arguments.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});
```

4. **setTimeout and setInterval:** The `setTimeout` and `setInterval` functions use callbacks to specify what code should be executed after a certain amount of time.

```javascript
setTimeout(function() {
    console.log('This message is displayed after 2 seconds');
}, 2000);
```

5. **Custom Higher-Order Functions:** You can create your own higher-order functions that accept callback functions as arguments.

```javascript
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

greet('Alice', function() {
    console.log('Callback function executed!');
});
```

These are just a few examples of how callback functions are used in JavaScript. They are a fundamental part of the language and are used in many different scenarios.

### Arrow Functions
Callback functions in JavaScript are commonly used in the following scenarios:

1. **Asynchronous Programming:** Callbacks are heavily used in asynchronous programming. This is when you want to wait for a process to complete before proceeding with the rest of the code. For example, when reading a file or fetching data from an API, you can use a callback function to handle the data once it's available.

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
```

2. **Event Listeners:** Callbacks are used in event listeners to specify a function to be executed when an event occurs.

```javascript
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked!');
});
```

3. **Array Methods:** JavaScript array methods like `map()`, `filter()`, `reduce()`, `forEach()`, etc., all take callback functions as arguments.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});
```

4. **setTimeout and setInterval:** The `setTimeout` and `setInterval` functions use callbacks to specify what code should be executed after a certain amount of time.

```javascript
setTimeout(function() {
    console.log('This message is displayed after 2 seconds');
}, 2000);
```

5. **Custom Higher-Order Functions:** You can create your own higher-order functions that accept callback functions as arguments.

```javascript
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

greet('Alice', function() {
    console.log('Callback function executed!');
});
```

These are just a few examples of how callback functions are used in JavaScript. They are a fundamental part of the language and are used in many different scenarios.

## 9.OOPs(Object-Oriented Programming)
Object-Oriented Programming (OOP) is a programming paradigm that is based on the concept of "objects". Objects are instances of classes, which can hold data and have behaviors. Here are the main concepts of OOP in JavaScript:

## 1. Objects

In JavaScript, an object is a standalone entity with properties and types. It's like a container that holds related data and methods to use that data. An object is created using the object literal or the `new` keyword.

```javascript
// Using object literal
var student = {
    name: 'John Doe',
    age: 20,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

// Using new keyword
var student = new Object();
student.name = 'John Doe';
student.age = 20;
student.greet = function() {
    console.log('Hello, ' + this.name);
};
```

## 2. Classes

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. A class is a type of function, but instead of using the keyword `function` to initiate it, we use the keyword `class`.

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

var student = new Student('John Doe', 20);
```

## 3. Inheritance

Inheritance is a concept where one class shares the properties and methods of another class. Inheritance is useful for code reusability. We can use the properties and methods of the existing class. This is achieved in JavaScript through the `extends` keyword.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    study() {
        console.log(this.name + ' is studying');
    }
}

var student = new Student('John Doe', 20);
student.greet(); // Outputs: "Hello, John Doe"
student.study(); // Outputs: "John Doe is studying"
```

## 4. Encapsulation

Encapsulation is the bundling of data, along with the methods that operate on that data, into a single unit. Many programming languages use encapsulation frequently in the form of classes.

```javascript
class Student {
    constructor(name, age) {
        var _name = name;
        var _age = age;

        this.getName = function() {
            return _name;
        }

        this.getAge = function() {
            return _age;
        }
    }
}

var student = new Student('John Doe', 20);
console.log(student.getName()); // Outputs: "John Doe"
console.log(student.getAge()); // Outputs: 20
```

## 5. Polymorphism

Polymorphism is a concept by which we can perform a single action in different ways. We can perform polymorphism in JavaScript by using the method overriding and method overloading concepts.

```javascript
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Method overriding
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

var shape = new Shape();
var circle = new Circle(5);

console.log(shape.area()); // Outputs: 0
console.log(circle.area()); // Outputs: 78.53981633974483
```

These are the main concepts of OOP in JavaScript. They are used to write more structured and reusable code.

## 1. Abstraction

Abstraction is a process of hiding the implementation details and showing only the functionality. In JavaScript, we can achieve abstraction using classes and interfaces.

```javascript
class Circle {
    constructor(radius) {
        this.radius = radius;
        this._area = null;
    }

    calculateArea() {
        this._area = Math.PI * Math.pow(this.radius, 2);
    }

    get area() {
        if (this._area === null) {
            this.calculateArea();
        }
        return this._area;
    }
}

const circle = new Circle(5);
console.log(circle.area); // Outputs: 78.53981633974483
```

In the above example, the user doesn't need to know how the area is calculated. They just need to call the `area` getter.

## 2. Composition

Composition is a way to combine objects or classes into more complex data structures. It is often used as an alternative to inheritance. Here's an example:

```javascript
class Engine {
    start() {
        console.log('Engine started');
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
    }

    start() {
        this.engine.start();
    }
}

const car = new Car();
car.start(); // Outputs: "Engine started"
```

In the above example, the `Car` class is composed of the `Engine` class.

## 3. Method Chaining

Method chaining is a common syntax in JavaScript, particularly seen with jQuery and other libraries. The idea is that every method on an object returns the object itself, so you can chain further methods onto it.

```javascript
class MyString {
    constructor(initialValue) {
        this.value = initialValue;
    }

    append(text) {
        this.value += text;
        return this;
    }

    prepend(text) {
        this.value = text + this.value;
        return this;
    }

    print() {
        console.log(this.value);
    }
}

new MyString('Hello')
    .append(' World')
    .prepend('Say: ')
    .print(); // Outputs: "Say: Hello World"
```

In the above example, `append` and `prepend` methods return `this` allowing for method calls to be chained.

These are some additional concepts of OOP in JavaScript. They can be used to write more efficient, maintainable, and readable code.
