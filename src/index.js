import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { guessIfEvenGame } from './games/even.js';
import { calculateNumbers, randomSign } from './games/calculator.js';

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomNumber = (maxLimit = 100) => {
  const randomNumber = Math.random() * maxLimit;
  return Math.floor(randomNumber);
};

const makePairs = (number1, number2) => cons(number1, number2);

const createPairOfRandomNumbers = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  return makePairs(number1, number2);
};

const getAswer = (gameName, numbers, sign) => {
  let answer = '';
  if (gameName === 'calculator') {
    console.log('What is the result of the expression?');
    const number1 = car(numbers);
    const number2 = cdr(numbers);
    answer += readlineSync.question(`Question: ${number1} ${sign} ${number2}\nYour answer: `);
  }
  if (gameName === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const numberToVerify = car(numbers);
    answer += readlineSync.question(`Question: ${numberToVerify}\nYour answer: `);
  }
  return answer;
};

const playGame = (gameName, numbers, sign) => {
  if (gameName === 'calculator') {
    return calculateNumbers(numbers, sign);
  }
  if (gameName === 'even') {
    return guessIfEvenGame(numbers);
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
    const userAnswer = getAswer(gameName, numbers, sign);
    const correctAnswer = playGame(gameName, numbers, sign);
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
