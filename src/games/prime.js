import {
  car,
} from '@hexlet/pairs';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export const guessIfPrime = (numbers) => {
  const positive = 'yes';
  const negative = 'no';
  const number = car(numbers);
  if (isPrime(number)) {
    return positive;
  }
  return negative;
};

export default guessIfPrime;
