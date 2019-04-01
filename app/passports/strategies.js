var LocalStrategy = require('passport-local').Strategy
var passport = require('passport')
var Dentist = require('../src/models/Dentist')


passport.use('dentist', new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
        Dentist.find({ 'email': email }, (err, dentists) => {
            if (!err) {
                //console.log(dentists)
                if (dentists.length == 0) {
                    return done(null, false)
                } else {
                    dentist = dentists[0]
                    const match = bcrypt.compareSync(password, dentist.pwd);
                    //console.log(match)
                    //Hashed check here #TODO
                    if (match) {
                        new_token = helper.generateRandomString(15)
                        dentist.access_token = new_token
                        dentist.save((err, result) => {
                            if (!err) {
                                dentist.pwd = null
                                return done(null, dentist)
                            } else {
                                return done(err, null)
                            }
                        })
                    } else {
                        return done(null, false)
                    }
                }
            } else {
                return done(err)
            }
        })
    })
)