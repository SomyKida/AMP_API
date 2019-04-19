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
  },

  getFields(type, username, password) {
    if (type == 'DESKTOP') {
      console.log("here")
      return `<p class="width: 70%;
      font-size: 14px;
      text-transform: uppercase;
      text-align: left;
      font-family: 'algreya';
      line-height: 1.5;">Your username is: `+ username + `</p>
      <p class="width: 70%;
      font-size: 14px;
      text-transform: uppercase;
      text-align: left;
      font-family: 'algreya';
      line-height: 1.5;">Your password is: `+ password + `</p>`

    } else return ``;
  },

  sendWelcomeEmail: function (recipients, username, password, type, _callback) {
    base_url1 = 'https://mongodb-multi-instance-test.herokuapp.com'
    html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Email Content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- <link rel="stylesheet" href=`+ base_url + `"/assets/emails/leagueSpartan-bold.ttf">
        <link rel="stylesheet" href=`+ base_url + `"assets/emails/AlegreyaSC-Regular.ttf"> -->
        <style>
            @font-face {
                font-family: 'leagueSpartan';
                src: url(`+ base_url + `/assets/emails/LeagueSpartan-Bold.woff) format('woff')
            }

            @font-face {
                font-family: 'algreya';
                src: url(`+ base_url + `/assets/emails/AlegreyaSC-Regular.woff) format('woff')
            }
        </style>
    </head>

    <body class="wrapper">
        <table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
            <tr>
                <td align="center">
                <img src=`+ base_url + `"/assets/emails/back.png" alt="App My Practice" width="100%" height="100%" style="display: block;" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="font-weight: bold;
                    font-size: 16px;
                    width: 40%;
                    text-align: center;
                    font-family: 'leagueSpartan';">
                        Thank You For Signing Up With AMP!
                        Your Patients are Going to Love Your New App.
                    </p>
                    <p style="width: 70%;
                    font-size: 14px;
                    text-align: left;
                    font-family: 'algreya';
                    line-height: 1.5;">
                        While we spin up your mobile app to work on both IOS and Android, we would like to
                        invite you to familiarize yourself with AMP Dashboard and complete your on-boarding
                        process if you have not done so already. When your app is complete, We will notify you
                        with detailed instructions.
                    </p>
                    `+ this.getFields(type, username, password) + `
                    <div style="margin-top: 15px;
                    width: 100%;
                    text-align: center;">
                        <a href="`+ base_url + `/#/login">
                        <button style="width: 30%;
                        background: #38b6ff;
                        color: white;
                        text-transform: uppercase;
                        padding: 5px;
                        font-family: 'algreya';">Login Here</button></a>
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="font-size: 10px;
                    font-family: 'algreya';
                    color: #a6a6a6;
                    margin: 0;
                    margin-top: 20px;
                    margin-bottom: 5px;">Copyright 2019, App My Practice. All Rights Reserved</p>
                    <p style="font-size: 8px;
                    font-family: 'algreya';
                    color: #a6a6a6;
                    margin: 0;">The email was sent to `+ recipients + ` if you no longer wish to receive these emails, <a style="color: #38b6ff;text-decoration: none;" href="#">Unsubscribe</a> at any time</p>
                </td>
            </tr>
        </table>
    </body>

    </html>
`




    const mailOptions = {
      from: consts.test_gmail_name, // sender address
      to: recipients, // list of receivers
      subject: 'Thank You For Signing Up With AMP!', // Subject line
      html: html// plain text body
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
