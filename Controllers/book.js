const bookModel = require('../Models/book');
const sectionModel = require('../Models/section');
const { default: mongoose } = require('mongoose');

async function getAllBooks(req, res, next) {
    try {

        let response = await bookModel.find({});
        res.json(response);

    } catch (error) {
        res.status(500).json(error);
    }
}

async function addBook(req, res, next) {
    //fetch info from request body
    try {
        console.log("req.body", req.body);
        let bookDetail = req.body;
        let response = await bookModel.insertMany([bookDetail]);
        let sectionInfo = {
            bookId: response[0]._id,
            sectionName: req.body.section.sectionName
        }
        console.log(sectionInfo)
        await sectionModel.insertMany([sectionInfo]);

        res.json(response);

    } catch (error) {
        res.json(error);
    }
}

async function getBookByAuthor(req, res, next) {
    let author = req.params.author;
    let response = await bookModel.find({ author: author });
    res.json(response);
}

async function deleteBook(req, res, next) {
    let book = req.params.book;
    let response = await bookModel.deleteOne({ bookName: book });
    res.json(response);
}

async function getSectionInfo(req, res, next) {
    console.log(req.params);
    let response = await sectionModel.find({ bookId: mongoose.Types.ObjectId(req.params.bookId) }).populate('bookId');
    res.json(response);
}


module.exports = {
    getAllBooks,
    addBook,
    getBookByAuthor,
    deleteBook,
    getSectionInfo
}


