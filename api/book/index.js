const express = require('express');
const router = express.Router();

var { index, show, showUuid, create } = require('./book.controller');

router.get('/', index);
router.get('/getId/:id', show);
router.get('/getUuid/:uuid', showUuid);
router.post('/', create);

module.exports = router;