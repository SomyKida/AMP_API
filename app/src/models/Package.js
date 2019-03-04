const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PackageSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
}, { collection: 'packages' });

// Export the model
module.exports = mongoose.model('Package', PackageSchema);