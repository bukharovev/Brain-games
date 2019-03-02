import toPlay from '..';
import random from '../utils';

export default () => {
  const task = 'What number is missing in the progression?\n';
  const gameSettings = () => {
    const length = 10;
    const hiddenElementPosition = random(1, length);
    const stepOfProgression = random(1, 6);
    const firstElement = random(1, 10);
    const rightAnswer = ((hiddenElementPosition + 1) * stepOfProgression) + firstElement;
    let question = '';
    for (let i = 0; i < length; i += 1) {
      let j = i; // Не знал как назвать 'j'. Она нужна для того, чтобы спрятать элемент
      if (i === hiddenElementPosition) {
        question = `${question} .. `;
        j += 1;
      } else {
        question = `${question} ${((j + 1) * stepOfProgression) + firstElement} `;
      }
    }
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};
