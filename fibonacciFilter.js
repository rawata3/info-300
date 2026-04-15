// Ayaan Rawat
const readlineSync = require('readline-sync');

// Fixed: used parseInt so the input is treated as a number.
let n = parseInt(readlineSync.question("Enter how many Fibonacci numbers to generate: "), 10);

// Fixed: added validation so the program only accepts numbers greater than 0.
while (isNaN(n) || n <= 0) {
    n = parseInt(readlineSync.question("Invalid input. Enter a number greater than 0: "), 10);
}

let fib = [];

// Fixed: builds the Fibonacci sequence one value at a time using prior values.
for (let i = 0; i < n; i++) {
    if (i === 0) {
        fib.push(0);
    } else if (i === 1) {
        fib.push(1);
    } else {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
}

// Fixed: filters the array so only odd Fibonacci numbers are printed.
let oddFib = fib.filter(function (num) {
    return num % 2 !== 0;
});

console.log("Full sequence: [" + fib.join(", ") + "]");
console.log("Odd Fibonacci numbers: [" + oddFib.join(", ") + "]");