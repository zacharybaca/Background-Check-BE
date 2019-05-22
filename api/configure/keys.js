// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "C7ROI6lUmeij1rnG2nNQaVKpl",
    TWITTER_CONSUMER_SECRET: "ydpglI9FzwbwLhJm6999o2FsMFf2FLlNESXQd4fbai4i1PjSut",
    TWITTER_ACCESS_TOKEN: "30561163-3LiuV8Llw8uNLCJMQJT0iyLT8J6RJPwGMR7WATCw9 ", //"SOME ACCESS TOKEN",
    TWITTER_TOKEN_SECRET: "pWt9mI5pW0a3MPKkxB8ERIt3dpVIGrpWOHBi5LkyGX3yw"
  };
  
  const DB_USER = "user"; // is that correct?
  const DB_PASSWORD = "b43548a6-2b5f-47ce-a896-ff989622dc7e";
  const MONGODB = {
    MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
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