const express = require('express');
const hbs = require('hbs');


const port = process.env.PORT || 3000;
const app = express();

app.get('/',(req, res) => {
    res.send('hello there');
});

app.listen(port, () => {
    console.log('connected to server');
});