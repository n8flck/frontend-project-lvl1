import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getCalculatorGameElements } from './games/calculator.js';
import { getEvenGameElements } from './games/even.js';
import { getGCDGameElements } from './games/gcd.js';
import { getProgressionGameElements } from './games/progression.js';
import { getPrimeGameElements } from './games/prime.js';

const getUserName = () => readlineSync.question('May I have your name? ');

const getAnswer = (question, expression) => {
  console.log(question);
  return readlineSync.question(`Question: ${expression}\nYour answer: `);
};

const getRandomNumber = (maxLimit = 100, minlimit = 1) => {
  const min = Math.ceil(minlimit);
  const max = Math.floor(maxLimit);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const games = [
  cons('calculator', (arg) => getCalculatorGameElements(arg)),
  cons('even', (arg) => getEvenGameElements(arg)),
  cons('divisor', (arg) => getGCDGameElements(arg)),
  cons('progression', (arg) => getProgressionGameElements(arg)),
  cons('prime', (arg) => getPrimeGameElements(arg)),
];

const playGame = (gameName) => {
  const elements = [];
  games.forEach((game) => {
    const name = car(game);
    if (name === gameName) {
      const gameElements = cdr(game);
      elements.push(gameElements(getRandomNumber));
    }
  });
  return elements.flat();
};

export const brainGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);
  let rounds = 3;
  while (rounds > 0) {
    const gameElements = playGame(gameName);
    const question = car(gameElements[0]);
    const expression = cdr(gameElements[0]);
    const userAnswer = getAnswer(question, expression);
    const correctAnswer = gameElements[1];
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
