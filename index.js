<<<<<<< HEAD
const express = require('express');
const db = require('./data/db.js');
const server = express();

//Middleware
server.use(express.json());

server.get('/api/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({ message: 'Cannot Get Users' });
        });
});

server.post('/api/users', (req, res) => {
    const user = req.body;
    db.insert(user)
        .then(res => res.status(201).json(res))
        .catch(err => res.status(500).json(err));
});




server.listen(3000, () => {
    console.log('Server is running on Port 3K');
});

//comment
=======
require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 3000

server.listen(port, () => {
console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
>>>>>>> 776d13ca9830aa3000d4279693a394bb0d8bb848
