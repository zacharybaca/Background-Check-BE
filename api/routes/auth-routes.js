const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";

// TWITTER

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
  })
);

module.exports = router;




// const router = require('express').Router();
// const passport = require('passport');

// //Auth Login
// router.get('/login', (req, res) => {
//     res.render('login');
// });

// //Auth Logout
// router.get('/logout', (req, res) => {
//     //handle with passport
//     req.logout();
//     res.redirect('/');
// });

// //Auth With Google
// router.get('/google', passport.authenticate('google', {
//     scope: ['profile']
// }));

// //Callback Route for Google to Redirect to
// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//     //res.send('You reached the callback URI');
//     res.redirect('/profile/');
// });
// module.exports = router;




// const router = require('express').Router();
// const passport = require('passport');

// //Auth Login
// router.get('/login', (req, res) => {
//     res.render('login');
// });

// //Auth Logout
// router.get('/logout', (req, res) => {
//     //handle with passport
//     req.logout();
//     res.redirect('/');
// });

// //Auth With Google
// router.get('/google', passport.authenticate('google', {
//     scope: ['profile']
// }));

// //Callback Route for Google to Redirect to
// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//     //res.send('You reached the callback URI');
//     res.redirect('/profile/');
// });
// module.exports = router;