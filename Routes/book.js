const express = require('express');
const app = express();
const bookController = require('../Controllers/book');
app.use(express.json());

app.post('/book', bookController.addBook);
app.get('/books', bookController.getAllBooks)
app.get('/book/:author', bookController.getBookByAuthor);
app.delete('/book/:bookName', bookController.deleteBook);
app.get('/sectionInfo/:bookId', bookController.getSectionInfo);


module.exports = app;