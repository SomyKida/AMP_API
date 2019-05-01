/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
var bcrypt = require('bcrypt');
var fs = require('fs');
var mongoose = require('mongoose')
/* Custom Imports */
var Package = require(base_path + '/app/src/models/Package')
var Admin = require(base_path + '/app/src/models/Admin')

/* File Consts */
var controller_name = 'auth';

router.post('/login', (req, res) => {
  var post_data = req.body
  if (!helper.validateField(res, post_data, 'email', 'Email')) {
    return
  } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
    return
  }

  Admin.find({ 'email': post_data['email'] }, (err, admins) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (admins.length == 0) {
        helper.sendError(res, 'Wrong/ Unknown Email or Password')
        return
      } else {
        admin = admins[0]
        const match = bcrypt.compare(post_data.pwd, admin.pwd);
        //Hashed check here #TODO
        if (match) {
          new_token = helper.generateRandomString(15)
          admin.access_token = new_token
          admin.save((err, result) => {
            if (!helper.postQueryErrorOnly(err, res)) {
              admin.pwd = null
              helper.sendSuccess(res, admin)
              return
            }
          })
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
  Admin.findOne({ 'email': post_data.email }, (err, admin) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (admin == null) {
        helper.sendSuccess(res, "This email is not associated with any admin.")
        return
      } else {
        if (Admin.first_ready == true) {
          unhashed_pwd = helper.generateRandomString(8)
          pwd = bcrypt.hashSync(unhashed_pwd, 10)
          admin.pwd = pwd
          admin.save((err) => {
            if (!helper.postQueryErrorOnly(err, res)) {
              email.sendDefaultEmail(admin.email, "You password was reset.", "New password : " + unhashed_pwd, (err, info) => {
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

//legacy
router.post('/setup', (req, res) => {
  if (!req.headers.hasOwnProperty('authorization') || req.headers.authorization == '') {
    helper.sendErrorWCode(res, "No authorization found", 401)
    return
  }

  access_token = req.headers.authorization
  Admin.findOne({ 'access_token': access_token }, (err, admin) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (admin == null) {
        helper.sendErrorWCode(res, "Please log in again", 440)
        return
      } else {
        if (Admin.first_ready == true) {
          helper.sendError(res, "Account already set up. Please use /update endpoint.")
          return
        } else {


          var post_data = req.body;

          if (!helper.validateField(res, post_data, 'first_name', 'First Name')) {
            return
          } if (!helper.validateField(res, post_data, 'last_name', 'Last Name')) {
            return
          }

          if (post_data.pwd != post_data.conf_pwd && post_data.pwd.length < 8) {
            helper.sendError(res, 'Password and Confirm Password do not match')
            return
          }



          admin.pwd = bcrypt.hashSync(post_data.pwd, 10)
          admin.first_ready = true
          admin.access_token = null
          admin.first_name = post_data.first_name
          admin.last_name = post_data.last_name


          if (helper.validateFieldWOError(post_data, 'rcry_email')) {
            admin.rcry_email = post_data.rcry_email
          }
          if (helper.validateFieldWOError(post_data, 'other_email')) {
            admin.other_email = post_data.other_email
          }

          admin.save((err) => {
            if (!helper.postQueryErrorOnly(err, res)) {
              helper.sendSuccess(res, "Account successfully set up. Please log in again")
              return
            }
          })
        }
      }
    }
  })
})

router.post('/update', (req, res) => {
  post_data = req.body
  admin_middleware(req, res, (err, admin) => {
    if (!err) {
      var flag = false
      if (helper.validateFieldWOError(post_data, 'first_name')) {
        flag = true
        admin.first_name = post_data.first_name
      } if (helper.validateFieldWOError(post_data, 'last_name')) {
        flag = true
        admin.last_name = post_data.last_name
      }



      if (flag == false) {
        helper.sendError(res, "Nothing to update");
        return
      } else {
        admin.save((err) => {
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
  admin_middleware(req, res, (err, admin) => {
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

    const match = bcrypt.compare(admin.pwd, post_data.old_pwd)
    if (!match) {
      helper.sendError(res, "Old password doesnot match.")
      return
    } else {
      pwd = bcrypt.hashSync(post_data.new_pwd, 10)
      admin.pwd = pwd
      admin.access_token = ''
      admin.save((err) => {
        if (!helper.postQueryErrorOnly(err, res)) {
          helper.sendSuccess(res, "Password Updated. Please log in again.")
          return
        }

      })
    }

  })
})


module.exports = router
