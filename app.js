const express = require('express');
const hbs = require('hbs');

const app = express();

app.get('/',(req, res) => {
    res.send('hello there');
});

app.listen(3000, () => {
    console.log('connected to server');
});