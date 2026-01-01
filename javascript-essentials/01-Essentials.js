/*
add prompt-sync library in node : to make the terminal work as same as prompt works in browser.
command:
    npm install prompt-sync
In file:
    let prompt = require('prompt-sync')()
*/

const prompt = require('prompt-sync')();

let userName = prompt("Enter your Name: ");

let age = prompt("Enter your age: ");

console.log(`${userName} and ${age} year old.`);
