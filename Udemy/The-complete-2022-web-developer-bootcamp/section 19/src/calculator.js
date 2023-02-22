const add = (num1, num2) => {
  return Number(num1) + Number(num2);
};

const calculateBmi = (height, weight) => {
  return (Number(weight) / ((Number(height) / 100) * (Number(height) / 100))).toFixed(2);
};

exports.add = add;
exports.calculateBmi = calculateBmi;
