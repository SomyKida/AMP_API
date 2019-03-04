/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
var bcrypt = require('bcrypt');
var fs = require('fs');

/* Custom Imports */
var User = require('../../../models/Dentist')

/* File Consts */
var controller_name = 'auth';

/** Needs Some Additional Validations, Almost no need to clean */

/**OBSOLETE */
router.post('/signup', (req, res, next) => {

    var post_data = req.body;
    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'dob', 'Date of Birth')) {
        return
    } if (!helper.validateField(res, post_data, 'phone', 'Phone')) {
        return
    } if (!helper.validateField(res, post_data, 'address', 'Address')) {
        return
    } if (!helper.validateField(res, post_data, 'user_type', 'Type of User')) {
        return
    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
        return
    } if (!helper.validateField(res, post_data, 'conf_pwd', 'Confirm Password')) {
        return
    }

    if (post_data.pwd != post_data.conf_pwd) {
        helper.sendError(res, 'Password and Confirm Password do not match')
        return
    }



    user = new User({
        email: post_data.email,
        dob: post_data.dob,
        phone: post_data.phone,
        address: post_data.address,
        user_type: post_data.user_type,
        pwd: bcrypt.hashSync(post_data.pwd, 10),
        access_token: helper.generateRandomString('15')
    })


    //Better to get every collection in each function, globals will stay in memory - Don't globalize 
    User.find({ 'email': post_data.email }, (err, users) => {
        if (err) {
            console.log(err)
            helper.sendErrorWCode(res, err, 500)
            return
        } else {
            console.log(users)
            if (users.length > 0) {
                helper.sendError(res, 'This email is already taken')
                return
            } else {
                user.save((err, result) => {
                    if (err) {
                        console.log(err)
                        helper.sendErrorWCode(res, err, 500)
                        return
                    } else {
                        user.pwd = null
                        helper.sendSuccess(res, user)
                        return
                    }
                })
            }
        }
    })
})


/**OBSOLETE */

router.post('/signin', (req, res, next) => {

    var post_data = req.body;
    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
        return
    }

    User.find({ 'email': post_data['email'] }, (err, users) => {
        if (err) {
            console.log(err)
            helper.sendErrorWCode(res, err, 500)
            return
        } else {
            // console.log(users)
            if (users.length == 0) {
                helper.sendError(res, 'Wrong/ Unknown Email or Password')
                return
            } else {
                user = users[0]
                const match = bcrypt.compareSync(post_data.pwd, user.pwd);
                console.log(match)
                //Hashed check here #TODO
                if (match) {
                    new_token = helper.generateRandomString(15)
                    user.access_token = new_token
                    user.save((err, result) => {
                        if (err) {
                            console.log(err)
                            helper.sendErrorWCode(res, err, 500)
                            return
                        } else {
                            user.pwd = null
                            helper.sendSuccess(res, user)
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



module.exports = router