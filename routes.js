const express = require('express')
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/projects', function(req, res) {
  res.render('sections/all.html');
});

router.get('/industrial', function(req, res) {
  res.render('sections/industrial.html');
});

router.get('/service', function(req, res) {
  res.render('sections/service.html');
});

router.get('/about', function(req, res) {
  res.render('about/about.html');
});

router.get('/projects/:proj', function(req, res) {
  res.render('projects/'+req.params.proj);
});


module.exports = router;