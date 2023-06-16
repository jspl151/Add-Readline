const rlSync = require('readline-sync');
const num1 = parseInt(rlSync.prompt());
const num2 = parseInt(rlSync.prompt());
const sum = num1 + num2 ;
console.log('Addition of ' + num1 + ' and ' + num2 + ' is ' + sum);