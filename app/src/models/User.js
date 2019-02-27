const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	email: { type: String, required: true, max: 100 },
	pwd: { type: String, required: true, max: 30, min: 8 },
	dob: { type: String, required: true, max: 100 },
	phone: { type: String, required: true, max: 100 },
	address: { type: String, required: true, max: 150 },
	user_type: { type: String, required: true, max: 100, enum: ['Dentist', 'Admin', 'User'], },
	access_token: { type: String, required: true, max: 30 }
}, { collection: 'users' });

// Export the model
module.exports = mongoose.model('User', UserSchema);