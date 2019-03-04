const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdminSchema = new Schema({
    email: { type: String, required: true, max: 100 },
    pwd: { type: String, required: true, max: 30, min: 8 },
    access_token: { type: String, required: true, max: 30 },
    designation: { type: String, required: true, max: 30 }
}, { collection: 'admins' });

// Export the model
module.exports = mongoose.model('Admin', AdminSchema);