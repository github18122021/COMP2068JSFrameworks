var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var publicRouter = require('./routes/public');
var privateRouter = require('./routes/private');

var app = express();

// Connect to MongoDB
const mongoose = require('mongoose');

// to read the environment variables
require('dotenv').config();

// to check if the environment variables are being read
// console.log(process.env.MONGO_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// session for user authentication
const session = require('express-session');

app.use(session({
  secret: process.env.SECRET_KEY, 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes 
app.use('/', publicRouter);
app.use('/lms', privateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
