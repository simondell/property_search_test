var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Express' });
});

module.exports = router;
