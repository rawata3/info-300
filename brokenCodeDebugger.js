// Ayaan Rawat
const readlineSync = require('readline-sync');

// Fixed: used parseInt to convert string input to numbers.
let start = parseInt(readlineSync.question("Enter start number: "), 10);

// Fixed: used parseInt to convert string input to numbers.
let end = parseInt(readlineSync.question("Enter end number: "), 10);

let count = 0;

for (let i = start; i <= end; i++) {
    // Fixed: changed i / 2 == 0 to i % 2 === 0 to correctly check for even numbers.
    if (i % 2 === 0) {
        // Fixed: changed =+ to += to properly increment count.
        count += 1;
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);