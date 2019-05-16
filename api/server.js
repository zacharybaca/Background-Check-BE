const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes');
// const passportSetup = require('./services/passport-setup');
const userRouter = require('../users/userRouter.js');
const candidateRouter = require('../candidates/candidateRouter');
const orderROuter = require('../')


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/auth',authRoutes);
server.use('/users', userRouter);
server.use('/candidates', candidateRouter);
server.use('/order', candidateRouter);

// sanity check
server.get('/', (req, res) => {
    res.status(200).json('API is running');
});

module.exports = server;
