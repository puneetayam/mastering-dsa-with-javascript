/*
add prompt-sync library in node : to make the terminal work as same as prompt works in browser.
command:
    npm install prompt-sync
In file:
    let prompt = require('prompt-sync')()
*/

const prompt = require('prompt-sync')(); // 💡 imp. : call the inner function before use.

let userName = prompt("Enter your Name: "); // The program pauses here until the user presses Enter

let age = prompt("Enter your age: "); // The program pauses here until the user presses Enter

console.log(`${userName} and ${age} year old.`);
