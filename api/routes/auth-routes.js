const router = require('express').Router();
const passport = require('passport');

//Auth Login
router.get('/login', (req, res) => {
    res.render('login');
});

//Auth Logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    res.redirect('/');
});

//Auth With Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//Callback Route for Google to Redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send('You reached the callback URI');
    res.redirect('/profile/');
});
module.exports = router;