import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getCalculatorGameElements } from './games/calculator.js';
import { getEvenGameElements } from './games/even.js';
import { getGCDGameElements } from './games/gcd.js';
import { getProgressionGameElements } from './games/progression.js';
import { getPrimeGameElements } from './games/prime.js';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getAnswer = (expression) => readlineSync.question(`Question: ${expression}\nYour answer: `);

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

const verifyAnswers = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);

const printResults = (result, userAnswer, correctAnswer, name) => {
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
};

export const brainGame = (gameName) => {
  const name = getUserName();
  let rounds = 3;
  while (rounds > 0) {
    const gameElements = playGame(gameName);
    const question = car(gameElements[0]);
    if (rounds === 3) {
      console.log(question);
    }
    const expression = cdr(gameElements[0]);
    const userAnswer = getAnswer(expression);
    const correctAnswer = gameElements[1];
    const result = verifyAnswers(userAnswer, correctAnswer);
    printResults(result, userAnswer, correctAnswer, name);
    if (!result) {
      break;
    }
    if (rounds === 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    rounds -= 1;
  }
};

export default brainGame;
