var mongoose = require('mongoose');

module.exports = {
    sendError: function (res, text) {
        res.status(405);
        res.send({
            status: 'error',
            errorMessage: text
            // code 	: NOT_FOUND_ERROR
        });
    },
    sendErrorWCode: function (res, text, code) {
        res.status(code);
        res.send({
            status: 'error',
            errorMessage: text
            // code 	: NOT_FOUND_ERROR
        });
    },
    sendSuccess: function (res, text) {
        res.send({
            "status": true,
            "data": text,
            "code": SUCCESS_CODE,
        });
    },
    generateRandomString: function (size) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < size; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text + new Date().getTime();
    },
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validateField: function (res, post_data, field, name) {
        if (!post_data.hasOwnProperty(field) || post_data[field] == '') {
            this.sendError(res, name + '(' + field + ') field missing or empty or unprocessable- required')
            return false
        } else {
            if (field == 'email') {
                if (!this.validateEmail(post_data.email)) {
                    this.sendError(res, 'Email (email) field incorrect- required')
                    return false
                }
            }
            return true;
        }
    },
    postQueryDefault: function (err, res, msg, errMsg = null) {

        if (err) {
            console.log(err)
            if (errMsg != null)
                helper.sendErrorWCode(res, err, 500)
            else
                helper.sendErrorWCode(res, errMsg, 500)
            return
        } else {
            helper.sendSuccess(res, msg)
            return
        }
    },
    postQueryErrorOnly: function (err, res, errMsg = null) {

        if (err) {
            console.log(err)
            if (errMsg != null)
                helper.sendErrorWCode(res, err, 500)
            else
                helper.sendErrorWCode(res, errMsg, 500)
            return true
        } else {
            return false
        }
    },
    getMongoId: function (id) {
        return mongoose.Types.ObjectId(id)
    }
}