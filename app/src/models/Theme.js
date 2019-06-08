const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ThemeSchema = new Schema({
    name: { type: String, required: true, max: 100 },
}, { collection: 'themes' });

// Export the model
module.exports = mongoose.model('Themes', ThemeSchema);