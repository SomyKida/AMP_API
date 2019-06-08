/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
var email = require(helper_path + '/email');
var bcrypt = require('bcrypt');
var fs = require('fs');

/* Custom Imports */
var Package = require(base_path + '/app/src/models/Package')
var Dentist = require(base_path + '/app/src/models/Dentist')
var Theme = require(base_path + '/app/src/models/Theme')
var ServiceProvider = require(base_path + '/app/src/models/ServiceProvider')
var ServiceRequest = require(base_path + '/app/src/models/ServiceRequest')


/* File Consts */
var controller_name = 'setup';

router.get('/json', (req, res) => {
  if (req.query.msg == undefined) {
    req.query.msg = ''
  }

  helper.sendError(res, req.query.msg)
})
router.get('/setup-db', (req, res) => {

  Package.deleteMany({}, (err) => {
    helper.postQueryDefault(err, res, 'Everything set up.')
  })

})
router.get('/get-packages', (req, res) => {

  Package.find({}, (err, result) => {
    helper.postQueryDefault(err, res, result)
  })

})
router.post('/add-package', (req, res) => {

  var post_data = req.body

  if (!helper.validateField(res, post_data, 'name', 'Name')) {
    return
  } if (!helper.validateField(res, post_data, 'price', 'Price')) {
    return
  }

  pack = new Package({
    'name': post_data.name,
    'price': post_data.price
  })

  pack.save((err, result) => {
    helper.postQueryDefault(err, res, 'Package inserted.')
    return
  })

})
router.post('/add-theme', (req, res) => {
  var post_data = req.body

  if (!helper.validateField(res, post_data, 'name', 'Name'))
    return

  theme = new Theme({
    'name': post_data.name,
  })

  theme.save((err, result) => {
    helper.postQueryDefault(err, res, 'Theme inserted.')
    return
  })
})
router.get('/get-themes', (req, res) => {

  Theme.find({}, (err, result) => {
    helper.postQueryDefault(err, res, result)
  })

})
router.post('/add-service', (req, res) => {
  var post_data = req.body

  if (!helper.validateField(res, post_data, 'name', 'Name'))
    return

  service = new ServiceProvider({
    'name': post_data.name,
  })

  service.save((err, result) => {
    helper.postQueryDefault(err, res, 'Service Provider inserted.')
    return
  })
})
router.get('/get-services', (req, res) => {

  ServiceProvider.find({}, (err, result) => {
    helper.postQueryDefault(err, res, result)
  })

})
router.post('/add-service-request', (req, res) => {
  var post_data = req.body

  if (!helper.validateField(res, post_data, 'name', 'Name'))
    return
  if (!helper.validateField(res, post_data, 'email', 'Email'))
    return

  service = new ServiceRequest({
    'name': post_data.name,
    'email': post_data.email,
  })

  service.save((err, result) => {
    email.sendDefaultEmail('support@appmypractice.com', 'New Service Request', 'Service Name : ' + post_data.name + ' Email : ' + post_data.email, (err, info) => {
      if (err) {
        console.log(err)
      }
    })
    helper.postQueryDefault(err, res, 'Feedback Saved.')
    return
  })
})
router.post('/remove-dentist', (req, res) => {
  var post_data = req.body

  if (!helper.validateField(res, post_data, 'email', 'Email'))
    return

  Dentist.remove({ 'email': post_data.email }, (err) => {
    if (err)
      console.log(err)
    else {
      helper.sendError(res, "If email existed before, it doesn't now")
      return
    }
  })
})

module.exports = router
