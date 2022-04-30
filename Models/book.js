const mongoose = require('mongoose');

const book = new mongoose.Schema({
    "bookName" : { type: String, required: true },
    "author" : { type: String, required: true },
    "bookId" : { type: Number},
    "checkInTime": { type: String, required: true},
    "checkOutTime": { type: String, required: true}
})

module.exports = mongoose.model('book', book);