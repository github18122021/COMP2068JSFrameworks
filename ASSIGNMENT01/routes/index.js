var express = require('express');
var router = express.Router();

/* GET home page  */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// GET /projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});



module.exports = router;