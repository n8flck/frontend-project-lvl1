import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomNumber = (maxLimit = 100) => {
  const randomNumber = Math.random() * maxLimit;
  return Math.floor(randomNumber);
};

const isEven = (number) => (number % 2 === 0);

const guessIfEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const positive = 'yes';
  const negative = 'no';
  let rounds = 3;
  while (rounds > 0) {
    const number = getRandomNumber();
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if ((isEven(number) && answer === positive) || (!isEven(number) && answer === negative)) {
      console.log('Correct!');
      if (rounds === 1) {
        console.log('Congratulations, Bill!');
        break;
      }
    } else {
      const correctAnswer = (answer === positive) ? negative : positive;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    rounds -= 1;
  }
};

export default guessIfEvenGame;
