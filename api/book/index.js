const express = require('express');
const router = express.Router();

var { index, show } = require('./book.controller');


router.get('/', index);
router.get('/getId/:id', show);

module.exports = router;