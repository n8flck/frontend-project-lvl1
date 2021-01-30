import {
  cons,
} from '@hexlet/pairs';

const getQuestionDetails = (number) => cons('Answer "yes" if the number is even, otherwise answer "no".', number);

const isEven = (number) => (number % 2 === 0);

const guessIfEvenGame = (number) => {
  const positive = 'yes';
  const negative = 'no';
  if (isEven(number)) {
    return positive;
  }
  return negative;
};

export const getEvenGameElements = (randomNumbers) => {
  const number = randomNumbers();
  const questionDetails = getQuestionDetails(number);
  const correctAnswer = guessIfEvenGame(number);
  return [questionDetails, correctAnswer];
};

export default getEvenGameElements;
