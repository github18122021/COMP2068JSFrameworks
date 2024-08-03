const Book = require('../models/bookModel');

// Get all books from the database
// Search for books based on the search query
// Return the books
const getBooksFromDatabase = async (searchQuery) => {
    let filter = {};

    if (searchQuery) {
        const searchNumber = Number(searchQuery);
        const isNumberSearch = !isNaN(searchNumber); // Check if search query is a number

        filter = {
            $or: [
                { title: isNumberSearch ? { $exists: false } : { $regex: searchQuery, $options: 'i' } },
                { author: isNumberSearch ? { $exists: false } : { $regex: searchQuery, $options: 'i' } },
                { genre: isNumberSearch ? { $exists: false } : { $regex: searchQuery, $options: 'i' } },
                { publisher: isNumberSearch ? { $exists: false } : { $regex: searchQuery, $options: 'i' } },
                { isbn: isNumberSearch ? { $exists: false } : { $regex: searchQuery, $options: 'i' } },
                ...(isNumberSearch ? [
                    { published_year: searchNumber },
                    { pages: searchNumber }
                ] : [])
            ]
        };

        // Clean up filter to remove undefined fields
        filter = Object.fromEntries(
            Object.entries(filter).map(([key, value]) => [
                key,
                value.filter(val => val !== undefined)
            ])
        );
    }

    return await Book.find(filter);
};


// Add a new book to the database
// Redirect to the home page after adding the book
const addBook = async (req, res) => {
    const { title, author, genre, publisher, published_year, isbn, pages } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            genre,
            publisher,
            published_year,
            isbn,
            pages
        });

        await newBook.save();
        res.redirect('/lms');
    } catch (err) {
        console.error(err);
        res.render('add-book', { title: 'Add a Book', error: 'Failed to add book. Please try again.' });
    }
};

// Get a book by ID
// Return the book
const getBookById = async (id) => {
    try {
        const book = await Book.findById(id);
        if (!book) throw new Error('Book not found');
        return book;
    } catch (err) {
        console.error(err);
        throw new Error('Error fetching book from database');
    }
};

// Edit a book by ID
// Redirect to the home page after editing the book
const editBook = async (id, req, res) => {
    const { title, author, genre, publisher, published_year, isbn, pages } = req.body;

    try {
        await Book.findByIdAndUpdate(id, {
            title,
            author,
            genre,
            publisher,
            published_year,
            isbn,
            pages
        }, { new: true });
        res.redirect('/lms');
    } catch (err) {
        console.error(err);
        res.render('edit-book', { title: 'Edit Book', error: 'Failed to update book. Please try again.', book: req.body });
    }
};

// Delete a book by ID
const deleteBook = async (id) => {
    try {
        await Book.findByIdAndDelete(id);
    } catch (err) {
        console.error(err);
        throw new Error('Error deleting book from database');
    }
};

module.exports = {
    getBooksFromDatabase,
    addBook,
    getBookById,
    editBook,
    deleteBook
};
