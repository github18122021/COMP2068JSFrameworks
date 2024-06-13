var express = require('express');
var router = express.Router();

/* GET home page  */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home', activePage: 'home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', activePage: 'about'});
});

// GET /projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', activePage: 'projects'});
});

// GET /contact
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', activePage: 'contact'});
});

// /projects/[projectName]

router.get('/projects/bookstore', function(req, res, next) {
  res.render('projects/bookstore', { title: 'Book Store'});
});

router.get('/projects/guessGame', function(req, res, next) {
  res.render('projects/guessGame', { title: 'Guess Game'});
});

router.get('/projects/currencyCalculator', function(req, res, next) {
  res.render('projects/currencyCalculator', { title: 'Currency Calculator'});
});

router.get('/projects/ageCalculator', function(req, res, next) {
  res.render('projects/ageCalculator', { title: 'Age Calculator'});
});

router.get('/projects/weather', function(req, res, next) {
  res.render('projects/weather', { title: 'Weather'});
});

router.get('/projects/textReader', function(req, res, next) {
  res.render('projects/textReader', { title: 'Text Reader'});
});

router.get('/projects/choicePicker', function(req, res, next) {
  res.render('projects/choicePicker', { title: 'Choice Picker'});
});

router.get('/projects/passwordGenerator', function(req, res, next) {
  res.render('projects/passwordGenerator', { title: 'Password Generator'});
});

router.get('/projects/calculator', function(req, res, next) {
  res.render('projects/calculator', { title: 'Calculator'});
});





module.exports = router;
