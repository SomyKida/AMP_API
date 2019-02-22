var express = require('express');
var router = express.Router();

var apiRoute = '';
var apiControllerPath = base_path + '/app/src/controllers/api';

/* Api Routes Start */
router.use(apiRoute + '/auth', require(apiControllerPath + '/AuthController'));
/* Api Routes End */


module.exports = router