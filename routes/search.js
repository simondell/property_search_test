var data = require('../data.json');
var express = require('express');

var router = express.Router();

function pagetitle ( subtitle ) {
  return 'Zoopla - PAGE'.replace( /PAGE/, subtitle );
}

/* GET home page. */
router.get('/results?:q',
  function showResults(req, res, next) {
    var viewModel = req.query.q === data.area ? data : {};

    viewModel.title = pagetitle( 'Results' );
    res.render('results', viewModel );
  }
);

router.get('/search', function(req, res, next) {
  res.render('search', { title: pagetitle( 'Search' ) });
});

module.exports = router;
