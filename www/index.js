'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;
const path = require('path');
const routes = require('../routes.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(express.static(path.join(__dirname, './../docs')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + './../docs/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`The server is running at http://${host}:${port}/`);
});
