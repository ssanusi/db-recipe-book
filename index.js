const express = require('express');
const app = express()

const logger = require('morgan')

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send("Welcome to Lambda School Recipe Book")
});

app.listen(6000, () => {
    console.log(`Server started on 6000`);
});