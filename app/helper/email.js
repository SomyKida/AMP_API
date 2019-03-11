var validator = require("email-validator");
var nodemailer = require('nodemailer');
var consts = require('../config/constants')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: consts.test_gmail,
        pass: consts.test_gmail_pass
    }
});

module.exports = {
    validate: function (email) {
        return validator.validate(email); // true
    },
    getHtmlDynamicLinkForPayment: function (link) {
        html = `
            <html>
                <h3>In order to complete registeration, please go to the following to complete the  proccess</h3>
                <a href=`+ link + `>Go!</a>
            </html>
        `
        return html
    },
    sendDefaultEmail: function (recipients, subject, data, _callback) {
        const mailOptions = {
            from: consts.test_gmail_name, // sender address
            to: recipients, // list of receivers
            subject: subject, // Subject line
            html: data// plain text body
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
                _callback(err, null)
                return
            }
            else {
                console.log(info)
                _callback(null, info)
                return
            }
        });
    }
}