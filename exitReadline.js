const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', (line) => {
  (line !== '.exit') ?  console.log(`Received: ${line} `) : rl.close();
  });