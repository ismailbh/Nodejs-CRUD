var express = require('express');
var { index, finById } = require('./book.controller');
var router = express.Router();

router.get('/', index);
router.get('/:id', finById);

module.exports = router;