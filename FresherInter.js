//*** Question: 1***
// 1. What are the differences between Java and JavaScript ?
// Answer :-

// JavaScript is a client-side scripting language and Java is object Oriented Programming language. Both of them are totally different from each other.

// JavaScript: It is a light-weighted programming language (“scripting language”) for developing interactive web pages. It can insert dynamic text into the HTML elements. JavaScript is also known as the browser’s language.
// Java: Java is one of the most popular programming languages. It is an object-oriented programming language and has a virtual machine platform that allows you to create compiled programs that run on nearly every platform. Java promised, “Write Once, Run Anywhere”.

//***Question: 2***

// 2. What are JavaScript Data Types?
//Answer :-

// 1. Primitive Data Types:

// Number: Represents both integer and floating-point numbers. Example: let num = 10;
// String: Represents a sequence of characters enclosed within single or double quotes. Example: let str = 'Hello';

//a. Boolean: Represents a logical entity indicating true or false. Example: let bool = true;

//b. Undefined: Represents a variable that has been declared but not assigned any value. Example: let x;

//c. Null: Represents the Intentional absence of any value. Example: let y = null;

//d. Symbol: Introduced in ECMAScript 6 (ES6), represents unique identifiers. Example: let sym = Symbol('foo');

// 2. Reference Data Types Or Non Primative data types :

//f. Object: Represents a collection of key-value pairs. Example: let obj = { name: 'John', age: 30 };

//g. Array: Represents a collection of elements, which can be of any data type. Example: let arr = [1, 2, 3];

//h. Function: Represents reusable blocks of code. Example: function add(a, b) { return a + b; }

// Typeof Operator:
// The typeof operator in JavaScript is used to determine the data type of a variable or an expression. It returns a string indicating the type of the operand. Example:

//***Question: 3***

// 3.  What is negative infinity?
//Answer :-
// Negative Infinity is a special numeric value in JavaScript, representing a value that is lower than any other number. It is denoted by the keyword Number.NEGATIVE_INFINITY.

// When a calculation or operation results in a value that is too low to be represented by JavaScript's number data type, JavaScript will return Negative Infinity. For example, dividing a negative number by zero or subtracting Infinity from a negative number will result in Negative Infinity.

//***Question: 4***

//4. Undeclared and undefined variables are two distinct concepts in JavaScript.
//Answer :- 1. Undeclared Variables:

// Undeclared variables are those that have not been declared using the var, let, or const keywords before being used in code.

// If you try to use an undeclared variable, JavaScript will either create a global variable (if the code is in non-strict mode) or throw a ReferenceError (in strict mode), indicating that the variable has not been declared.
// Using undeclared variables is generally considered bad practice because it can lead to unexpected behavior and difficult-to-trace bugs.

// 2. Undefined Variables:

// Undefined variables are those that have been declared but have not been assigned a value, or those that have been accessed before being initialized.
// When you declare a variable but don't assign a value to it, JavaScript automatically initializes it with the value undefined.

// If you try to access the value of an uninitialized variable, or a variable that hasn't been assigned a value, JavaScript will return undefined.

//***Question: 5***

//What do you mean by NULL in JavaScript?

//Answer:-In JavaScript, null is a special value that represents the intentional absence of any object value. It is a primitive value and typically used to indicate that a variable or object property has no value or that an operation returned no result.

// In an interview setting, you might explain null in JavaScript like this:

// "Think of null in JavaScript like an empty box. When you see null, it means the box is intentionally empty, but it's still a box. It's a way to say, 'There's nothing here on purpose.'

// For example, if you ask for someone's middle name and they don't have one, you might say their middle name is null. It's not an error or an unknown value; it's just a way of saying 'there's nothing there.'

// So, in JavaScript, null is like a placeholder for 'nothingness,' but it's a deliberate nothingness."

//***Question : 6***

// How to delete property-specific values?
// Answer :-
// To delete a specific property from an object in JavaScript, you can use the delete operator. Here's how you can do it:

// **Copy code**

// // Create an object
// var person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Delete a specific property
// delete person.age;

// // Now, the 'age' property is removed from the 'person' object
// console.log(person); // Output: { name: "John", city: "New York" }
// In this example, delete person.age removes the age property from the person object. After deletion, accessing person.age would return undefined.

// However, it's important to note that using delete only removes the specific property from the object. It doesn't affect any other properties or the object's prototype chain.

// Also, be cautious when using delete, especially with properties inherited from prototype chains, as it can have unexpected consequences. In general, it's better to set a property to null or undefined if you want to signify its absence, rather than deleting it.

//***Question: 7***

// What is a prompt box? explain in easy way
//Answer :- A prompt box is like a little pop-up window in your browser that asks the user for some input. It's a way for a web page to get information from the person viewing it. Imagine you're visiting a website, and suddenly a little box pops up asking, "What's your name?" That's a prompt box!

// Here's how it works in JavaScript:

// var userInput = prompt("Please enter your name:");

// When this code runs, a small box appears in the browser with a message saying "Please enter your name:", and there's a place for the user to type their name. Whatever the user types gets stored in the variable userInput, so the website can use it later.

// It's like having a little conversation with the user right there on the web page!

//***Question: 8***

// What is the ‘this’ keyword in JavaScript? explain in Interview
// Answer:- "The this keyword in JavaScript is like a wildcard that stands for whatever object is currently in focus. Think of it as a pointer that changes its meaning based on where it's used.

// Global Context: Outside of any function, this points to the global object. It's like saying, 'Hey, what's going on in the whole document?' In a browser, it's usually window.

// Function Context: Inside a function, this changes:

// If the function is part of an object (a method), this points to that object. It's like saying, 'What's happening inside this object?'

// If the function is standalone, this still exists, but it usually points to the global object. However, in strict mode, it's undefined.

// If the function is called using special methods like call(), apply(), or bind(), you can explicitly tell this what to point to.

// In arrow functions, this is like a chameleon; it just takes on the this value of the surrounding code.
// So, this is like a detective that adapts its investigation depending on where it's called. It's a vital tool for figuring out what's going on in your JavaScript code."

//**Question:- 9**

//**Does JavaScript support automatic type conversion?  explain in simple way**
//Answer:- Yes, JavaScript does support automatic type conversion, also known as type coercion.

// Here's a simple explanation:

// Imagine you have two different types of values, like a number and a string. Sometimes, JavaScript tries to be helpful and converts one type into another if needed, without you explicitly telling it to do so.

// For example, if you have a number 5 and a string '10', and you try to add them together like this: 5 + '10', JavaScript will automatically convert the number 5 into a string and concatenate them together to give you '510'.

// This automatic type conversion can be handy, but it can also lead to unexpected results if you're not careful. It's important to understand how JavaScript handles type conversion so you can avoid any surprises in your code.

//***Question 10***

// What's the difference between ViewState and SessionState

//Answer:- ViewState and SessionState are both ways to store data in ASP.NET, but they serve different purposes.

// ViewState: ViewState stores data related to a single web page. It's used to preserve the state of controls on a page across postbacks. In simpler terms, it remembers the values of things like textboxes or dropdowns even after you click a button and the page reloads. ViewState data is stored in a hidden field on the page itself, so it's only available for that specific page.

// SessionState: SessionState, on the other hand, stores data that is accessible across multiple pages of a user's session. It's like a storage bin that holds onto information as long as the user is interacting with the website. This data is stored on the server, so it's more secure than ViewState. You can use SessionState to store user-specific information like login credentials, shopping cart items, or user preferences.

// So, in summary, ViewState is for storing data within a single page, while SessionState is for storing data across multiple pages within a user's session.

//*** simpleWord***

// Sure! Imagine ViewState as a sticky note you use to remember something while you're working on a single task. It helps you keep track of information, like the contents of a form, as you move around a webpage.

// Now, think of SessionState as a backpack you carry with you while you're exploring a website. It holds onto important things, like your login status or items you've added to your shopping cart, as you move from page to page.

// So, ViewState is like a temporary memory for one page, while SessionState is like a longer-lasting memory for your entire visit to a website.

//**Question 11***

//What are all the looping structures in JavaScript?

//Answer:-
