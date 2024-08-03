const express = require('express');
const router = express.Router();
const { getBooksFromDatabase, addBook, getBookById, editBook, deleteBook } = require('../controllers/bookController');

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
    if (req.session.username) {
        next();
    } else {
        res.redirect('/login');
    }
};

// GET Home
// Fetch all books from the database and render the home page
router.get('/', requireAuth, async (req, res) => {
    try {
        const searchQuery = req.query.searchQuery || '';
        const books = await getBooksFromDatabase(searchQuery); // Pass the search query
        res.render('home', { title: 'Home', username: req.session.username, books, searchQuery });
    } catch (error) {
        console.error(error);
        res.render('home', { title: 'Home', username: req.session.username, error: 'Failed to load books. Please try again.' });
    }
});

// GET Add Book
// Render the add-book page
router.get('/add-book', requireAuth, (req, res) => {
    res.render('add-book', { title: 'Add a Book', username: req.session.username });
});

// POST Add Book
// Add a new book to the database
router.post('/add-book', requireAuth, async (req, res) => {
    await addBook(req, res);
});

// GET Edit Book
// Fetch the book by ID and render the edit-book page
router.get('/edit-book/:id', requireAuth, async (req, res) => {
    try {
        const book = await getBookById(req.params.id);
        res.render('edit-book', { title: 'Edit Book', username: req.session.username, book });
    } catch (error) {
        console.error(error);
        req.flash('error', 'Book not found.');
        res.redirect('/lms');
    }
});

// POST Edit Book
// Update the book in the database
router.post('/edit-book/:id', requireAuth, async (req, res) => {
    try {
        await editBook(req.params.id, req, res);
    } catch (error) {
        console.error(error);
        req.flash('error', 'Failed to update book.');
        res.redirect(`/lms/edit-book/${req.params.id}`);
    }
});

// POST Delete Book
// Delete the book from the database
router.post('/delete-book/:id', requireAuth, async (req, res) => {
    try {
        await deleteBook(req.params.id);
        res.redirect('/lms');
    } catch (error) {
        console.error(error);
        req.flash('error', 'Failed to delete book.');
        res.redirect('/lms');
    }
});

// GET Logout
// Destroy the session and redirect to login
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.redirect('/');
        }
        res.redirect('/login');
    });
});

module.exports = router;
