var consts = require('./constants')
var stripe = require('stripe')(consts.stripe_test_secret)

module.exports = {
    generateToken: function (number, month, year, cvc, _callback) {
        stripe.tokens.create({
            card: {
                number: number,
                exp_month: month,
                exp_year: year,
                cvc: cvc
            }
        }, function (err, token) {
            if (err) {
                console.log(err)
                _callback(err.message, null)
                return
            } else {
                console.log(token)
                _callback(null, token)
                return
            }
        });
    },
    createCharge: function (token, amount, description, _callback) {
        stripe.charges.create({
            amount: amount,
            currency: consts.stripe_default_currency,
            source: token, // obtained with Stripe.js
            description: description
        }, function (err, charge) {
            if (err) {
                console.log(err)
                _callback(err.message, null)
                return
            } else {
                console.log(charge)
                _callback(null, charge)
                return
            }
        });
    }
}