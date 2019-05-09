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