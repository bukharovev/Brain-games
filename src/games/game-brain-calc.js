import toPlay from '..';

const task = 'What is the result of the expression\n';

const calc = () => {
  const gameSettings = () => {
    const firstOperand = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    const secondOperand = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    const numOfOperation = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let rightAnswer;
    let question;
    if (numOfOperation === 1) {
      question = `${firstOperand} + ${secondOperand}`;
      rightAnswer = firstOperand + secondOperand;
    } else if (numOfOperation === 2) {
      question = `${firstOperand} - ${secondOperand}`;
      rightAnswer = firstOperand - secondOperand;
    } else {
      question = `${firstOperand} * ${secondOperand}`;
      rightAnswer = firstOperand * secondOperand;
    }
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};

export default calc;
