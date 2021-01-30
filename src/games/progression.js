import {
  cons,
} from '@hexlet/pairs';

const getQuestionDetails = (progression) => cons('What number is missing in the progression?', progression);

const generateProgression = (number, step, missingElement) => {
  const progression = [];
  let numberOfElements = 0;
  let element = number;
  while (numberOfElements < 10) {
    element += step;
    progression.push(`${element}`);
    numberOfElements += 1;
  }
  progression.splice(missingElement, 1, '..');
  return progression;
};

const findMissingElement = (progression) => {
  const indexOfMissingElement = progression.indexOf('..');
  const step = (indexOfMissingElement > 1) ? (progression[1] - progression[0])
    : (progression[3] - progression[2]);
  let missingElement = 0;
  if (indexOfMissingElement === 0) {
    missingElement += (Number(progression[indexOfMissingElement + 1]) - step);
  } else {
    missingElement += (Number(progression[indexOfMissingElement - 1]) + step);
  }
  return `${missingElement}`;
};

export const getProgressionGameElements = (randomNumbers) => {
  const number = randomNumbers();
  const step = randomNumbers(5, 1);
  const missingElement = randomNumbers(9, 0);
  const progression = generateProgression(number, step, missingElement);
  const questionDetails = getQuestionDetails(progression.join(' '));
  const correctAnswer = findMissingElement(progression);
  return [questionDetails, correctAnswer];
};

export default getProgressionGameElements;
