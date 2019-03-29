var LocalStrategy = require('passport-local').Strategy
var passport = require('passport')
var Dentist = require('../src/models/Dentist')




passport.serializeUser(function (dentist, done) {
    done(null, dentist.email);
    // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function (email, done) {
    Dentist.findOne({ 'email': email }, function (err, dentist) {
        done(err, dentist);
    });
});