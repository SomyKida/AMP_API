/* Dependencies */
var http = require('http');

var express = require('express');
var router = express.Router();
var helper = require(helper_path + '/helper');
// var bcrypt  = require('bcrypt');
var fs = require('fs');

var controller_name = 'default';
var controller_default_path = '/app/src/pages/';
var combined_absolute_path = base_path + controller_default_path



router.get('/login', (req, res, next) => {
  var render_data = {}
  render_data.data = {}
  const user_types = ['User', 'Dentist', 'Admin']
  render_data.data.user_types = user_types

  render_data.title = "Login"
  res.render(combined_absolute_path + 'login', render_data);
})

router.get('/signup', (req, res, next) => {
  var render_data = {}
  render_data.data = {}
  const user_types = ['User', 'Dentist', 'Admin']
  render_data.data.user_types = user_types

  render_data.title = "Sign Up"
  res.render(combined_absolute_path + 'signup', render_data);
})


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////PLEASE REMOVE AND USE PURE API METHODS ONLY//////
////////USED FOR DEMO PURPOSE - CLEAN UP ASAP////////////
router.post('/signup', (req, res, next) => {

  var post_data = req.body;
  console.log(req.body)
  errors = []
  if (!post_data.hasOwnProperty('email') || post_data['email'] == '') {
    errors.push('Email field can not be left empty')
  }
  if (!post_data.hasOwnProperty('phone') || post_data['phone'] == '') {
    errors.push('Phone field can not be left empty')
  }
  if (!post_data.hasOwnProperty('pwd') || post_data['pwd'] == '') {
    errors.push('Password field can not be left empty')

  }
  if (!post_data.hasOwnProperty('conf_pwd') || post_data['conf_pwd'] == '') {
    errors.push('Confirm Password field can not be left empty')

  }
  if (!post_data.hasOwnProperty('address') || post_data['address'] == '') {
    errors.push('Address field can not be left empty')

  }
  if (!post_data.hasOwnProperty('dob') || post_data['dob'] == '') {
    errors.push('Date of Birth field can not be left empty')

  }
  if (!post_data.hasOwnProperty('user_type') || post_data['user_type'] == '') {
    errors.push('User Type field can not be left empty')
  }
  render_data = {}
  render_data.data = {}
  const user_types = ['User', 'Dentist', 'Admin']
  render_data.data.user_types = user_types

  if (errors.length > 0) {
    render_data.errors = errors
    res.render(combined_absolute_path + 'signup', render_data)
    return
  }



  if (post_data.pwd != post_data.conf_pwd) {
    errors.push('Passwords do not match')
    render_data.errors = errors
    res.render(combined_absolute_path + 'signup', render_data)
    return
  }


  console.log(errors)
  // will create models later on  #TODO

  user = {}
  user['email'] = post_data.email
  user['dob'] = post_data.dob
  user['phone'] = post_data.phone
  user['address'] = post_data.address
  user['user_type'] = post_data.user_type

  // Need to hash it using bcrypt + validation  #TODO
  user['pwd'] = post_data.pwd


  user['access_token'] = helper.generateRandomString('15')

  //Better to get every collection in each function, globals will stay in memory - Don't globalize 
  user_collection = connection.collection('users')

  user_collection.find({ 'email': user['email'] }).toArray((err, users) => {
    if (err) {
      console.log(err)
      helper.sendErrorWCode(res, err, 500)
      return
    } else {
      console.log(users)
      if (users.length > 0) {
        errors.push('This email has already been taken')
        render_data.errors = errors
        res.render(combined_absolute_path + 'signup', render_data)
        return
      } else {
        user_collection.insertOne(user, (err, result) => {
          if (err) {
            console.log(err)
            helper.sendErrorWCode(res, err, 500)
            return
          } else {
            user['pwd'] = null
            render_data.data = {}
            render_data.data.user = user
            res.render(combined_absolute_path + 'index', render_data)
            return
          }
        })
      }
    }
  })
})


router.post('/signin', (req, res, next) => {

  var post_data = req.body;
  if (!helper.validateField(res, post_data, 'email', 'Email')) {
    return
  } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
    return
  }

  //Better to get every collection in each function, globals will stay in memory - Don't globalize 
  user_collection = connection.collection('users')

  user_collection.find({ 'email': post_data['email'] }).toArray((err, users) => {
    if (err) {
      console.log(err)
      helper.sendErrorWCode(res, err, 500)
      return
    } else {
      console.log(users)
      if (users.length == 0) {
        helper.sendError(res, 'Wrong/ Unknown Email or Password')
        return
      } else {
        user = users[0]
        //Hashed check here #TODO
        if (user.pwd == post_data.pwd) {
          new_token = helper.generateRandomString(15)
          user_collection.updateOne({ id: user.id }, { $set: { access_token: new_token } }, (err, result) => {
            if (err) {
              console.log(err)
              helper.sendErrorWCode(res, err, 500)
              return
            } else {
              user['access_token'] = new_token
              user['pwd'] = null


              render_data = {}
              render_data.data = {}
              render_data.data['user'] = user
              res.render(combined_absolute_path + 'index', render_data)
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

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

module.exports = router