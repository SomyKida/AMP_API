var express = require('express');
var router = express.Router();

var apiRoute = '';
var apiControllerPath = base_path + '/app/src/controllers/api';
var typeAuth = '/auth'
var typeDashboard = '/dashboard'
var typeSetup = '/system'
var typeDentist = '/dentist'
var typePatient = '/patient'
var typeAdmin = '/admin'
/* Api Routes Start */
router.use(apiRoute + typeDentist + typeAuth, require(apiControllerPath + typeDentist + '/AuthController'))
router.use(apiRoute + typeDentist + typeDashboard, require(apiControllerPath + typeDentist + '/DashboardController'))
router.use(apiRoute + typeAdmin + typeAuth, require(apiControllerPath + typeAdmin + '/AuthController'))
router.use(apiRoute + typePatient + typeAuth, require(apiControllerPath + typePatient + '/AuthController'))
router.use(apiRoute + typeSetup, require(apiControllerPath + typeSetup + '/SetupController'))

/* Api Routes End */


module.exports = router