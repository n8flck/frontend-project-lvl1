import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { guessIfEvenGame } from './games/even.js';
import { calculateNumbers, randomSign } from './games/calculator.js';
import { getGreatestCommonDivisor } from './games/gcd.js';
import { generateProgression, findMissingElement } from './games/progression.js';

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomNumber = (maxLimit = 100, minlimit = 0) => {
  const min = Math.ceil(minlimit);
  const max = Math.floor(maxLimit);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makePairs = (number1, number2) => cons(number1, number2);

const createPairOfRandomNumbers = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  return makePairs(number1, number2);
};

const getAswer = (gameName, numbers, sign, progression) => {
  let answer = '';
  const number1 = car(numbers);
  const number2 = cdr(numbers);
  if (gameName === 'calculator') {
    console.log('What is the result of the expression?');
    answer += readlineSync.question(`Question: ${number1} ${sign} ${number2}\nYour answer: `);
  }
  if (gameName === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    answer += readlineSync.question(`Question: ${number1}\nYour answer: `);
  }
  if (gameName === 'divisor') {
    console.log('Find the greatest common divisor of given numbers.');
    answer += readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `);
  }
  if (gameName === 'progression') {
    console.log('What number is missing in the progression?');
    answer += readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);
  }
  return answer;
};

const playGame = (gameName, numbers, sign, progression, step) => {
  if (gameName === 'calculator') {
    return calculateNumbers(numbers, sign);
  }
  if (gameName === 'even') {
    return guessIfEvenGame(numbers);
  }
  if (gameName === 'divisor') {
    return getGreatestCommonDivisor(numbers);
  }
  if (gameName === 'progression') {
    return findMissingElement(progression, step);
  }
  return false;
};

export const brainGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);
  let rounds = 3;
  while (rounds > 0) {
    const numbers = createPairOfRandomNumbers();
    const sign = randomSign();
    const step = getRandomNumber(5, 1);
    const missingElement = getRandomNumber(9);
    const progression = generateProgression(numbers, step, missingElement);
    const userAnswer = getAswer(gameName, numbers, sign, progression);
    const correctAnswer = playGame(gameName, numbers, sign, progression, step);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (rounds === 1) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    rounds -= 1;
  }
};

export default brainGame;
