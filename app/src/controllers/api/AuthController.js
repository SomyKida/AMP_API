/* Dependencies */
var http = require('http');
const assert = require('assert');

var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
// var bcrypt  = require('bcrypt');
var fs = require('fs');

var controller_name = 'auth';

router.post('/', (req, res, next) => {
    res.send('Success')
})

router.get('/', (req, res, next) => {
    res.send('Success')
})



/** Needs Some Additional Validations, Almost no need to clean */
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



    // will create models later on  #TODO

    user = {}
    user['email'] = post_data.email
    user['dob'] = post_data.dob
    user['phone'] = post_data.phone
    user['address'] = post_data.address
    user['user_type'] = post_data.user_type

    // Need to hash it using bcrypt + validation  #TODO
    user['pwd'] = post_data.pwd


    user['access_token'] = helper.generateRandomString('15')

    //Better to get every collection in each function, globals will stay in memory - Don't globalize 
    user_collection = connection.collection('users')

    user_collection.find({ 'email': user['email'] }).toArray((err, users) => {
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
                user_collection.insertOne(user, (err, result) => {
                    if (err) {
                        console.log(err)
                        helper.sendErrorWCode(res, err, 500)
                        return
                    } else {
                        user['pwd'] = null
                        helper.sendSuccess(res, user)
                        return
                    }
                })
            }
        }
    })
})


router.post('/signin', (req, res, next) => {

    var post_data = req.body;
    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
        return
    }

    //Better to get every collection in each function, globals will stay in memory - Don't globalize 
    user_collection = connection.collection('users')

    user_collection.find({ 'email': post_data['email'] }).toArray((err, users) => {
        if (err) {
            console.log(err)
            helper.sendErrorWCode(res, err, 500)
            return
        } else {
            console.log(users)
            if (users.length == 0) {
                helper.sendError(res, 'Wrong/ Unknown Email or Password')
                return
            } else {
                user = users[0]
                //Hashed check here #TODO
                if (user.pwd == post_data.pwd) {
                    new_token = helper.generateRandomString(15)
                    user_collection.updateOne({ id: user.id }, { $set: { access_token: new_token } }, (err, result) => {
                        if (err) {
                            console.log(err)
                            helper.sendErrorWCode(res, err, 500)
                            return
                        } else {
                            user['access_token'] = new_token
                            user['pwd'] = null
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