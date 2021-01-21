import {
  car,
} from '@hexlet/pairs';

const isEven = (number) => (number % 2 === 0);

export const guessIfEvenGame = (numbers) => {
  const positive = 'yes';
  const negative = 'no';
  const number = car(numbers);
  if (isEven(number)) {
    return positive;
  }
  return negative;
};

export default guessIfEvenGame;
