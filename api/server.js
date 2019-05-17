const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./services/passport-setup');
const userRouter = require('../users/userRouter.js');
const candidateRouter = require('../candidates/candidateRouter');
const cookieSession = require('cookie-session');
const keys = require('./services/keys');
const passport = require('passport');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/auth',authRoutes);
server.use('/profile', profileRoutes);
server.use('/users', userRouter);
server.use('/candidates', candidateRouter);

server.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

//Initialize Passport
server.use(passport.initialize());
server.use(passport.session());



// sanity check
server.get('/', (req, res) => {
    res.status(200).json('API is running');
});

module.exports = server;
