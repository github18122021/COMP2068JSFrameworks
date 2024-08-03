var express = require('express');
var router = express.Router();
let {getBooksFromDatabase} = require('../controllers/bookController');
let {registerUser, loginUser} = require('../controllers/userController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let books = await getBooksFromDatabase();
  res.render('index', { title: 'Express', books });
  // res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register', async (req, res) => {
  await registerUser(req, res); 
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', async (req, res) => {
  await loginUser(req, res); 
});


module.exports = router;
