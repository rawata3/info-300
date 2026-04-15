// Ayaan Rawat
const readlineSync = require('readline-sync');

// Fixed: used parseInt so the input is treated as a number.
let n = parseInt(readlineSync.question("Enter a positive number (n <= 1000): "), 10);

// Fixed: added input validation to make sure n is positive and no greater than 1000.
while (isNaN(n) || n <= 0 || n > 1000) {
    n = parseInt(readlineSync.question("Invalid input. Enter a positive number (n <= 1000): "), 10);
}

// Fixed: added a helper function to correctly test whether a number is prime.
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let primes = [];

// Fixed: loop checks every number from 2 through n and stores only prime numbers.
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

let largestGap = 0;
let gapStart = 0;
let gapEnd = 0;
let totalGap = 0;

// Fixed: compare each prime to the previous prime to calculate consecutive gaps.
for (let i = 1; i < primes.length; i++) {
    let gap = primes[i] - primes[i - 1];
    totalGap += gap;

    // Fixed: only replace the largest gap when a bigger one appears, which keeps the first tie.
    if (gap > largestGap) {
        largestGap = gap;
        gapStart = primes[i - 1];
        gapEnd = primes[i];
    }
}

let avgGap = 0;

// Fixed: prevents division by zero when there are fewer than 2 primes.
if (primes.length > 1) {
    avgGap = (totalGap / (primes.length - 1)).toFixed(2);
} else {
    avgGap = "0.00";
}

console.log("The largest gap is " + largestGap + ", between " + gapStart + " and " + gapEnd);
console.log("The average gap is " + avgGap);