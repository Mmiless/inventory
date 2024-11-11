const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });