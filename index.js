
const express = require('express'); // import the express package
// equilalent to import express from 'express'

// const db = require('./data/db.js'); 




const server = require('./server.js');

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});