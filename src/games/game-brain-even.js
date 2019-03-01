import toPlay from '..';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 1 : 0;
  return result;
};
const task = 'Answer "yes" if number even otherwise answer "no" \n';
const even = () => {
  const gameSettings = () => {
    const question = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    const rightAnswer = (isEven(question) ? 'yes' : 'no');
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};
export default even;
