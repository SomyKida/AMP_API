/* Dependencies */
var http = require('http');

var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
// var bcrypt  = require('bcrypt');
var fs = require('fs');

var controller_name = 'default';

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Test Home'
      });
})

router.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'Login'
      });
})

router.get('/signup', (req, res, next) => {
    res.render('signup', {
        title: 'Signup'
      });
})

module.exports = router