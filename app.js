var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const {sequelize} = require('./config/db');
require('./models/proyect');

//sequelize.sync();
//sequelize.sync({force: true})

var proyectRouter = require('./routes/proyects');
//var contactRouter = require('./routes/contact');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var deepRouter = require('./routes/deep');
var bkRouter = require('./routes/bk');
var lpRouter = require('./routes/lp');
var noodlesRouter = require('./routes/noodles');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/formulario', indexRouter);
app.use('/deep', deepRouter);
app.use('/bk', bkRouter);
app.use('/lp', lpRouter);
app.use('/noodles', noodlesRouter);
//app.use('/users', usersRouter);
app.use('/', proyectRouter);
//app.use('/contact', contactRouter);

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
