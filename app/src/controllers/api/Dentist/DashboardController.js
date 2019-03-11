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

router.post('/', (req, res) => {
    //MIDDLEWARE HERE
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
                if (dentist.first_ready == false) {
                    helper.sendError(res, "Account not set up yet.")
                    return
                } else {
                    helper.sendSuccess(res, "Success!")
                    return;
                }
            }
        }
    })

})

module.exports = router