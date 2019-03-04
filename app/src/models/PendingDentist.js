const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PendingDentistSchema = new Schema({
	email: { type: String, required: true, max: 100 },
	package: { type: Schema.Types.ObjectId, ref: 'Package' },
}, { collection: 'PendingDentists' });

// Export the model
module.exports = mongoose.model('PendingDentist', PendingDentistSchema);