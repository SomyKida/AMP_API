const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DentistSchema = new Schema({
	email: { type: String, required: true, max: 100, unique: true },
	rcry_email: { type: String, required: false, max: 100 },
	first_name: { type: String, required: false, max: 30, min: 2 },
	last_name: { type: String, required: false, max: 30, min: 2 },
	other_email: { type: String, required: false, max: 100 },
	pwd: { type: String, required: false, max: 30, min: 8 },
	practice_name: { type: String, required: false, max: 100 },
	practice_phone: { type: String, required: false, max: 100 },
	practice_address: { type: String, required: false, max: 150 },
	office_hours: { type: String, required: false, max: 1000 },
	doctor_names: { type: String, required: false, max: 1000 },
	npi: { type: Number, required: false, default: 0 },
	access_token: { type: String, required: false, max: 30 },
	first_ready: { type: Boolean, required: true, default: false },
	//package: { type: Schema.Types.ObjectId, ref: 'Package' },
	service_provider: { type: Schema.Types.ObjectId, ref: 'ServiceProvider' },
	package: { type: String, enum: ['PRO', 'LITE'], required: true },
	admins: [{ type: Schema.Types.ObjectId, ref: 'Admin' }],
	template: { type: String, default: 'default' },
	init_payment: { type: Boolean, default: false },
	addresser: { type: String, required: false },
	first_setup: { type: Boolean, default: false },
	url: { type: String },
	email_verified: { type: Boolean, default: false },
	temp_token: { type: String, max: 100 },
	selected_theme: { type: Schema.Types.ObjectId, ref: 'Themes' }
}, { collection: 'dentists' });

// Export the model
module.exports = mongoose.model('Dentist', DentistSchema);