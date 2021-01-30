import {
  cons,
} from '@hexlet/pairs';

const getQuestionDetails = (numbers) => cons('Find the greatest common divisor of given numbers.', numbers);

const getGreatestCommonDivisor = (number1, number2) => {
  let absoluteNumber1 = Math.abs(Number.parseInt(number1, 10));
  let absoluteNumber2 = Math.abs(Number.parseInt(number2, 10));
  if (absoluteNumber1 === 0) {
    return absoluteNumber2;
  }
  while (absoluteNumber1 !== absoluteNumber2) {
    if (absoluteNumber1 > absoluteNumber2) {
      absoluteNumber1 -= absoluteNumber2;
    } else {
      absoluteNumber2 -= absoluteNumber1;
    }
  }
  return absoluteNumber1.toString();
};

export const getGCDGameElements = (randomNumbers) => {
  const number1 = randomNumbers();
  const number2 = randomNumbers();
  const questionDetails = getQuestionDetails(`${number1} ${number2}`);
  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  return [questionDetails, correctAnswer];
};

export default getGCDGameElements;
