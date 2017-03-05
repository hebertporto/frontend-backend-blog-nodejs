var express  = require('express');
var router = express.Router();

router.get('/novels/:id?', require('./services/getAllNovels'));
router.get('/chapter/:id?', require('./services/getChapter'));

module.exports = router;
