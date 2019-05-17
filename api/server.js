const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes');
<<<<<<< HEAD
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./services/passport-setup');
const userRouter = require('../users/userRouter.js');
const candidateRouter = require('../candidates/candidateRouter');
const cookieSession = require('cookie-session');
const keys = require('./services/keys');
const passport = require('passport');
=======
// const passportSetup = require('./services/passport-setup');
const userRouter = require('../users/userRouter.js');
const candidateRouter = require('../candidates/candidateRouter');
const orderROuter = require('../')
>>>>>>> 085bdefe240d0d189289ccfa4995a4919022193a


const server = express();

const app = require("express")();
const stripe = require("stripe")("pk_test_hJ4ymeWUIsyUjYOAiTXmMMUG00HWO2eMEX");

app.use(require("body-parser").text());
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/auth',authRoutes);
server.use('/profile', profileRoutes);
server.use('/users', userRouter);
server.use('/candidates', candidateRouter);
server.use('/order', candidateRouter);

server.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

//Initialize Passport
server.use(passport.initialize());
server.use(passport.session());



// sanity check
server.get('/', (req, res) => {
    res.status(200).json('API is running');
});

app.post("/charge", async (req, res) => {
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

  app.listen(9000, () => console.log("Listening on port 9000"));


module.exports = server;
