
global.base_path = __dirname;
global.config = require(base_path + '/config');

/* Set all global variables here*/
global.helper_path = __dirname + "/app/helper";
global.uploads_path = __dirname + "/app/uploads";
global.base_url = config.BASE_URL;
global.assets_url = base_url + 'app/assets';
global.uploads_url = base_url + '/uploads';
global.frontend_url = base_url + '/src/pages';
global.NOT_FOUND_ERROR = 405;
global.SUCCESS_CODE = 200;

global.home_url = frontend_url + '/index';
global.home_path = base_path + '/app/src/pages/index'

/* GET DATABASE ACCESS */
var database = require(base_path + '/app/config/database_mongoose')
var stripe = require(base_path + '/app/config/stripe')
var cors = require('cors')
var passport = require('passport')
var strategies = require('./app/passports/strategies')
var serializations = require('./app/passports/serializations')
/* NEEDED A CALLBACK HERE, SOMEHOW MONGO CONNECTION WAS EXTREMELY ASYNC, EH */
//STILL TO BE EVEN MORE SAFE, DO AWAIT ASYNC HERE

var Dentist = require('./app/src/models/Dentist')

database.connect_database((err, connection) => {
  if (connection) {
    global.connection = connection
  } else {
    global.connection = null
  }
});

global.httpRequest = require('request');
global.AuthValidator = require(helper_path + '/auth');
global.striptags = require('striptags');
global.emailValidator = require("email-validator");

/* GLOBAL FUNCTIONALITY PROVIDERS END HERE */
const https = require("https")
const fs = require("fs");

/* Incude the express Module*/
var express = require("express");
var useragent = require('express-useragent');

global.app = express();
global.bcrypt = require("bcryptjs")
global.iplocation = require("iplocation").default;
global.publicIp = require('public-ip');

/* Session Initialization*/
app.use(require('cookie-parser')());
app.use(useragent.express());
app.use(cors())
var session = require('express-session');
app.use(session({
  secret: 'codingPixel12345',
  saveUninitialized: false, resave: false
  // cookie: {
  // 	maxAge : 1000*60*60*24*365
  // }
}));

/* TO FETCH BROWSER INFORMATION * /
global.useragent = require('express-useragent');

/* Get Request Url Middleware - start */
app.use(function (req, res, next) {
  var current_url = req.protocol + '://' + req.get('host');
  base_url = current_url;
  /* Define global values for views */
  app.locals.assets_url = base_url + '/assets';
  app.locals.base_url = base_url;
  // app.locals.session	  = req.session;

  next();
});
/* Get Request Url Middleware - end */


var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var helper = require(helper_path + '/helper');
global.helper = helper;
var email = require(helper_path + '/email');
global.email = email;

// default options
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());

// set the view engine to ejs
app.set('view engine', 'ejs');
/* Define global values for views */
app.locals.assets_url = assets_url;
app.locals.base_url = base_url;

/* Allow Cross Origin Requests */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* INCLUDE MODELS AFTER THIS */
global.dentistModel = require(base_path + '/app/src/models/Dentist');

var router = express.Router();

app.use('', router);

/* Include moduler functionality */
app.use('/api', require(base_path + '/app/src/routes/api'));
// app.use('/', require(base_path + '/app/src/routes/pages'));


/* Set static links to use assets */
app.use('/assets', express.static(__dirname + '/app/assets'));

/* Set static links to use uploads */
app.use('/uploads', express.static(__dirname + '/app/uploads'));

app.get('/omni/', function (res, res) {
  filename = __dirname + '/dist/mobile/omni/dist/my-app/index.html';
  console.log(filename)
  res.sendFile(filename);
  return
})

app.get('/test/', function (res, res) {
  res.send("hello");
  return
})
app.get('/', function (req, res) {
  console.log(req.useragent)

  if (req.useragent.isMobile) {
    console.log("yeeyeyeyeyey");
    filename = __dirname + '/dist/mobile/omni/dist/my-app/index.html';
    console.log(filename)

    res.sendFile(filename);
  }

  else {

    console.log("NONONONO");
    filename = __dirname + '/dist/amp/index.html';
    console.log(filename)
    res.sendFile(filename);
  }

  return;
});

app.get('/:url/domain', function (req, res) {
  Dentist.findOne({ 'url': req.params.url }, (err, dentist) => {
    if (err || dentist == null) {
      res.send("not found")
    } else {
      res.sendFile(__dirname + '/domains/' + dentist.id + '/app/index.html')
      return
    }
  })
})
app.get('*.*', express.static(__dirname + '/dist/amp'));
app.get("*.*", express.static(__dirname + '/dist/mobile/omni/dist/my-app'))
app.get('*.*', express.static(__dirname + '/domains'));
var port = config.PORT;
var http = require('http').Server(app);

http.listen(port, function () {
  console.log('Server Started listening on port: ' + port);
});
