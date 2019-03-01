import readlineSync from 'readline-sync';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 1 : 0;
  return result;
};
export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no" \n');
  const nameUser = readlineSync.question('May i have your name?');
  console.log(`Hello, ${nameUser}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    let rightAnswer;
    if (isEven(randomNum)) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      break;
    } console.log(`Congratulations, ${nameUser}! `);
  }
};
