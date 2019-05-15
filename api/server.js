const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/userRouter.js');
const candidateRouter = require('../candidates/candidateRouter');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', userRouter);
server.use('/candidates', candidateRouter);


server.get('/', (req, res) => {
    res.status(200).json('API is running');
});

module.exports = server;
