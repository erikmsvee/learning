require('dotenv').config();

const bodyParser = require("body-parser")
const express = require('express');
let request = require('request');
const https = require('https');

const app = express();
const listId = '46afeb95b4';
const serverId = 'us10'
const apiKey = '2f982188c54ac4a32623602e63f9658b-us10';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post('/failure', (req, res) => {
  res.redirect('/');
});

app.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = `https://${serverId}.api.mailchimp.com/3.0/lists/${listId}`;
  const options = {
    method: 'POST',
    auth: `desvee01:${apiKey}`  
  };

  request = https.request(url, options, (response) => {
    if(response.statusCode === 200) {
      res.sendFile(`${__dirname}/success.html`);
    } else {
      res.sendFile(`${__dirname}/failure.html`);
    }
  });

  request.write(jsonData);
  request.end();
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});