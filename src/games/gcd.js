import {
  car, cdr,
} from '@hexlet/pairs';

export const getGreatestCommonDivisor = (numbers) => {
  let absoluteNumber1 = Math.abs((Number.parseInt(car(numbers), 10)));
  let absoluteNumber2 = Math.abs((Number.parseInt(cdr(numbers), 10)));
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

export default getGreatestCommonDivisor;
