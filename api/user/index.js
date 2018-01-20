const express = require('express');
const router = express.Router();

const { index, show, showUuid, create, destroy1, destroy2, update } = require('./user.controller');

router.get('/', index);
router.get('/:id', show);
router.post('/getUuid/:uuid', showUuid);
router.post('/', create);
router.delete('/destroy1/:id', destroy1);
router.delete('/destroy2/:id', destroy2);
router.put('/:id', update);
router.patch('/:id', update);

module.exports = router;