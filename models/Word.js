const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true,
        maxlength: 5
    }, 
})

module.exports = mongoose.model.Words || mongoose.model('Words', WordSchema)