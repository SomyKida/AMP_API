/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var fs = require('fs');
/* Custom Imports */
var Admin = require(base_path + '/app/src/models/admin')
var Package = require(base_path + '/app/src/models/Package')
var stripe = require(base_path + '/app/config/stripe')

/* File Consts */
var controller_name = 'auth';

router.post('/', (req, res) => {
    admin_middleware(req, res, (err, admin) => {
        helper.sendSuccess(res, "success")
    })
})

module.exports = router