const express = require('express');

const server = express();



// Sanity Check
server.get('/', (req, res) => {
    res.send(`It's Working!`);
});




server.listen(3000, () => {
    console.log('Server is running on Port 3K');
});

//comment