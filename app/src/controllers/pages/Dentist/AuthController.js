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
var Package = require(base_path + '/app/src/models/Dentist')

/* File Consts */
var controller_name = 'auth';
var controller_default_path = '/app/src/pages/';
var combined_absolute_path = base_path + controller_default_path

router.get('/pay/:pId', (req, res) => {

    helper.sendSuccess(res, `You have reached the development page of the redirection link. This means that the redirection link works. When client side is ready, email link will redirect to the client side url with the pending dentist id appended in the URL. Front end will then send this ID, with Credit Card Details, then if a charge is successfull, an email with creds will be sent. But this is just a mere representation of redirection to app not the backend server (which is the case right now)`)

})

module.exports = router