const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.render('register', { title: 'Register', error: 'Passwords do not match' });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.render('register', { title: 'Register', error: 'User with that email already exists' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save(); // Save user to database
        res.status(201).redirect('/login'); // Redirect to login after successful registration
    } catch (err) {
        console.error(err);
        res.render('register', { title: 'Register', error: 'Server Error' });
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.render('login', { title: 'Login', error: 'Invalid username' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('login', { title: 'Login', error: 'Invalid password' });
        }

        // Store user info in session
        req.session.username = user.username;
        res.redirect('/lms');
    } catch (err) {
        console.error(err);
        res.render('login', { title: 'Login', error: 'Server Error' });
    }
};


module.exports = {
    registerUser,
    loginUser
};
