const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	email: {type: String, required: true, max: 100},
	pwd: {type: String, required: true, max: 100},
	dob: {type: String, required: true, max: 100},
	conf_pwd: {type: String, required: true, max: 100},
	phone: {type: String, required: true, max: 100},
	user_type: {type: String, required: true, max: 100, enum: ['dentist', 'admin', 'user'],},
});

// Export the model
module.exports = mongoose.model('User', UserSchema);