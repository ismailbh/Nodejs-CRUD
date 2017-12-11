var express = require('express');
var app = express();

app.use('/api/books/', require('../api/book'));

module.exports = app;
