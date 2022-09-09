module.exports = (app, baseDir) => {
  const calc = require(`${baseDir}/src/calculator`);

  app.get('/', (req, res) => {
    res.sendFile(baseDir + '/public/calculator/index.html');
  });

  app.post('/', (req, res) => {
    const {num1, num2} = req.body;

    const result = calc.add(num1, num2);

    res.send(`Result of calculation is ${result}`);
  });

  app.get('/bmi-calculator', (req, res) => {
    res.sendFile(baseDir + '/public/bmi-calculator/bmiCalculator.html');
  });

    app.post('/bmi-calculator', (req, res) => {
    const {height, weight} = req.body;

    const result = calc.calculateBmi(height, weight);
    
    res.send(`Your BMI is ${result}`);
  });
}