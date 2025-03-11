const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Wrap express app into serverless handler
module.exports.handler = serverless(app);
