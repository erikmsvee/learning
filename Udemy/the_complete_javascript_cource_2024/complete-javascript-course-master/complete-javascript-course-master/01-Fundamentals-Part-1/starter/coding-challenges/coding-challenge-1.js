const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(`Mark BMI: ${bmiMark}`);
console.log(`John BMI: ${bmiJohn}`);

markHigherBMI = bmiMark > bmiJohn;
console.log(`Mark has higher BMI: ${markHigherBMI}`);