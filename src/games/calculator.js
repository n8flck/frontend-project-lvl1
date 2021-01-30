const signsArray = [
  '-',
  '+',
  '*',
];

const randomSign = () => signsArray[Math.floor(Math.random() * signsArray.length)];

const getQuestionDetails = (expression) => ['What is the result of the expression?', expression];

const calculateNumbers = (number1, number2, sign) => {
  let result = '';
  switch (sign) {
    case '+':
      result += (number1 + number2);
      break;
    case '-':
      result += (number1 - number2);
      break;
    case '*':
      result += (number1 * number2);
      break;
    default: result = 0;
  }
  return result;
};

export const getCalculatorGameElements = (randomNumbers) => {
  const number1 = randomNumbers();
  const number2 = randomNumbers();
  const sign = randomSign();
  const questionDetails = getQuestionDetails(`${number1} ${sign} ${number2}`);
  const correctAnswer = calculateNumbers(number1, number2, sign);
  return [questionDetails, correctAnswer];
};

export default getCalculatorGameElements;
