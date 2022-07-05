const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const baseDir = __dirname;

// telling where static file is located to be used in html files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

// use router file
require('./routes/routes')(app, baseDir);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});