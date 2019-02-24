var express = require('express');
var router = express.Router();

var pagesRoute = '';
var pagesControllerPath = base_path + '/app/src/controllers/pages';

/* Api Routes Start */
router.use(pagesRoute, require(pagesControllerPath + '/defaultController'));
/* Api Routes End */


module.exports = router