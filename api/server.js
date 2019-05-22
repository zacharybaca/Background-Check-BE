// const express = require('express');
const helmet = require('helmet');
// const cors = require('cors');
// const authRoutes = require('./routes/auth-routes');
// const passportSetup = require('./services/passport-setup');
const userRouter = require('../users/userRouter.js');
const candidateRouter = require('../candidates/candidateRouter.js');
const orderRouter = require('../orders/orderRouter.js');
const profileRoutes = require('./routes/profile-routes.js');
// const passport = require('passport');


const cookieSession = require("cookie-session");
const express = require("express");
// const app = express();
const port = 4000;
const passport = require("passport");
const passportSetup = require("../api/configure/passport-setup");
const session = require("express-session");
const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const keys = require("./configure/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header


const server = express();    
// const keys = require('../api/services/keys');

const app = require("express")();
const stripe = require("stripe")("sk_test_ZhPRczzPc38M67taa8x14w2N00IesVU1LX");
server.use(require("body-parser").text());

server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use('/auth',authRoutes);
// server.use('/profile', profileRoutes);
server.use('/users', userRouter);
server.use('/candidates', candidateRouter);
server.use('/order', orderRouter);


// connect to mongodb
mongoose.connect(keys.MONGODB_URI, () => {
  console.log("connected to mongo db");
});

server.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
server.use(cookieParser());

// initalize passport
server.use(passport.initialize());
// deserialize cookie from the browser
server.use(passport.session());

// set up cors to allow us to accept requests from our client
server.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// set up routes
server.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
server.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});



// sanity check
server.get('/', (req, res) => {
    res.status(200).json('API is running');
});

server.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

module.exports = server;