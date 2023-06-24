const factFunc = require("../factorial/index");

const ratioFunc = require("../ratio/index");

// console.log(ratioFunc(4, 5));
// console.log(factFunc(4));

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioFunc(num1, num2);
  const factorial = factFunc(num3);

  return { ratio, factorial };
};

// console.log(ratioAndFactorial(1, 2, 3));
module.exports = ratioAndFactorial;
