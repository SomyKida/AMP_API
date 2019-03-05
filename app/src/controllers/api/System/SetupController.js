/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
var bcrypt = require('bcrypt');
var fs = require('fs');

/* Custom Imports */
var Package = require('../../../models/Package')

/* File Consts */
var controller_name = 'setup';

router.get('/setup-db', (req, res) => {

    Package.deleteMany({}, (err) => {
        helper.postQueryDefault(err, res, 'Everything set up.')
    })

})

router.get('/get-packages', (req, res) => {

    Package.find({}, (err, result) => {
        helper.postQueryDefault(err, res, result)
    })

})

router.post('/add-package', (req, res) => {

    var post_data = req.body

    if (!helper.validateField(res, post_data, 'name', 'Name')) {
        return
    } if (!helper.validateField(res, post_data, 'price', 'Price')) {
        return
    }

    pack = new Package({
        'name': post_data.name,
        'price': post_data.price
    })

    pack.save((err, result) => {
        helper.postQueryDefault(err, res, 'Package inserted.')
        return
    })

})



module.exports = router