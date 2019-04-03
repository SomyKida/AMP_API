const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServiceRequestSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
}, { collection: 'service_requests' });

// Export the model
module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);