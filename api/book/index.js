var express = require('express');
var { index, finById, create, destroy, update, patch } = require('./book.controller');
var router = express.Router();

router.get('/', index);
router.get('/:id', finById);
router.post('/', create);
router.delete('/:id', destroy);
router.put('/:id', update);
router.patch('/:id', patch);

module.exports = router;