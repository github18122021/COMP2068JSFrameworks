var express = require('express');
var router = express.Router();
let {getBooksFromDatabase} = require('../controllers/bookController');
let {registerUser, loginUser} = require('../controllers/userController');

/* GET home page. */
// render the home page
// fetch all books from the database and display them
router.get('/', async function(req, res, next) {
  let books = await getBooksFromDatabase();
  res.render('index', { title: 'Express', books });
  // res.render('index', { title: 'Express' });
});

// GET Register
// Render the register page
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

// POST Register
// Add a new user to the database
router.post('/register', async (req, res) => {
  await registerUser(req, res); 
});

// GET Login
// Render the login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

// POST Login
// Log in the user
router.post('/login', async (req, res) => {
  await loginUser(req, res); 
});


module.exports = router;
