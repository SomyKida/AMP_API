const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DentistSchema = new Schema({
	email: { type: String, required: true, max: 100 },
	rcry_email: { type: String, required: false, max: 100 },
	first_name: { type: String, required: false, max: 30, min: 2 },
	last_name: { type: String, required: false, max: 30, min: 2 },
	other_email: { type: String, required: false, max: 100 },
	pwd: { type: String, required: true, max: 30, min: 8 },
	company_name: { type: String, required: false, max: 100 },
	company_phone: { type: String, required: false, max: 100 },
	office_address: { type: String, required: false, max: 150 },
	hours: { type: String, required: false, max: 250 },
	access_token: { type: String, required: false, max: 30 },
	first_ready: { type: Boolean, required: true, default: false },
	package: { type: Schema.Types.ObjectId, ref: 'Package' },
	admins: [{ type: Schema.Types.ObjectId, ref: 'Admin' }],
	template: { type: String, default: 'default' }
}, { collection: 'dentists' });

// Export the model
module.exports = mongoose.model('Dentist', DentistSchema);