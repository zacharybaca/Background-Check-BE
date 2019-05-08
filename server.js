const express = require('express');

const server = express();



// sanity check.
server.get('/', (req, res) => {
  res.send(`
    it's working!
  `);
});





 


module.exports = server;
