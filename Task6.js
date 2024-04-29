// The localStorage and sessionStorage APIs are part of the Web Storage API in JavaScript. They allow developers to store data locally in the web browser, providing a simple and efficient way to persist data for use in web applications.

// localStorage
// Purpose: localStorage is used to store data in the web browser for an extended period, even after the browser is closed and reopened. The data is persistent and remains stored until it is explicitly deleted.
// Usage: localStorage is often used to store data such as user preferences, settings, or state information that needs to persist across browser sessions.
// Example Usage of localStorage
// javascript
// Copy code
// // Storing data in localStorage
// localStorage.setItem('username', 'john_doe');
// localStorage.setItem('theme', 'dark');

// // Retrieving data from localStorage
// const username = localStorage.getItem('username');
// const theme = localStorage.getItem('theme');
// console.log(`Username: ${username}, Theme: ${theme}`);

// // Removing data from localStorage
// localStorage.removeItem('theme');

// // Clearing all data from localStorage
// localStorage.clear();
// sessionStorage
// Purpose: sessionStorage is used to store data in the web browser for the duration of a session. The data is cleared when the session ends, such as when the browser tab or window is closed.
// Usage: sessionStorage is useful for storing data temporarily, such as form inputs, shopping cart items, or other session-specific data.
// Example Usage of sessionStorage

// Storing data in sessionStorage
sessionStorage.setItem('cartItems', JSON.stringify(['item1', 'item2', 'item3']));
sessionStorage.setItem('isLoggedIn', 'true');

// Retrieving data from sessionStorage
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
const isLoggedIn = sessionStorage.getItem('isLoggedIn');
console.log(`Cart Items: ${cartItems}, Is Logged In: ${isLoggedIn}`);

// Removing data from sessionStorage
sessionStorage.removeItem('isLoggedIn');

// Clearing all data from sessionStorage
sessionStorage.clear();


// Key Differences
// Persistence: Data stored in localStorage persists even after the browser is closed and reopened, while data stored in sessionStorage is cleared when the session ends (e.g., when the browser tab or window is closed).
// Use Cases: localStorage is suitable for storing data that needs to persist across sessions, while sessionStorage is ideal for temporary data that only needs to persist during a single session.
// Both localStorage and sessionStorage provide convenient ways to store key-value pairs in the browser and can be useful for various web development tasks, such as user settings, form data, and session-specific data.

// User
// give me suitable examples for it
// ChatGPT
// Examples of Using localStorage and sessionStorage in Web Development
// localStorage Example
// In this example, we'll use localStorage to store user preferences such as theme and language settings. These preferences will persist across browser sessions.

// javascript
// Copy code
// // Function to save user preferences to localStorage
// function savePreferences(theme, language) {
//     localStorage.setItem('theme', theme);
//     localStorage.setItem('language', language);
// }

// // Function to load user preferences from localStorage
// function loadPreferences() {
//     const theme = localStorage.getItem('theme');
//     const language = localStorage.getItem('language');
    
//     console.log(`Loaded preferences - Theme: ${theme}, Language: ${language}`);
// }

// // Function to clear all preferences from localStorage
// function clearPreferences() {
//     localStorage.clear();
// }

// // Example usage
// savePreferences('dark', 'en');
// loadPreferences(); // Outputs: Loaded preferences - Theme: dark, Language: en
// clearPreferences();
// In this example:

// The savePreferences function saves user preferences (theme and language) to localStorage.
// The loadPreferences function retrieves and logs the stored preferences from localStorage.
// The clearPreferences function clears all data from localStorage.
// sessionStorage Example
// In this example, we'll use sessionStorage to manage a shopping cart during a user session. The data will be cleared when the user closes the browser tab or window.


// Function to add an item to the shopping cart
function addItemToCart(item) {
    // Retrieve the current cart from sessionStorage, or initialize an empty array if not found
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    // Add the new item to the cart
    cart.push(item);
    
    // Save the updated cart back to sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from the shopping cart
function removeItemFromCart(item) {
    // Retrieve the current cart from sessionStorage
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    // Filter out the item from the cart
    cart = cart.filter(cartItem => cartItem !== item);
    
    // Save the updated cart back to sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display the current shopping cart
function displayCart() {
    // Retrieve the current cart from sessionStorage
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    console.log('Current Shopping Cart:', cart);
}

// Example usage
addItemToCart('Apple');
addItemToCart('Banana');
displayCart(); // Outputs: Current Shopping Cart: ['Apple', 'Banana']
removeItemFromCart('Apple');
displayCart(); // Outputs: Current Shopping Cart: ['Banana']
// In this example:

// The addItemToCart function adds an item to the shopping cart and stores the updated cart in sessionStorage.
// The removeItemFromCart function removes an item from the shopping cart and updates sessionStorage.
// The displayCart function retrieves the current shopping cart from sessionStorage and logs it to the console.
// These examples demonstrate how localStorage and sessionStorage can be used to manage user preferences and session-specific data in web development.