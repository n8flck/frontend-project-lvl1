const getQuestionDetails = (number) => ['Answer "yes" if given number is prime. Otherwise answer "no".', number];

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const guessIfPrime = (number) => {
  const positive = 'yes';
  const negative = 'no';
  if (isPrime(number)) {
    return positive;
  }
  return negative;
};

export const getPrimeGameElements = (randomNumbers) => {
  const number = randomNumbers();
  const questionDetails = getQuestionDetails(number);
  const correctAnswer = guessIfPrime(number);
  return [questionDetails, correctAnswer];
};

export default getPrimeGameElements;
