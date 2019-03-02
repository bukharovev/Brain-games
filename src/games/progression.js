import toPlay from '..';
import random from '../utils';

export default () => {
  const task = 'What number is missing in the progression?\n';
  const gameSettings = () => {
    const missingDigit = random(2, 9);
    const stepOfProgression = random(1, 6);
    let beginProgression = random(1, 10);
    const numberOfProgressions = 10;
    const rightAnswer = ((missingDigit + 1) * stepOfProgression) + beginProgression;
    let question = '';
    for (let i = 0; i < numberOfProgressions; i += 1) {
      if (i === missingDigit) {
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
