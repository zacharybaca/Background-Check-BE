require('dotenv').config();

const server = require('./api/server.js');

<<<<<<< HEAD
const port = process.env.PORT || 5000
=======
const port = process.env.PORT || 3001
>>>>>>> a09e41794fcf00c81a0b3729c141311ba873a0ad

server.listen(port, () => {
console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
//comment