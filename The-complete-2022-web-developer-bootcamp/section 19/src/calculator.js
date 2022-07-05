const add = (num1, num2) => { 
  console.log(num1, num2);
  return num1 + num2;
}

const calculateBmi = (height, weight) => {
  return (Number(weight) / (Number(height) * Number(height))).toFixed(2);
}

exports.add = add;
exports.calculateBmi = calculateBmi;