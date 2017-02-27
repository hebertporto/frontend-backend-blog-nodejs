var express  = require('express');

var router = express.Router();

router.get('/:id?', require('./services/find'));
router.post('/', require('./services/create'));

module.exports = router;
