const mongoose = require('mongoose');

const LetterSchema = new mongoose.Schema({
	letter: {
		type: String,
		unique: true,
		maxlength: 1
	}
});

module.exports = mongoose.model.Letters || mongoose.model('Letterss', LetterSchema);
