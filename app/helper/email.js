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
  getFields(type, username, password) {

    return `<p style="width: 70%;
      font-size: 14px;
      text-align: left;
      font-family: 'Product Sans';
      line-height: 1.5;">Your username is: <i style="
      font-style: normal;
      font-weight: bold;
      color: #38b6ff;">`+ username + `</i></p>
      <p style="width: 70%;
      font-size: 14px;
      text-align: left;
      font-family: 'Product Sans';
      line-height: 1.5;">Your password is: <i style="
      font-style: normal;
      font-weight: bold;
      color: red;">`+ password + `</i></p>`

  },

  sendWelcomeEmail: function (recipients, username, password, type, _callback) {
    base_url1 = 'https://mongodb-multi-instance-test.herokuapp.com'

    html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Email Content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            @font-face {
              font-family: 'Product Sans';
              font-style: normal;
              font-weight: 400;
              src: local('Product Sans'), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v10/pxiDypQkot1TnFhsFMOfGShVF9eOYktMqg.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        </style>
    </head>

    <body class="wrapper">
        <table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
            <tr>
                <td align="center">
                    <img src="`+ base_url1 + `/assets/emails/back.png" alt="App My Practice" width="400" height="100%" style="display: block;" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="font-weight: bold;
                    font-size: 16px;
                    width: 40%;
                    text-align: center;
                    font-family: 'Product Sans';">
                        Thank You For Signing Up With AMP!
                        Your Patients are Going to Love Your New App.
                    </p>
                    <p style="width: 70%;
                    font-size: 14px;
                    text-align: left;
                    font-family: 'Product Sans';
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
                    <a href="`+ base_url1 + `/#/login">
                        <button style="
                        background: #38b6ff;
                        padding: 10px 30px;
                        font-size: 18px;
                        color: #fff;
                        border-radius: 5px;
                        text-transform: uppercase;
                        width: 250px;
                        text-align: center;
                        display: block;
                        font-family: 'Product Sans';
                        margin: 50px auto 25px;
                        letter-spacing: 1.5px;">Login Here</button>
                    </a>
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="font-size: 10px;
                    font-family: 'Product Sans';
                    color: #a6a6a6;
                    margin: 0;
                    margin-top: 20px;
                    margin-bottom: 5px;">Copyright 2019, App My Practice. All Rights Reserved</p>
                    <p style="font-size: 8px;
                    font-family: 'Product Sans';
                    color: #a6a6a6;
                    margin: 0;">The email was sent to `+ recipients + ` if you no longer wish to receive these emails, <a style="color: #38b6ff;text-decoration: none;" href="#">Unsubscribe</a> at any time</p>
                </td>
            </tr>
        </table>
    </body>

    </html>`







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


  },
  sendDefaultEmail: function (recipients, subject, sentence_one, sentence_two = null, _callback) {
    base_url1 = 'https://mongodb-multi-instance-test.herokuapp.com'

    html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Email Content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            @font-face {
              font-family: 'Product Sans';
              font-style: normal;
              font-weight: 400;
              src: local('Product Sans'), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v10/pxiDypQkot1TnFhsFMOfGShVF9eOYktMqg.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        </style>
    </head>

    <body class="wrapper">
        <table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
            <tr>
                <td align="center">
                    <img src="`+ base_url1 + `/assets/emails/back.png" alt="App My Practice" width="400" height="100%" style="display: block;" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="font-weight: bold;
                    font-size: 16px;
                    width: 40%;
                    text-align: center;
                    font-family: 'Product Sans';">
                        `+ sentence_one + `
                    </p>
                    <p style="width: 70%;
                    font-size: 14px;
                    text-align: center;
                    font-family: 'Product Sans';
                    line-height: 1.5;">
                        `+ sentence_two + `
                    </p>
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="font-size: 10px;
                    font-family: 'Product Sans';
                    color: #a6a6a6;
                    margin: 0;
                    margin-top: 20px;
                    margin-bottom: 5px;">Copyright 2019, App My Practice. All Rights Reserved</p>
                    <p style="font-size: 8px;
                    font-family: 'Product Sans';
                    color: #a6a6a6;
                    margin: 0;">The email was sent to `+ recipients + ` if you no longer wish to receive these emails, <a style="color: #38b6ff;text-decoration: none;" href="#">Unsubscribe</a> at any time</p>
                </td>
            </tr>
        </table>
    </body>

    </html>`







    const mailOptions = {
      from: consts.test_gmail_name, // sender address
      to: recipients, // list of receivers
      subject: subject, // Subject line
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
