/* Dependencies */
var http = require('http');
const assert = require('assert');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var passport = require('passport')
const fs = require('fs-extra')

/* Custom Imports */
var consts = require(base_path + '/app/config/constants')
var Dentist = require(base_path + '/app/src/models/Dentist')
var Admin = require(base_path + '/app/src/models/Admin')
var PendingDentist = require(base_path + '/app/src/models/PendingDentist')
var Package = require(base_path + '/app/src/models/Package')
var Theme = require(base_path + '/app/src/models/Theme')
var ServiceProvider = require(base_path + '/app/src/models/ServiceProvider')
var stripe = require(base_path + '/app/config/stripe')
var messages = require(base_path + '/app/config/messages')
var system = 'system'

//legacy
const v2 = '/v2'

//new
const v3 = '/v3'

/* File Consts */
var controller_name = 'auth';

router.post('/pre-register', (req, res) => {
  post_data = req.body

  if (!helper.validateField(res, post_data, 'email', 'Email')) {
    return
  } if (!helper.validateField(res, post_data, 'package', 'Package id')) {
    return
  }


  Dentist.findOne({ 'email': post_data.email }, (err, dentist) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (dentist != null) {
        helper.sendError(res, "An account with this email already exists.")
        return
      } else {
        Package.findById(post_data.package, (err, package) => {
          if (!helper.postQueryErrorOnly(err, res)) {
            if (package == null) {
              helper.sendError(res, "No such package found")
              return
            } else {
              PendingDentist.findOne({ 'email': post_data.email }, (err, pDentist) => {
                if (!helper.postQueryErrorOnly(err, res)) {

                  if (pDentist != null) {
                    helper.sendError(res, "This email is already pending registeration payment.")
                    return
                  } else {
                    pDentist = new PendingDentist({
                      'email': post_data.email,
                      'package': helper.getMongoId(post_data.package)
                    })
                    pDentist.save((err) => {
                      if (!helper.postQueryErrorOnly(err, res, "This email was successfully added to database but there was an error in dispatching the email.")) {
                        email.sendDefaultEmail(post_data.email, 'Payment Link', email.getHtmlDynamicLinkForPayment(base_url + consts.dentist_pay_link + pDentist), (err, info) => {
                          if (!helper.postQueryErrorOnly(err, res)) {
                            helper.sendSuccess(res, "An email with payment details has been sent to the provided email.")
                            return
                          }
                        })

                      }
                    })
                  }
                }
              })
            }
          }
        })
      }
    }
  })
})

router.post('/pay/:pId', (req, res) => {
  var post_data = req.body;

  if (!helper.validateField(res, post_data, 'card_number', 'Card Number')) {
    return
  } if (!helper.validateField(res, post_data, 'card_expiry_month', 'Card Expiry Month')) {
    return
  } if (!helper.validateField(res, post_data, 'card_expiry_year', 'Card Expiry Year')) {
    return
  } if (!helper.validateField(res, post_data, 'card_cvc', 'Card CVC')) {
    return
  }

  PendingDentist.findById(req.params.pId, (err, pDentist) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (pDentist == null) {
        helper.sendError(res, "Wrong URL. PID doesn't belong to any record")
        return
      } else {
        Package.findById(pDentist.package, (err, package) => {
          if (!helper.postQueryErrorOnly(err, res)) {
            if (package == null) {
              helper.sendError(res, "The selected package doesn't exist in the system anymore. Please update you package to continue.")
              return
            } else {
              stripe.generateToken(post_data.card_number, post_data.card_expiry_month, post_data.card_expiry_year, post_data.cvc, (err, token) => {
                if (!helper.postQueryErrorOnly(err, res, "Unsuccessful payment - STRIPE: " + err)) {
                  //console.log(package)
                  stripe.createCharge(token.id, package.price * 100, 'Registeration Payment for ' + pDentist.email + ' and package ' + package.name, (err, charge) => {
                    if (!helper.postQueryErrorOnly(err, res, "Unsuccessful payment - STRIPE: " + err)) {

                      unhashed_pwd = helper.generateRandomString(8)
                      pwd = bcrypt.hashSync(unhashed_pwd, 10)

                      dentist = new Dentist({
                        'email': pDentist.email,
                        'pwd': pwd,
                        'first_ready': false,
                        'package': pDentist.package
                      })

                      dentist.save((err) => {
                        if (!helper.postQueryErrorOnly(err, null)) {
                          pDentist.remove()
                          email.sendDefaultEmail(dentist.email, 'Your acount is created successfully', 'email : ' + dentist.email + ' password : ' + unhashed_pwd, (err, info) => {
                            if (!helper.postQueryErrorOnly(err, info)) {
                              helper.sendSuccess(res, "Successfull Payment! Your shiny new credentials are sent to your email")
                              return
                            }
                          })
                        }
                      })

                    }
                  })
                }
              })
            }
          }
        })
      }
    }
  })
})

router.post('/reset-password', (req, res) => {
  var post_data = req.body
  if (!helper.validateField(res, post_data, 'email', 'Email')) {
    return
  }
  Dentist.findOne({ 'email': post_data.email }, (err, dentist) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (dentist == null) {
        helper.sendSuccess(res, "This email is not associated with any dentist.")
        return
      } else {
        if (dentist.first_ready == true) {
          unhashed_pwd = helper.generateRandomString(8)
          pwd = bcrypt.hashSync(unhashed_pwd, 10)
          dentist.pwd = pwd
          dentist.save((err) => {
            if (!helper.postQueryErrorOnly(err, res)) {
              email.sendDefaultEmail(dentist.email, "You password was reset.", "New password : " + unhashed_pwd, (err, info) => {
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
  Dentist.findOne({ 'access_token': access_token }, (err, dentist) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      if (dentist == null) {
        helper.sendErrorWCode(res, "Please log in again", 440)
        return
      } else {
        if (dentist.first_ready == true) {
          helper.sendError(res, "Account already set up. Please use /update endpoint.")
          return
        } else {


          var post_data = req.body;

          if (!helper.validateField(res, post_data, 'company_name', 'Company Name')) {
            return
          } if (!helper.validateField(res, post_data, 'company_phone', 'Company Phone')) {
            return
          } if (!helper.validateField(res, post_data, 'office_address', 'Office Address')) {
            return
          } if (!helper.validateField(res, post_data, 'hours', 'Hours of operations')) {
            return
          } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
            return
          } if (!helper.validateField(res, post_data, 'conf_pwd', 'Confirm Password')) {
            return
          } if (!helper.validateField(res, post_data, 'first_name', 'First Name')) {
            return
          } if (!helper.validateField(res, post_data, 'last_name', 'Last Name')) {
            return
          }

          if (post_data.pwd != post_data.conf_pwd && post_data.pwd.length < 8) {
            helper.sendError(res, 'Password and Confirm Password do not match')
            return
          }


          dentist.company_name = post_data.company_name
          dentist.company_phone = post_data.company_phone
          dentist.office_address = post_data.office_address
          dentist.hours = JSON.stringify(post_data.hours)
          dentist.pwd = bcrypt.hashSync(post_data.pwd, 10)
          dentist.first_ready = true
          dentist.access_token = null
          dentist.first_name = post_data.first_name
          dentist.last_name = post_data.last_name


          if (helper.validateFieldWOError(post_data, 'rcry_email')) {
            dentist.rcry_email = post_data.rcry_email
          }
          if (helper.validateFieldWOError(post_data, 'other_email')) {
            dentist.other_email = post_data.other_email
          }

          dentist.save((err) => {
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
  dentist_middlewareware(req, res, (err, dentist) => {
    if (!err) {
      var flag = false
      if (helper.validateFieldWOError(res, post_data, 'company_name')) {
        flag = true
        dentist.company_name = post_data.company_name
      } if (!helper.validateField(res, post_data, 'company_phone')) {
        flag = true
        dentist.company_phone = post_data.company_phone
      } if (!helper.validateField(res, post_data, 'office_address')) {
        flag = true
        dentist.office_address = post_data.office_address
      } if (!helper.validateField(res, post_data, 'hours')) {
        flag = true
        dentist.hours = post_data.hours
      } if (helper.validateFieldWOError(post_data, 'rcry_email')) {
        flag = true
        dentist.rcry_email = post_data.rcry_email
      } if (helper.validateFieldWOError(post_data, 'other_email')) {
        flag = true
        dentist.other_email = post_data.other_email
      } if (helper.validateFieldWOError(post_data, 'template')) {
        flag = true
        dentist.template = post_data.template
      } if (helper.validateFieldWOError(post_data, 'first_name')) {
        flag = true
        dentist.first_name = post_data.first_name
      } if (helper.validateFieldWOError(post_data, 'last_name')) {
        flag = true
        dentist.last_name = post_data.last_name
      }



      if (flag == false) {
        helper.sendError(res, "Nothing to update");
        return
      } else {
        dentist.save((err) => {
          if (!helper.postQueryErrorOnly(err, res)) {
            helper.sendSuccess(res, "Updated details")
            return
          }
        })
      }

    }
  })
})

router.post('/incrementVersion', (req, res) => {
  post_data = req.body
  dentist_middlewareware(req, res, (err, dentist) => {
    if (!err) {

      if (dentist.version == undefined || dentist.version == null)
        dentist.version = 0
      dentist.version = dentist.version + 1
      dentist.save((err) => {
        if (!helper.postQueryErrorOnly(err, res)) {
          helper.sendSuccess(res, "Updated details")
          return
        }
      })


    }
  })
})

router.get('/getVersion', (req, res) => {
  post_data = req.body
  dentist_middlewareware(req, res, (err, dentist) => {
    if (dentist.version == null || dentist.version == undefined)
      dentist.version = 0
    if (!err) {
      helper.sendSuccess(res, { 'version': dentist.version })
    }
  })
})

router.post('/change-password', (req, res) => {
  post_data = req.body
  dentist_middlewareware(req, res, (err, dentist) => {
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

    const match = bcrypt.compare(dentist.pwd, post_data.old_pwd)
    if (!match) {
      helper.sendError(res, "Old password doesnot match.")
      return
    } else {
      pwd = bcrypt.hashSync(post_data.new_pwd, 10)
      dentist.pwd = pwd
      dentist.access_token = ''
      dentist.save((err) => {
        if (!helper.postQueryErrorOnly(err, res)) {
          helper.sendSuccess(res, "Password Updated. Please log in again.")
          return
        }

      })
    }

  })
})

router.post('/add-admins', (req, res) => {
  post_data = req.body
  dentist_middlewareware(req, res, (err, dentist) => {
    if (!helper.validateField(res, post_data, 'admins', 'Admins')) {
      return
    }

    var response = []
    var admin_ids = []
    var sync = post_data.admins.length

    post_data.admins.forEach(new_admin => {
      Admin.findOne({ 'email': new_admin.email }, (err, result) => {
        if (err) {
          response.push({ 'email': new_admin.email, 'error': err })
          sync--
          isAllDone()
        } else {
          if (result != null) {
            response.push({ 'email': new_admin.email, 'error': "Already exists!" })
            sync--
            isAllDone()
          } else {

            pwd = helper.generateRandomString(8);
            admin = new Admin({
              pwd: bcrypt.hashSync(pwd, 10),
              designation: new_admin.designation,
              email: new_admin.email
            })

            admin.save((err, info) => {
              if (err) {
                response.push({ 'email': new_admin.email, 'error': err })
                sync--
                isAllDone()
              } else {
                admin_ids.push(info.id)
                console.log(info.id)
                email.sendDefaultEmail(new_admin.email, 'Your Admin Account was created by ' + dentist.first_name + ' ' + dentist.last_name + ' successfully', 'email : ' + new_admin.email + ' password : ' + pwd, (err, info) => {
                  if (err) {
                    response.push({ 'email': new_admin.email, 'error': err })
                  } else {
                    response.push({ 'email': new_admin.email, 'success': "Admin can log in. Password sent to the provided email." })
                  }
                  sync--
                  isAllDone()
                })
              }
            })

          }
        }
      })

    })

    function isAllDone() {
      //console.log(response)
      if (sync == 0) {
        if (admin_ids.length == 0)
          helper.sendError(res, response)
        else {
          admin_ids.forEach(id => {
            dentist.admins.push(id)
          })
          dentist.save((err) => {
            if (err) {
              helper.sendError(res, "Unable to update dentist details : " + err + " but" + response)
              return
            } else {
              helper.sendSuccess(res, response)
              return
            }
          })
        }
      }
    }
  })
})

router.post('/login', (req, res) => {
  var post_data = req.body
  if (!helper.validateField(res, post_data, 'email', 'Email')) {
    return
  } if (!helper.validateField(res, post_data, 'pwd', 'Password')) {
    return
  }

  Dentist.find({ 'email': post_data['email'] }, (err, dentists) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      //console.log(dentists)
      if (dentists.length == 0) {
        helper.sendError(res, 'Wrong/ Unknown Email or Password')
        return
      } else {
        dentist = dentists[0]
        const match = bcrypt.compareSync(post_data.pwd, dentist.pwd);
        //console.log(match)
        //Hashed check here #TODO
        if (match) {
          new_token = helper.generateRandomString(15)
          dentist.access_token = new_token
          dentist.save((err, result) => {
            if (!helper.postQueryErrorOnly(err, res)) {
              dentist.pwd = null
              helper.sendSuccess(res, dentist)
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

router.post(v2 + '/register', (req, res) => {

  common_middleware(req, res, (err) => {

    if (!err) {

      fields_required = [
        'name',
        'address',
        'zip',
        'email',
        'phone',
        'package'
      ]
      post_data = req.body

      // TODO : PACKAGE ID VALIDATION FOR MONGOOSE

      if (!helper.validateFieldAuto(res, post_data, fields_required))
        return

      Dentist.findOne({ 'email': post_data.email }, (err, dentist) => {
        // console.log(dentist)
        if (!helper.postQueryErrorOnly(err, res)) {
          if (dentist != null) {
            helper.sendError(res, "An account with this email already exists.")
            return
          } else {
            Package.findById(post_data.package, (err, package) => {
              if (!helper.postQueryErrorOnly(err, res)) {
                if (package == null) {
                  helper.sendError(res, "No such package found")
                  return
                } else {

                  unhashed_pwd = helper.generateRandomString(8)
                  pwd = bcrypt.hashSync(unhashed_pwd, 10)

                  dentist = new Dentist({
                    'email': post_data.email,
                    'address': post_data.address,
                    'unit': post_data.unit,
                    'zip': post_data.zip,
                    'name': post_data.name,
                    'phone': post_data.phone,
                    'package': post_data.package,
                    'first_ready': true,
                    'pwd': pwd

                  })

                  dentist.save((err) => {
                    if (!helper.postQueryErrorOnly(err, null)) {
                      helper.sendSuccess(res, dentist)
                    }
                  })
                  email.sendDefaultEmail(dentist.email, 'Your acount is created successfully', 'email : ' + dentist.email + ' password : ' + unhashed_pwd, (err, info) => {
                    if (err) {
                      console.log(err)
                    }
                  })
                  return
                }
              }
            })
          }
        }
      })
    }
  })

})

router.post(v2 + '/pay-init', (req, res) => {

  dentist_middlewareware(req, res, (err, dentist) => {

    if (!err) {
      fields_required = [
        'card_number',
        'card_expiry_year',
        'card_expiry_month',
        'card_cvc'
      ]

      post_data = req.body

      if (!helper.validateFieldAuto(res, post_data, fields_required))
        return

      if (!dentist.email_verified) {
        helper.sendError(res, "Your email is not verified yet.")
      }

      if (dentist.init_payment) {
        helper.sendError(res, "Your initial payment has been already made. If renewing your monthy package then this is the wrong endpoint")
        return
      }
      Package.findOne({ 'name': dentist.package }, (err, package) => {
        if (!helper.postQueryErrorOnly(err, res)) {
          if (package == null) {
            helper.sendError(res, "The selected package doesn't exist in the system anymore. Please update you package to continue.")
            return
          } else {
            stripe.generateToken(post_data.card_number, post_data.card_expiry_month, post_data.card_expiry_year, post_data.cvc, (err, token) => {
              if (!helper.postQueryErrorOnly(err, res, "Unsuccessful payment - STRIPE: " + err)) {
                //console.log(token)
                stripe.createCharge(token.id, package.price * 100, 'Registeration Payment for ' + dentist.email + ' and package ' + package.name, (err, charge) => {
                  if (!helper.postQueryErrorOnly(err, res, "Unsuccessful payment - STRIPE: " + err)) {
                    //console.log(charge)
                    dentist.init_payment = true
                    dentist.save((err) => {
                      if (!helper.postQueryErrorOnly(err, null)) {
                        helper.sendSuccess(res, "Successfull Payment! An email is also dispatched in an independent thread")
                      }

                    })
                    email.sendDefaultEmail(dentist.email, 'Your payment is successfull', (err, info) => {
                      if (err) {
                        console.log(err)
                      }
                    })

                    return
                  }
                })

              }
            })
          }
        }
      })

    }
  })
})

router.post(v2 + '/setup', (req, res) => {
  fields_required = [
    // 'theme_id',
    'phone',
    'name',
    'email',
    'address',
    'office_hours',
    'doctor_names',
    'npi',
    // 'url'
  ]
  post_data = req.body

  // TODO : PACKAGE ID VALIDATION FOR MONGOOSE
  if (!helper.validateFieldAuto(res, post_data, fields_required))
    return

  dentist_middlewareware(req, res, (err, dentist) => {
    if (!err) {
      if (dentist.first_setup != true) {
        Theme.findById(post_data.theme_id, (err, theme) => {
          if (!helper.postQueryErrorOnly(err, res)) {
            if (theme == null && 1 > 3) {
              helper.sendError(res, "No such theme found")
              return
            } else {

              Dentist.findOne({ 'url': post_data.url }, (err, url) => {
                if (!helper.postQueryErrorOnly(err, res)) {
                  if (url != null && 1 > 3) {
                    helper.sendError(res, "This URL is already taken. Please select something different.")
                    return
                  } else {
                    dentist.selected_theme = post_data.theme_id
                    dentist.office_hours = JSON.stringify(post_data.office_hours)
                    dentist.practice_name = post_data.practice_name
                    dentist.practice_email = post_data.practice_email
                    dentist.practice_phone = post_data.practice_phone
                    dentist.practice_address = post_data.practice_address
                    dentist.npi = post_data.npi
                    dentist.url = post_data.url
                    dentist.doctor_names = JSON.stringify(post_data.doctor_names)
                    dentist.first_setup = true
                    dentist.save((err) => {
                      if (!helper.postQueryErrorOnly(err, null)) {
                        dentist.pwd = null
                        helper.sendSuccess(res, dentist)
                        return
                      }
                    })
                  }
                }
              })
            }
          }
        })
      } else {
        helper.sendSuccess(res, dentist)
        return
      }

    }
  })


})

router.post(v2 + '/set-theme', (req, res) => {

  fields_required = [
    'logo',
    'banner'
  ]
  post_data = req.files

  // TODO : PACKAGE ID VALIDATION FOR MONGOOSE

  if (!helper.validateFieldAuto(res, post_data, fields_required))
    return

  dentist_middlewareware(req, res, (err, dentist) => {
    if (!err) {
      fs.remove(base_path + '/domains/' + dentist.id, err => {
        if (err) return console.error(err)
        //add theme selection logic here
        fs.ensureDirSync(base_path + '/domains/' + dentist.id + '/assets')
        fs.copy(base_path + '/dist', base_path + '/domains/' + dentist.id + '/app')
          .then(() => {
            req.files.logo.mv(base_path + '/domains/' + dentist.id + '/assets/logo.png', (err) => {
              if (err) {
                console.log(err)
                helper.sendError(res, err)
                return
              } else {
                req.files.banner.mv(base_path + '/domains/' + dentist.id + '/assets/banner.png', (err) => {
                  if (err) {
                    console.log(err)
                    helper.sendError(res, err)
                    return
                  }
                })
              }
            })
            console.log('success!')
            helper.sendSuccess(res, "Information received. Building.")
            return
          })
          .catch(err => console.error(err))
      })
    }
  })
})

router.post(v3 + '/register', (req, res) => {
  common_middleware(req, res, (err) => {

    if (!err) {

      fields_required = [
        'first_name',
        'last_name',
        'city',
        'state',
        'address',
        'zip',
        'email',
        'phone',
        'package',
        'auth_type'
      ]
      post_data = req.body

      // TODO : PACKAGE ID VALIDATION FOR MONGOOSE

      if (!helper.validateFieldAuto(res, post_data, fields_required))
        return


      if (post_data.package == 'PRO') {
        if (!helper.validateField(res, post_data, 'service_provider', 'Service Provider'))
          return
      }

      if (post_data.auth_type == 'DESKTOP') {
        if (post_data.auth_type == 'DESKTOP') {

          fields_required = [
            'pwd',
            'conf_pwd'
          ]

          if (!helper.validateFieldAuto(res, post_data, fields_required))
            return

          if (post_data.pwd.length < 8) {
            helper.sendError(res, "Passwords needs to be at least 8 characters long.")
            return
          }

          if (post_data.pwd != post_data.conf_pwd) {
            helper.sendError(res, "Passwords do not match.")
            return
          }

        }
      } else if (post_data.auth_type == 'FB') {
        if (!helper.validateField(res, post_data, 'fb_id', 'Facebook ID'))
          return
      } else if (post_data.auth_type == 'GOOGLE') {
        if (!helper.validateField(res, post_data, 'g_id', 'Google ID'))
          return
      }






      Dentist.findOne({ 'email': post_data.email }, (err, dentist) => {
        // console.log(dentist)
        if (!helper.postQueryErrorOnly(err, res)) {
          if (dentist != null) {
            helper.sendError(res, "An account with this email already exists.")
            return
          } else {

            ServiceProvider.findById(post_data.service_provider, (err, service_provider) => {
              if (!helper.postQueryErrorOnly(err, res)) {
                if (service_provider == null && post_data.package == "PRO") {
                  helper.sendError(res, "No such service provider found")
                  return
                } else {



                  token = helper.generateRandomString(5)
                  access_token = helper.generateRandomString(15)
                  dentist = new Dentist({
                    'email': post_data.email,
                    'address': post_data.address,
                    'unit': post_data.unit,
                    'zip': post_data.zip,
                    'first_name': post_data.first_name,
                    'last_name': post_data.last_name,
                    'city': post_data.city,
                    'state': post_data.state,
                    'phone': post_data.phone,
                    'package': post_data.package,
                    'first_ready': false,
                    'auth_type': post_data.auth_type,
                    'service_provider': post_data.service_provider,
                    'access_token': access_token,
                    'email_verified': true

                  })

                  if (post_data.auth_type == 'DESKTOP') {
                    pwd = bcrypt.hashSync(post_data.pwd, 10)
                    dentist.pwd = pwd
                  } else if (post_data.auth_type == 'FB') {
                    dentist.fb_id = post_data.fb_id
                  } else if (post_data.auth_type == 'GOOGLE') {
                    dentist.g_id = post_data.g_id
                  }

                  dentist.save((err) => {
                    if (!helper.postQueryErrorOnly(err, null)) {
                      helper.sendSuccess(res, dentist)
                    }
                  })
                  // email.sendDefaultEmail(dentist.email, 'Your acount is created successfully', base_url + '/#/plan/' + token, (err, info) => {
                  //     if (err) {
                  //         console.log(err)
                  //     }
                  // })
                  return
                }
              }
            })

          }
        }
      })
    }
  })
})

router.post('/authenticate-token', (req, res) => {
  var post_data = req.body
  if (!helper.validateField(res, post_data, 'token', 'Token')) {
    return
  }

  Dentist.find({ 'temp_token': post_data['token'] }, (err, dentists) => {
    if (!helper.postQueryErrorOnly(err, res)) {
      //console.log(dentists)
      if (dentists.length == 0) {
        helper.sendError(res, 'Wrong/ Unknown Token')
        return
      } else {
        dentist = dentists[0]
        new_token = helper.generateRandomString(15)
        dentist.access_token = new_token
        dentist.email_verified = true
        dentist.save((err, result) => {
          if (!helper.postQueryErrorOnly(err, res)) {
            dentist.pwd = null
            helper.sendSuccess(res, dentist)
            return
          }
        })
      }
    }
  })

})


module.exports = router
