var express = require('express');
var router = express.Router();

var pagesRoute = '';
var pagesControllerPath = base_path + '/app/src/controllers/pages';
var typeAuth = '/auth'
var typeSetup = '/system'
var typeDentist = '/dentist'
var typePatient = '/patient'
var typeAdmin = '/admin'

/* Api Routes Start */
router.use(pagesRoute, require(pagesControllerPath + '/defaultController'));
router.use(pagesRoute + typeDentist + typeAuth, require(pagesControllerPath + typeDentist + '/AuthController'))
/* Api Routes End */


module.exports = router