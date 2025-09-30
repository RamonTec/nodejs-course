/**
 * 
 * 
For our first program, we will create something more interesting than a simple "Hello World". 
We will develop a random number generator with the following features:

If no arguments are provided, it will generate a random number between 1 and 100
If two arguments are provided, it will generate a random number between those values
It will include validations to handle incorrect input

 */

let min = 1;
let max = 100;

let args = process.argv.slice(2)

if (args.length >= 2) {
  const parseMin = parseInt(args[0], 10);
  const parseMax = parseInt(args[1], 10);

  // here we can valdiate in two ways, with typeof and isNan
  // typeof way: typeof parseMax === 'number' && typeof parseMin === 'number'
  if (!isNaN(parseMax) && !isNaN(parseMin)) {
    min = parseMin;
    max = parseMax;
  } else {
    console.log('invalid inputs, try to enter two numbers.');
    return
  }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Ramdon number generated between ${min} and ${max} is: ${randomNumber}`)