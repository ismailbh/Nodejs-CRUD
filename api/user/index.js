const express = require('express');
const router = express.Router();

const { index, show, showUuid } = require('./user.controller');

router.get('/', index);
router.get('/:id', show);
router.post('/getUuid/:uuid', showUuid);

module.exports = router;