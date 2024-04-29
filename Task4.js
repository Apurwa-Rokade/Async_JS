// Promises and callbacks are two common approaches for handling asynchronous code in JavaScript. While both can be used to manage asynchronous operations, promises offer several advantages over callbacks, making them a preferred choice for many developers.

// Callbacks
// Definition: A callback is a function that is passed as an argument to another function and is executed after the asynchronous operation is completed.
// Nested Callbacks: Callbacks can become deeply nested in a pattern known as "callback hell" when there are multiple levels of asynchronous operations.
// Error Handling: Error handling in callbacks can be complex, as errors must be passed through each callback layer.
// Promises
// Definition: A promise is an object representing the eventual completion (or failure) of an asynchronous operation.
// Chaining: Promises can be chained using the .then() method, allowing you to handle the result of one promise and return another promise for the next operation.
// Error Handling: Promises handle errors using the .catch() method, which centralizes error handling in the chain.
// States: Promises have three states: pending, fulfilled, and rejected. This clear state management makes it easier to understand the progress of an asynchronous operation.
// Composability: Promises can be combined using methods such as Promise.all() and Promise.race() to manage multiple asynchronous operations concurrently.
// Why Promises Are Preferred
// Simpler Code Structure: Promises provide a more linear and easier-to-read code structure, especially when dealing with chains of asynchronous operations.
// Better Error Handling: Promises have a built-in error handling mechanism using the .catch() method, which allows for cleaner and more consistent error handling.
// Composability and Concurrency: Methods like Promise.all() and Promise.race() make it easy to manage multiple asynchronous operations concurrently.
// Avoids Callback Hell: Promises eliminate the deeply nested callback pattern, often referred to as "callback hell," by allowing for sequential chaining.
// Compatibility with Modern JavaScript Features: Promises work well with modern JavaScript features like async and await, which make asynchronous code look more like synchronous code.
// Example
// Here's an example comparing a callback and a promise:

// Using Callbacks:



function fetchData(callback) {
    setTimeout(() => {
        const data = 'Fetched data';
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
// Using Promises:


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Fetched data';
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
// In the promise example, the code structure is more linear and easier to follow compared to the callback example. Additionally, error handling is centralized with the .catch() method.