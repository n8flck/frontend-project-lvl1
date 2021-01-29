import {
  car,
} from '@hexlet/pairs';

export const generateProgression = (numbers, step, missingElement) => {
  const progression = [];
  let numberOfElements = 0;
  let number = car(numbers);
  while (numberOfElements < 10) {
    number += step;
    progression.push(`${number}`);
    numberOfElements += 1;
  }
  progression.splice(missingElement, 1, '..');
  return progression;
};

export const findMissingElement = (progression, step) => {
  const indexOfMissingElement = progression.indexOf('..');
  let missingElement = 0;
  if (indexOfMissingElement === 0) {
    missingElement += (Number(progression[indexOfMissingElement + 1]) - step);
  } else {
    missingElement += (Number(progression[indexOfMissingElement - 1]) + step);
  }
  return `${missingElement}`;
};
