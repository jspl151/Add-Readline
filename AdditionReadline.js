const rlSync = require('readline-sync');

const number1 = parseInt(rlSync.question('Enter the first number\n'));
const number2 = parseInt(rlSync.question('Enter the second number\n'));
const sum = number1+number2
console.log(`The sum of numbers ${number1} and ${number2} is ${sum}`);