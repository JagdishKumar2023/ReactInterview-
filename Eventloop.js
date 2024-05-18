// Interviewer: "Can you explain the event loop in JavaScript?"

// You: "Sure! The event loop is a fundamental concept in JavaScript that manages how asynchronous operations are handled in a single-threaded environment. Let me break it down for you:

// Concurrency Model:

// JavaScript is single-threaded, meaning it has one call stack and can only execute one piece of code at a time. However, it's non-blocking and asynchronous, which means it can handle multiple operations concurrently without waiting for them to complete.

// Call Stack:

// When we execute JavaScript code, it's added to the call stack. Functions are executed in the order they are called, and each function call creates a new stack frame on top of the call stack.

// Asynchronous Operations:

// Asynchronous operations, like setTimeout, fetch, or event listeners, are not executed immediately. Instead, they are scheduled to be executed in the future, allowing the main thread to continue running other code.

// Task Queue:

// When an asynchronous operation completes, a callback function associated with that operation is pushed to the task queue.

// Event Loop:

// The event loop continuously checks the call stack and the task queue. If the call stack is empty and there are tasks in the task queue, the event loop moves the first task from the task queue to the call stack, where it's executed. This process continues indefinitely, allowing JavaScript to handle asynchronous operations while maintaining its single-threaded nature.

// Interviewer: "Can you provide an example of how the event loop works?"

// You: "Certainly! Let's consider this example..."

// By explaining the event loop in this manner, you demonstrate your understanding of asynchronous programming in JavaScript and how the event loop manages the execution of asynchronous tasks. Providing a clear and concise explanation, along with an example, can help showcase your knowledge and communication skills in an interview setting.

// console.log("Start");

// setTimeout(function () {
//   console.log("Timeout");
// }, 0);

Promise.resolve().then(function () {
  console.log("Promise");
});

console.log("End");
