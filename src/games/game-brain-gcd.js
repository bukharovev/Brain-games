import toPlay from '..';

const task = 'Find the greatest common divisor of given numbers.\n';
const gcd = () => {
  let firstOperand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  let secondOperand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const question = `${firstOperand}  ${secondOperand}`;
  while (firstOperand !== 0 && secondOperand !== 0) {
    if (firstOperand > secondOperand) {
      firstOperand %= secondOperand;
    } else {
      secondOperand %= firstOperand;
    }
  }
  const rightAnswer = firstOperand + secondOperand;
  return { question, rightAnswer };
};
toPlay(task, gcd);
export default gcd;
