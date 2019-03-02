import toPlay from '..';
import random from '../utils';

export default () => {
  const task = 'What number is missing in the progression?\n';
  const gameSettings = () => {
    const randomStep = random(2, 9);
    const stepOfProgression = random(2, 5);
    let beginProgression = random(1, 10);
    const numberOfProgressions = 10;
    const rightAnswer = String(((randomStep + 1) * stepOfProgression) + beginProgression);
    let question = '';
    for (let i = 0; i < numberOfProgressions; i += 1) {
      if (i === randomStep) {
        question = `${question} .. `;
        beginProgression += stepOfProgression;
      } else {
        question = `${question} ${beginProgression += stepOfProgression} `;
      }
    }
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};
