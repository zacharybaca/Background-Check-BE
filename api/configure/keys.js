// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "consumer key here",
    TWITTER_CONSUMER_SECRET: "secret key here",
    TWITTER_ACCESS_TOKEN: "access key", //"SOME ACCESS TOKEN",
    TWITTER_TOKEN_SECRET: "token key"
  };
  
  const DB_USER = ""; // is that correct?
  const DB_PASSWORD = "password here";
  const MONGODB = {
    MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
  };
  
  const SESSION = {
    COOKIE_KEY: "cookie key here"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;





// const CLIENT_ID=process.env.CLIENT_ID;
// const CLIENT_SECRET=process.env.CLIENT_SECRET;
// const COOKIE_KEY=process.env.COOKIE_KEY;


// module.exports = {
//     google: {
//         clientID: CLIENT_ID,
//         clientSecret: CLIENT_SECRET
//     },
  
//     session: {
//         cookieKey: COOKIE_KEY
//     }
//   }
