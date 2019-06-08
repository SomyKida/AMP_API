const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServiceProviderSchema = new Schema({
    name: { type: String, required: true, max: 100 },

}, { collection: 'service_providers' });

// Export the model
module.exports = mongoose.model('ServiceProvider', ServiceProviderSchema);