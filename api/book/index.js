var express = require('express');
var { index, finById, create, destroy } = require('./book.controller');
var router = express.Router();

router.get('/', index);
router.get('/:id', finById);
router.post('/', create);
router.delete('/:id', destroy);

module.exports = router;