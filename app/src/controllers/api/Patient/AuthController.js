/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
var bcrypt = require('bcrypt');
var fs = require('fs');

/* Custom Imports */
var Patient = require(base_path + '/app/src/models/Dentist')

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
    } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
        return
    } if (!helper.validateField(res, post_data, 'conf_pwd', 'Confirm Password')) {
        return
    }

    if (post_data.pwd != post_data.conf_pwd) {
        helper.sendError(res, 'Password and Confirm Password do not match')
        return
    }

    activation = helper.generateRandomString('15')

    patient = new patient({
        email: post_data.email,
        dob: post_data.dob,
        phone: post_data.phone,
        address: post_data.address,
        patient_type: post_data.patient_type,
        pwd: bcrypt.hashSync(post_data.pwd, 10),
        activation: activation
    })


    //Better to get every collection in each function, globals will stay in memory - Don't globalize 
    Patient.find({ 'email': post_data.email }, (err, patients) => {
        if (err) {
            console.log(err)
            helper.sendErrorWCode(res, err, 500)
            return
        } else {
            console.log(patients)
            if (patients.length > 0) {
                helper.sendError(res, 'This email is already taken')
                return
            } else {
                patient.save((err, result) => {
                    if (err) {
                        console.log(err)
                        helper.sendErrorWCode(res, err, 500)
                        return
                    } else {

                        email.sendDefaultEmail(post_data.email, 'Account Verification Link', email.getHtmlDynamicLinkForPayment(base_url + consts.patient_activation_link + activation), (err, info) => {
                            if (!helper.postQueryErrorOnly(err, res)) {
                                patient.pwd = null
                                helper.sendSuccess(res, patient)
                                return
                            }
                        })


                    }
                })
            }
        }
    })
})

router.get('/activation/:code', (req, res) => {
    Patient.findOne({ 'activation': req.params.code }, (err, patient) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (patient == null) {
                helper.sendError(res, "Expired Link.")
                return
            } else {
                patient.first_ready = true
                patient.activation = ''
                patient.save((err) => {
                    if (!helper.postQueryErrorOnly(err, res)) {
                        helper.sendSuccess(res, "You can now log in.")
                        return
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

    Patient.find({ 'email': post_data['email'] }, (err, patients) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (patients.length == 0) {
                helper.sendError(res, 'Wrong/ Unknown Email or Password')
                return
            } else {
                patient = patients[0]
                const match = bcrypt.compare(post_data.pwd, patient.pwd);
                //Hashed check here #TODO
                if (match) {
                    if (patient.first_ready == false) {
                        helper.sendError(res, "Account not activated yet. Check your email or check resend api.")
                        return
                    } else {
                        new_token = helper.generateRandomString(15)
                        patient.access_token = new_token
                        patient.save((err, result) => {
                            if (!helper.postQueryErrorOnly(err, res)) {
                                patient.pwd = null
                                helper.sendSuccess(res, patient)
                                return
                            }
                        })
                    }
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
    Patient.findOne({ 'email': post_data.email }, (err, patient) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (patient == null) {
                helper.sendSuccess(res, "This email is not associated with any patient.")
                return
            } else {
                if (patient.first_ready == true) {
                    unhashed_pwd = helper.generateRandomString(8)
                    pwd = bcrypt.hashSync(unhashed_pwd, 10)
                    patient.pwd = pwd
                    patient.save((err) => {
                        if (!helper.postQueryErrorOnly(err, res)) {
                            email.sendDefaultEmail(patient.email, "You password was reset.", "New password : " + unhashed_pwd, (err, info) => {
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

router.post('/update', (req, res) => {
    post_data = req.body
    patient_middleware(req, res, (err, patient) => {
        if (!err) {
            var flag = false
            if (helper.validateFieldWOError(post_data, 'first_name')) {
                flag = true
                patient.first_name = post_data.first_name
            } if (helper.validateFieldWOError(post_data, 'last_name')) {
                flag = true
                patient.last_name = post_data.last_name
            } if (helper.validateFieldWOError(post_data, 'dob')) {
                flag = true
                patient.dob = post_data.dob
            } if (helper.validateFieldWOError(post_data, 'phone')) {
                flag = true
                patient.phone = post_data.phone
            } if (helper.validateFieldWOError(post_data, 'address')) {
                flag = true
                patient.address = post_data.address
            }

            if (flag == false) {
                helper.sendError(res, "Nothing to update");
                return
            } else {
                patient.save((err) => {
                    if (!helper.postQueryErrorOnly(err, res)) {
                        helper.sendSuccess(res, "Updated details")
                        return
                    }
                })
            }

        }
    })
})

router.post('/change-password', (req, res) => {
    post_data = req.body
    patient_middleware(req, res, (err, patient) => {
        if (!helper.validateField(res, post_data, 'old_pwd', 'Old Password')) {
            return
        } if (!helper.validateField(res, post_data, 'new_pwd', 'New Password')) {
            return
        } if (!helper.validateField(res, post_data, 'conf_pwd', 'Confirm Password')) {
            return
        }

        if (post_data.new_pwd != post_data.conf_pwd) {
            helper.sendError(res, "New and Confirm Password fields do not match.")
            return
        }

        const match = bcrypt.compare(patient.pwd, post_data.old_pwd)
        if (!match) {
            helper.sendError(res, "Old password doesnot match.")
            return
        } else {
            pwd = bcrypt.hashSync(post_data.new_pwd, 10)
            patient.pwd = pwd
            patient.access_token = ''
            patient.save((err) => {
                if (!helper.postQueryErrorOnly(err, res)) {
                    helper.sendSuccess(res, "Password Updated. Please log in again.")
                    return
                }

            })
        }

    })
})

module.exports = router
