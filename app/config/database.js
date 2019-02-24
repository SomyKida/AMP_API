const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const db_user = 'enigcreator'
const db_pass = 'ABC123456'


// Connection URL
const url = 'mongodb://' + db_user + ':' + db_pass + '@ds039037.mlab.com:39037/user_db';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

connection = null


module.exports = {
    connect_database: function (_callback) {
        // Use connect method to connect to the Server
        client.connect(function (err) {
            if (err) {
                console.log(err)
                _callback(err, null)
            }
            console.log("Connected successfully to Mlab server");
            connection = client.db('user_db');
            _callback(null, connection)
        });
    }
}