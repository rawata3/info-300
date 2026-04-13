const readline = require('readline-sync');

let employees = [];

for (let i = 0; i < 3; i++) {
    console.log(`\nEmployee ${i + 1}`);

    let name = readline.question('Enter employee name: ');

    let wage = parseFloat(readline.question('Enter hourly wage: '));
    while (isNaN(wage) || wage <= 0) {
        wage = parseFloat(readline.question('Invalid. Enter a positive hourly wage: '));
    }

    let hours = parseFloat(readline.question('Enter hours worked: '));
    while (isNaN(hours) || hours < 0 || hours > 80) {
        hours = parseFloat(readline.question('Invalid. Enter hours between 0 and 80: '));
    }

    let regularHours = Math.min(hours, 40);
    let overtimeHours = Math.max(hours - 40, 0);

    let regularPay = regularHours * wage;
    let overtimePay = overtimeHours * wage * 1.5;
    let totalPay = regularPay + overtimePay;

    employees.push({
        name: name,
        totalHours: hours,
        regularPay: regularPay,
        overtimePay: overtimePay,
        totalPay: totalPay
    });
}

let highestPaid = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].totalPay > highestPaid.totalPay) {
        highestPaid = employees[i];
    }
}

console.log('\n=== PAYROLL REPORT ===');
for (let emp of employees) {
    console.log(`\nName: ${emp.name}`);
    console.log(`Total Hours: ${emp.totalHours}`);
    console.log(`Regular Pay: $${emp.regularPay.toFixed(2)}`);
    console.log(`Overtime Pay: $${emp.overtimePay.toFixed(2)}`);
    console.log(`Total Pay: $${emp.totalPay.toFixed(2)}`);
}

console.log(`\nHighest Paid Employee: ${highestPaid.name} with $${highestPaid.totalPay.toFixed(2)}`);