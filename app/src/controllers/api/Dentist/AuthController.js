/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var fs = require('fs');
/* Custom Imports */
var Dentist = require(base_path + '/app/src/models/Dentist')
var PendingDentist = require(base_path + '/app/src/models/PendingDentist')
var Package = require(base_path + '/app/src/models/Package')
var stripe = require(base_path + '/app/config/stripe')

/* File Consts */
var controller_name = 'auth';

router.post('/pre-register', (req, res) => {
    post_data = req.body

    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'package', 'Package id')) {
        return
    }


    Dentist.findOne({ 'email': post_data.email }, (err, dentist) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (dentist != null) {
                helper.sendError(res, "An account with this email already exists.")
                return
            } else {
                Package.findById(post_data.package, (err, package) => {
                    if (!helper.postQueryErrorOnly(err, res)) {
                        if (package == null) {
                            helper.sendError(res, "No such package found")
                            return
                        } else {
                            PendingDentist.findOne({ 'email': post_data.email }, (err, pDentist) => {
                                if (!helper.postQueryErrorOnly(err, res)) {

                                    if (pDentist != null) {
                                        helper.sendError(res, "This email is already pending registeration payment.")
                                        return
                                    } else {
                                        pDentist = new PendingDentist({
                                            'email': post_data.email,
                                            'package': helper.getMongoId(post_data.package)
                                        })
                                        pDentist.save((err) => {
                                            if (!helper.postQueryErrorOnly(err, res, "This email was successfully added to database but there was an error in dispatching the email.")) {
                                                email.sendDefaultEmail(post_data.email, 'Payment Link', email.getHtmlDynamicLinkForPayment(pDentist), (err, info) => {
                                                    if (!helper.postQueryErrorOnly(err, res)) {
                                                        helper.sendSuccess(res, "An email with payment details has been sent to the provided email.")
                                                        return
                                                    }
                                                })

                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                })
            }
        }
    })
})

router.post('/pay/:pId', (req, res) => {
    var post_data = req.body;
    if (!helper.validateField(res, post_data, 'card_number', 'Card Number')) {
        return
    } if (!helper.validateField(res, post_data, 'card_expiry_month', 'Card Expiry Month')) {
        return
    } if (!helper.validateField(res, post_data, 'card_expiry_year', 'Card Expiry Year')) {
        return
    } if (!helper.validateField(res, post_data, 'card_cvc', 'Card CVC')) {
        return
    }

    PendingDentist.findById(req.params.pId, (err, pDentist) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (pDentist == null) {
                helper.sendError(res, "Wrong URL. PID doesn't belong to any record")
                return
            } else {
                Package.findById(pDentist.package, (err, package) => {
                    if (!helper.postQueryErrorOnly(err, res)) {
                        if (package == null) {
                            helper.sendError(res, "The selected package doesn't exist in the system anymore. Please update you package to continue.")
                            return
                        } else {
                            stripe.generateToken(post_data.card_number, post_data.card_expiry_month, post_data.card_expiry_year, post_data.cvc, (err, token) => {
                                if (!helper.postQueryErrorOnly(err, res, "Unsuccessful payment - STRIPE: " + err)) {
                                    console.log(package)
                                    stripe.createCharge(token.id, package.price * 100, 'Registeration Payment for ' + pDentist.email + ' and package ' + package.name, (err, charge) => {
                                        if (!helper.postQueryErrorOnly(err, res, "Unsuccessful payment - STRIPE: " + err)) {

                                            unhashed_pwd = helper.generateRandomString(8)
                                            pwd = bcrypt.hashSync(unhashed_pwd, 10)

                                            dentist = new Dentist({
                                                'email': pDentist.email,
                                                'pwd': pwd,
                                                'first_ready': false
                                            })

                                            dentist.save((err) => {
                                                if (!helper.postQueryErrorOnly(err, null)) {
                                                    pDentist.remove()
                                                    email.sendDefaultEmail(dentist.email, 'Your acount is created successfully', 'email : ' + dentist.email + ' password : ' + unhashed_pwd, (err, info) => {
                                                        if (!helper.postQueryErrorOnly(err, info)) {
                                                            helper.sendSuccess(res, "Successfull Payment! Your shiny new credentials are sent to your email")
                                                            return
                                                        }
                                                    })
                                                }
                                            })

                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }
        }
    })
})

router.post('/login', (req, res) => {
    var post_data = req.body
    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
        return
    }

    Dentist.find({ 'email': post_data['email'] }, (err, dentists) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            // console.log(dentistss)
            if (dentists.length == 0) {
                helper.sendError(res, 'Wrong/ Unknown Email or Password')
                return
            } else {
                dentist = dentists[0]
                const match = bcrypt.compareSync(post_data.pwd, dentist.pwd);
                console.log(match)
                //Hashed check here #TODO
                if (match) {
                    new_token = helper.generateRandomString(15)
                    dentist.access_token = new_token
                    dentist.save((err, result) => {
                        if (!helper.postQueryErrorOnly(err, res)) {
                            dentist.pwd = null
                            helper.sendSuccess(res, dentist)
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

router.post('/reset-password', (req, res) => {
    var post_data = req.body
    if (!helper.validateField(res, post_data, 'email', 'Email')) {
        return
    }
    Dentist.findOne({ 'email': post_data.email }, (err, dentist) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (dentist == null) {
                helper.sendSuccess(res, "This email is not associated with any dentist.")
                return
            } else {
                if (dentist.first_ready == true) {
                    unhashed_pwd = helper.generateRandomString(8)
                    pwd = bcrypt.hashSync(unhashed_pwd, 10)
                    dentist.pwd = pwd
                    dentist.save((err) => {
                        if (!helper.postQueryErrorOnly(err, res)) {
                            email.sendDefaultEmail(dentist.email, "You password was reset.", "New password : " + unhashed_pwd, (err, info) => {
                                if (!helper.postQueryErrorOnly(err, info)) {
                                    helper.sendSuccess(res, "Email sent.")
                                    return
                                }
                            })
                        }
                    })
                } else {
                    helper.sendError(res, "Account not set up yet.")
                    return
                }
            }
        }
    })

})

router.post('/setup', (req, res) => {

    if (!req.headers.hasOwnProperty('authorization') || req.headers.authorization == '') {
        helper.sendErrorWCode(res, "No authorization found", 401)
        return
    }

    access_token = req.headers.authorization
    Dentist.findOne({ 'access_token': access_token }, (err, dentist) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (dentist == null) {
                helper.sendErrorWCode(res, "Please log in again", 440)
                return
            } else {
                if (dentist.first_ready == true) {
                    helper.sendError(res, "Account already set up. Please use /update endpoint.")
                    return
                } else {


                    var post_data = req.body;

                    if (!helper.validateField(res, post_data, 'company_name', 'Company Name')) {
                        return
                    } if (!helper.validateField(res, post_data, 'company_phone', 'Company Phone')) {
                        return
                    } if (!helper.validateField(res, post_data, 'office_address', 'Office Address')) {
                        return
                    } if (!helper.validateField(res, post_data, 'hours', 'Hours of operations')) {
                        return
                    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
                        return
                    } if (!helper.validateField(res, post_data, 'conf_pwd', 'Confirm Password')) {
                        return
                    }

                    if (post_data.pwd != post_data.conf_pwd && post_data.pwd.length < 8) {
                        helper.sendError(res, 'Password and Confirm Password do not match')
                        return
                    }


                    dentist.company_name = post_data.company_name
                    dentist.company_phone = post_data.company_phone
                    dentist.office_address = post_data.office_address
                    dentist.hours = post_data.hours
                    dentist.pwd = bcrypt.hashSync(post_data.pwd, 10)
                    dentist.first_ready = true
                    dentist.access_token = null


                    if (!helper.validateFieldWOError(post_data, 'rcry_email')) {
                        dentist.rcry_email = post_data.rcry_email
                    }
                    if (!helper.validateFieldWOError(post_data, 'other_email')) {
                        dentist.other_email = post_data.other_email
                    }

                    dentist.save((err) => {
                        if (!helper.postQueryErrorOnly(err, res)) {
                            helper.sendSuccess(res, "Account successfully set up. Please log in again")
                            return
                        }
                    })
                }
            }
        }
    })
})

module.exports = router