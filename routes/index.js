var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Webcams app' });
});
router.get('/webcam1', function(req, res, next) {
  res.render('webcam1', { title: 'Webcam 1' });
});
router.get('/webcam2', function(req, res, next) {
  res.render('webcam2', { title: 'Webcam 2' });
});

module.exports = router;
