const readline = require('readline-sync');

let currentAverage = parseFloat(readline.question('Enter your current average: '));

while (isNaN(currentAverage) || currentAverage < 0 || currentAverage > 100) {
    currentAverage = parseFloat(readline.question('Invalid. Enter a current average between 0 and 100: '));
}

let examScores = [];
let howMany = parseInt(readline.question('How many hypothetical final exam scores do you want to test? '));

while (isNaN(howMany) || howMany <= 0) {
    howMany = parseInt(readline.question('Invalid. Enter a number greater than 0: '));
}

for (let i = 0; i < howMany; i++) {
    let score = parseFloat(readline.question(`Enter hypothetical final exam score #${i + 1}: `));

    while (isNaN(score) || score < 0 || score > 100) {
        score = parseFloat(readline.question('Invalid. Enter a score between 0 and 100: '));
    }

    examScores.push(score);
}

console.log('\n=== GRADE FORECAST REPORT ===');

for (let score of examScores) {
    let finalAverage = (currentAverage * 0.75) + (score * 0.25);

    let letterGrade = '';
    if (finalAverage >= 90) {
        letterGrade = 'A';
    } else if (finalAverage >= 80) {
        letterGrade = 'B';
    } else if (finalAverage >= 70) {
        letterGrade = 'C';
    } else if (finalAverage >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    let status = '';
    if (finalAverage > currentAverage) {
        status = 'Improved';
    } else if (finalAverage < currentAverage) {
        status = 'Declined';
    } else {
        status = 'Stayed the same';
    }

    console.log(`\nFinal Exam Score: ${score}`);
    console.log(`Final Course Average: ${finalAverage.toFixed(2)}`);
    console.log(`Letter Grade: ${letterGrade}`);
    console.log(`Result: ${status}`);
}