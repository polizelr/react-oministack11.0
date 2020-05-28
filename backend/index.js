//import express
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello word!');
});

app.listen(3333);