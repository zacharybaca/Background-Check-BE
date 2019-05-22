// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
// const keys = require('./keys');
// const User = require('../../users/userModel').add;
// const DBUser = require('../../users/userModel');

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// })

// passport.deserializeUser((id, done) => {
//     DBUser.findById(id).then((user) => {
//         done(null, user);
//     });
    
// });

// passport.use(new GoogleStrategy({
//     //options for google strategy
//     callbackURL: '/auth/google/redirect',
//     clientID: keys.google.clientID,
//     clientSecret: keys.google.clientSecret
// }, (accessToken, refreshToken, profile, done) => {
//     //Check If User Already Exists in Our DB
//     DBUser.find({googleid: profile.id}).then((currentUser) => {
//         if(currentUser){
//             console.log('user is: ', currentUser);
//             done(null, currentUser);
//         } else {
//             new User({
//                 username: profile.displayName,
//                 googleid: profile.id
//             }).save().then((newUser) => {
//                 console.log('new user created: ' + newUser);
//                 done(null, newUser);
//             });
//         }
//     });
    
// }));
