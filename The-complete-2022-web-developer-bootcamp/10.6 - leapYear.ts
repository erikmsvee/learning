const isLeapYear = (year: number): string => {
  let isLeapYear = 'Not leap year.';

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    isLeapYear = 'Leap year.'
  }

  return isLeapYear;
}

const result = isLeapYear(2400);
const result2 = isLeapYear(1989);

console.log(result);
console.log(result2);
