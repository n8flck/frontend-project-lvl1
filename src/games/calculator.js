import {
  car, cdr,
} from '@hexlet/pairs';

const signsArray = [
  '-',
  '+',
  '*',
];
export const randomSign = () => signsArray[Math.floor(Math.random() * signsArray.length)];

/* make calculate method return nubers */
const calculate = (number1, number2, sign) => {
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
/* return (Number.parseInt(answer, 10) */
export const calculateNumbers = (numbers, sign) => {
  const number1 = car(numbers);
  const number2 = cdr(numbers);
  return calculate(number1, number2, sign);
};
