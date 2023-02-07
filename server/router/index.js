const router = require('express').Router();
const file = require('../controller/file.controller');

router.post('/', file.insertData);

module.exports = router;