const mongoose = require('mongoose');

// Book Schema
// title, author, genre, publisher, published_year, isbn, pages
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    published_year: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }
});

// books collection in the database
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
