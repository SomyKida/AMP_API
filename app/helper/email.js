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
  sendWelcomeEmail: function (recipients, _callback) {
    base_url1 = 'https://mongodb-multi-instance-test.herokuapp.com'
    html = `<html>
    <head>
    <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email</title>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet"><style>
    @font-face {
        font-family: 'leagueSpartan';
        src: url(`+ base_url1 + `/assets/emails/leagueSpartan-bold.ttf);
    }

    @font-face {
        font-family: 'algreya';
        src: url(`+ base_url1 + `/assets/emails/AlegreyaSC-Regular.ttf);
    }

    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .banner {
        width: 100%;
        height: 30%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .content {
        width: 60%;
        flex-direction: column;
        display: flex;
        align-items: center;
    }

    .heading {
        font-weight: bold;
        font-size: 16px;
        width: 40%;
        text-align: center;
        font-family: 'leagueSpartan';
    }

    .intro {
        width: 70%;
        font-size: 14px;
        text-align: left;
        font-family: 'algreya';
        line-height: 1.5;
    }

    .btn {
        margin-top: 15px;
        width: 100%;
        text-align: center;
    }

    .subs {
        width: 30%;
        background: #38b6ff;
        color: white;
        text-transform: uppercase;
        padding: 5px;
        font-family: 'leagueSpartan'
    }

    .copy {
        font-size: 10px;
        font-family: 'algreya';
        color: #a6a6a6;
        margin: 0;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .subscribe {
        font-size: 8px;
        font-family: 'algreya';
        color: #a6a6a6;
        margin: 0;
    }

    .unsub {
        color: #38b6ff;
        text-decoration: none;
    }
</style></head>
<body  style="margin: 0; padding: 0">
<div class="wrapper">
    <div class="banner"></div>
    <div class="content">
        <p class="heading">
            Thank You For Signing Up With AMP!
            Your Patients are Going to Love Your New App.
        </p>
        <p class="intro">
            While we spin up your mobile app to work on both IOS and Android, we would like to
            invite you to familiarize yourself with AMP Dashboard and complete your on-boarding
            process. When your app is complete, We will notify you
            with detailed instructions.
        </p>

        <div class="btn">
            <button class="subs">Login Here</button>
        </div>
        <p class="copy">Copyright 2019, App My Practice. All Rights Reserved</p>
        <p class="subscribe">The email was sent to `+ recipients + ` if you no longer wish to receive these emails, <a class="unsub" href="#">Unsubscribe</a> at any time</p>
    </div>
</div>
</body></html>
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
