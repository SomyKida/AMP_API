const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PatientSchema = new Schema({
    email: { type: String, required: true, max: 100 },
    dob: { type: String, required: true, max: 15 },
    pwd: { type: String, required: true, max: 30, min: 8 },
    first_name: { type: String, required: false, max: 30, min: 2 },
    last_name: { type: String, required: false, max: 30, min: 2 },
    access_token: { type: String, default: '', max: 30 },
    first_ready: { type: Boolean, default: false },
    phone: { type: String, required: true, max: 100 },
    address: { type: String, required: true, max: 150 },
    activation: { type: String, required: true, max: 50 }
}, { collection: 'patients' });

// Export the model
module.exports = mongoose.model('Patient', PatientSchema);