const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = (app, express, passport) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(path.join(__dirname, '../../', 'dist')));
  // app.use(favicon(path.join(__dirname, '../../', 'dist', 'images', 'icons', 'favicon', 'favicon.ico')));
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
  });
  app.use(cookieParser('ssshhhh, very secret'));
  app.use(session({
    secret: 'thisIsMySuperSecretKey',
    resave: true,
    saveUninitialized: true,
  }));
  // The '/scripts' endpoint below serves up 'node_modules' buried in the
  // root directory which is inaccessible by index.html from /client
  app.use('/scripts', express.static(__dirname + '/../../node_modules'));
}