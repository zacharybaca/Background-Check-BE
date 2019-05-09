const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
configureRoutes(server);
const knex = require('knex');
const morgan = require('morgan');
server.use(morgan());
const Links = require('../db-functions');

// // GET
// working
server.get('/users', async (req,res)=>{
  try{
    const users = await Links.find();
    res.status(200).json(users);
    // const link = await db('background')
    // res.status(200).json(user);
  }catch(error){res.status(500).json({
            message: 'Error retrieving the users',
          });
}
})


// // GET BY ID 
// working
server.get('/users/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Users not found' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the users',
    });
  }
});

