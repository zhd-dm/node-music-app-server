import express from 'express';
import http from 'http';
import { json } from 'body-parser';

import config = require('dotenv');
config.config();

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.use(json());

app.get('/users', (req, res) => {
  res.send('/users');
});

app.post('/users', (req, res) => {
  res.send('/users');
});

app.listen(port, () => {
  console.log(`Server ${host}:${port} listening`);
});