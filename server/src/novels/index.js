var express  = require('express');
var multer = require('multer');

var router = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
});

var upload = multer({ storage: storage });

router.get('/:id?', require('./services/find'));
router.post('/', require('./services/create'));
router.put('/', require('./services/update'));
router.post('/upload', upload.single('cover'),require('./services/upload'));


module.exports = router;
