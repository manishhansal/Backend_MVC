const mongoose = require('mongoose');

const section = new mongoose.Schema({
    "bookId": { type: mongoose.Schema.Types.ObjectId, ref: 'book' },
    "sectionName" : { type: String, required: true }
})

module.exports = mongoose.model('section', section);