const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdminSchema = new Schema({
    email: { type: String, required: true, max: 100 },
    pwd: { type: String, required: true, max: 30, min: 8 },
    first_name: { type: String, required: false, max: 30, min: 2 },
    last_name: { type: String, required: false, max: 30, min: 2 },
    access_token: { type: String, default: '', max: 30 },
    designation: { type: String, required: true, max: 30 },
    first_ready: { type: Boolean, default: false }
}, { collection: 'admins' });

// Export the model
module.exports = mongoose.model('Admin', AdminSchema);