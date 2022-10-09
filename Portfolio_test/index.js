/* 
File Name: index.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, funky World!');
});

app.get('/info', (req, res) => {
    res.send('Site Info');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});