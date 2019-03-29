var express = require('express');
var router = express.Router();
var apiRoute = '';
var apiControllerPath = base_path + '/app/src/controllers/api';
var typeAuth = '/auth'
var typeDashboard = '/Dashboard'
var typeSetup = '/System'
var typeDentist = '/Dentist'
var typePatient = '/Patient'
var typeAdmin = '/Admin'

var Admin = require('../models/Admin')
var Dentist = require('../models/Dentist')

/* Api Routes Start */
router.use(apiRoute + typeDentist + typeAuth, require(apiControllerPath + typeDentist + '/AuthController'))
router.use(apiRoute + typeDentist + typeDashboard, require(apiControllerPath + typeDentist + '/DashboardController'))
router.use(apiRoute + typeAdmin + typeAuth, require(apiControllerPath + typeAdmin + '/AuthController'))
router.use(apiRoute + typePatient + typeAuth, require(apiControllerPath + typePatient + '/AuthController'))
router.use(apiRoute + typeSetup, require(apiControllerPath + typeSetup + '/SetupController'))
/* Api Routes End */





admin_middleware = function (req, res, _callback) {
    if (!req.headers.hasOwnProperty('content-type') || req.headers['content-type'] != 'application/json') {
        helper.sendErrorWCode(res, "Unsupported Content Type. Please update request headers to application/json", 403)
        _callback(401, null)
        return
    }
    if (!req.headers.hasOwnProperty('authorization') || req.headers.authorization == '') {
        helper.sendErrorWCode(res, "No authorization found", 401)
        _callback(401, null)
        return
    }

    access_token = req.headers.authorization
    Admin.findOne({ 'access_token': access_token }, (err, admin) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (admin == null) {
                helper.sendErrorWCode(res, "Please log in again", 440)
                _callback(440, null)
                return
            } else {
                if (Admin.first_ready == false) {
                    helper.sendError(res, "Account already set up. Please use /update endpoint.")
                    _callback('Already set up', null)
                    return
                } else {
                    _callback(null, admin)
                    return
                }
            }
        }
    })
}

common_middleware = function (req, res, _callback) {
    if (!req.headers.hasOwnProperty('content-type') || req.headers['content-type'] != 'application/json') {
        helper.sendErrorWCode(res, "Unsupported Content Type. Please update request headers to application/json", 403)
        _callback(401, null)
        return
    } else {
        _callback(null, true)
    }
}

dentist_middlewareware = function (req, res, _callback) {
    // if (!req.headers.hasOwnProperty('content-type') || req.headers['content-type'] != 'application/json') {
    //     if (req.headers['content-type'] != 'multipart/form-data') {
    //         helper.sendErrorWCode(res, "Unsupported Content Type. Please update request headers to application/json", 403)
    //         _callback(401, null)
    //         return
    //     }
    // }
    if (!req.headers.hasOwnProperty('authorization') || req.headers.authorization == '') {
        helper.sendErrorWCode(res, "No authorization found", 401)
        _callback(401, null)
        return
    }
    access_token = req.headers.authorization
    Dentist.findOne({ 'access_token': access_token }, (err, dentist) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (dentist == null) {
                helper.sendErrorWCode(res, "Please log in again", 440)
                _callback(440, null)
                return
            } else {
                if (dentist.first_ready == false) {
                    helper.sendError(res, "Account already set up. Please use /update endpoint.")
                    _callback('Already set up', null)
                    return
                } else {
                    _callback(null, dentist)
                    return
                }
            }
        }
    })
}

patient_middleware = function (req, res, _callback) {
    if (!req.headers.hasOwnProperty('content-type') || req.headers['content-type'] != 'application/json') {
        helper.sendErrorWCode(res, "Unsupported Content Type. Please update request headers to application/json", 403)
        _callback(401, null)
        return
    }
    if (!req.headers.hasOwnProperty('authorization') || req.headers.authorization == '') {
        helper.sendErrorWCode(res, "No authorization found", 401)
        _callback(401, null)
        return
    }

    access_token = req.headers.authorization
    Patient.findOne({ 'access_token': access_token }, (err, patient) => {
        if (!helper.postQueryErrorOnly(err, res)) {
            if (patient == null) {
                helper.sendErrorWCode(res, "Please log in again", 440)
                _callback(440, null)
                return
            } else {
                if (patient.first_ready == false) {
                    helper.sendError(res, "Account already set up. Please use /update endpoint.")
                    _callback('Already set up', null)
                    return
                } else {
                    _callback(null, patient)
                    return
                }
            }
        }
    })
}

module.exports = router