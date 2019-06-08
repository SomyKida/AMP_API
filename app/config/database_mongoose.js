var mongoose = require('mongoose');
var constants = require('./constants')


// Connection URL
const url = 'mongodb://' + constants.db_user + ':' + constants.db_pass + '@ds039037.mlab.com:39037/user_db';

module.exports = {
    connect_database: function () {

        mongoose.connect(url, { useNewUrlParser: true });

        mongoose.set('useCreateIndex', true);

        mongoose.connection.on('connected', function () {
            console.log("Mongoose default connection is open to ", url);
        });

        mongoose.connection.on('error', function (err) {
            console.log("Mongoose default connection has occured " + err + " error");
        });

        mongoose.connection.on('disconnected', function () {
            console.log("Mongoose default connection is disconnected");
        });

        process.on('SIGINT', function () {
            mongoose.connection.close(function () {
                console.log("Mongoose default connection is disconnected due to application termination");
                process.exit(0)
            });
        });
    }
}
