const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = 'e6424e27b8d3f44945c522d782d38c95';

app.post('/', (req, res) => {
  const city = req.body.cityName ? req.body.cityName : '';
  const state = req.body.stateName ? `,${req.body.stateName}` : '';
  const country = req.body.countryName ? `,${req.body.countryName}` : '';

  const query = `${city}${state}${country}`;
  const limit = 1;
  const units = 'metric';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&limit=${limit}&appid=${apiKey}&units=${units}`;

  https.get(url, (response) => {
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);

      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(`<h1>The temperatur in ${city} is ${temperature} degrees Celcius</h1>`);
      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(`<img src="${imageUrl}" alt="weather icon">`);
      res.send();
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
