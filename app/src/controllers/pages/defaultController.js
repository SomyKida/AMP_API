/* Dependencies */
var http = require('http');

var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
// var bcrypt  = require('bcrypt');
var fs = require('fs');

var controller_name = 'default';

router.get('/', (req, res, next) => {
    res.send('Success')
})

module.exports = router