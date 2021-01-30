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

const getAnswer = (question, expression, round) => {
  if (round === 3) {
    console.log(question);
  }
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

const printSuccess = (name, round) => {
  console.log('Correct!');
  if (round === 1) {
    console.log(`Congratulations, ${name}!`);
  }
};

const printFailure = (name, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
};

export const brainGame = (gameName) => {
  const name = getUserName();
  let round = 3;
  while (round > 0) {
    const [questionDetails, correctAnswer] = playGame(gameName);
    const [question, expression] = questionDetails;
    const userAnswer = getAnswer(question, expression, round);
    if (userAnswer === correctAnswer) {
      printSuccess(name, round);
    } else {
      printFailure(name, userAnswer, correctAnswer);
      break;
    }
    if (round === 1) {
      break;
    }
    round -= 1;
  }
};

export default brainGame;
