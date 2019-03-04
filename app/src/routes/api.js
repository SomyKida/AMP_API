var express = require('express');
var router = express.Router();

var apiRoute = '';
var apiControllerPath = base_path + '/app/src/controllers/api';
var typeAuth = '/auth'
var typeSetup = '/setup'
var typeDentist = '/dentist'
var typePatient = '/patient'
var typeAdmin = '/admin'
/* Api Routes Start */
router.use(apiRoute + typeAuth + typeDentist, require(apiControllerPath + typeAuth + '/DentistController'))
router.use(apiRoute + typeAuth + typeAdmin, require(apiControllerPath + typeAuth + '/AdminController'))
router.use(apiRoute + typeAuth + typeDentist, require(apiControllerPath + typeAuth + '/UserController'))
router.use(apiRoute + typeSetup, require(apiControllerPath + typeSetup + '/SetupController'))

/* Api Routes End */


module.exports = router