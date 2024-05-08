const add = (a, b) => a + b;
	

const subtract = (a, b) => a - b;

const sum = arr => arr.reduce((acc, num) => acc + num, 0);

const multiply = arr => arr.reduce((acc, num) => acc * num, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = num => {
  if(num === 0) {
    return 1;
  }
  for(let i = (num - 1); i >= 1; i--) {
    num *= i;
  }
  return num;
}

// const factorialRec = num => {
//   if(num === 0) return 1;
//   return num * factorialRec(num-1);
// }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
