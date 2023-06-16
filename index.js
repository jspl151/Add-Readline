const getRandomNo = require('./randomNo.js')
const rlSync = require('readline-sync');
const number1 = Number(rlSync.question('Enter the min number\n'));
const number2 = Number(rlSync.question('Enter the max number\n'));
const randomNo = getRandomNo(number1,number2)
console.log(`The random no is ${randomNo}`);
