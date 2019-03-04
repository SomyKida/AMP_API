/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
var bcrypt = require('bcrypt');
var fs = require('fs');
var mongoose = require('mongoose')
/* Custom Imports */
var Package = require('../../../models/Package')
var Admin = require('../../../models/Admin')

/* File Consts */
var controller_name = 'auth';

router.post('/add', (req, res) => {
    post_data = req.body

    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'package', 'Package id')) {
        return
    }

    Admin.findOne({ 'email': post_data.email }, (err, admin) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (admin != null) {
                helper.sendError(res, "An account with this email already exists.")
                return
            } else {
                Package.findById(post_data.package, (err, package) => {
                    if (!helper.postQueryErrorOnly(err, res)) {
                        if (package == null) {
                            helper.sendError(res, "No such package found")
                            return
                        } else {


                            //stripe payment here
                            //email goes here
                            helper.sendSuccess(res, "Done")
                            return
                        }
                    }
                })
            }
        }
    })
})

router.post('/login', (req, res) => {
    var post_data = req.body;
    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
        return
    }

    admin.findOne({ 'email': post_data['email'] }, (err, admin) => {
        if (err) {
            console.log(err)
            helper.sendErrorWCode(res, err, 500)
            return
        } else {
            if (admin == null) {
                helper.sendError(res, 'Wrong/ Unknown Email or Password')
                return
            } else {
                const match = bcrypt.compareSync(post_data.pwd, admin.pwd);
                console.log(match)
                //Hashed check here #TODO
                if (match) {
                    new_token = helper.generateRandomString(15)
                    admin.access_token = new_token
                    admin.save((err, result) => {
                        if (err) {
                            console.log(err)
                            helper.sendErrorWCode(res, err, 500)
                            return
                        } else {
                            admin.pwd = null
                            helper.sendSuccess(res, admin)
                            return
                        }
                    })


                } else {
                    helper.sendError(res, 'Wrong/ Unknown Email or Password')
                    return;
                }
            }
        }
    })
})

router.post('/update', (req, res) => {

})


module.exports = router