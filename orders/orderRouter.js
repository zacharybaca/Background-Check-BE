const router = require('express').Router();

// GET ORDER
// shows in console.log & in Postman
// same 102 error as for Post
var request = require("request");

router.get('/order', (req, res) => {
  var options = { method: 'GET',
    url: 'https://api.accuratebackground.com/v3/order/',
    headers: 
    { 'cache-control': 'no-cache',
      Connection: 'keep-alive',
      'content-length': '153',
      'accept-encoding': 'gzip, deflate',
      Host: 'api.accuratebackground.com',
      'Postman-Token': 'dee6c111-d2c5-4375-b2fc-898686e1aa2d,6ffe4aa1-eb46-404d-af75-255697fe8cb8',
      'Cache-Control': 'no-cache',
      Accept: '*/*',
      'User-Agent': 'PostmanRuntime/7.13.0',
      Authorization: 'Basic NjNkNTI1NTUtYjAyZC00MTQzLTk1NTktZWE5ZDdhOGVjMzA4OmJjMzUyNTBhLTg2MWYtNDVlMC05MjIyLWJlYjcxZjRjZDA0ZQ==' },
    form: 
    { candidateId: '5cdc48f5093c611a5ebdbd9c',
      workflow: 'EXPRESS',
      packageType: 'PKG_BASIC',
      'jobLocation.city': 'Seattle',
      'jobLocation.region': 'WA',
      'jobLocation.country': 'US' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
  request.get(options).pipe(res);
})

// POST ORDER for Candidate
// shows in console.log & in Postman
// same 102 error as for Post
var request = require("request");

router.post('/order', (req, res) => {
  var options = { method: 'POST',
    url: 'https://api.accuratebackground.com/v3/order/',
    headers: 
    { 'cache-control': 'no-cache',
      Connection: 'keep-alive',
      'content-length': '153',
      'accept-encoding': 'gzip, deflate',
      Host: 'api.accuratebackground.com',
      'Postman-Token': 'ff9f0d62-e720-496e-9e82-888e8004a2aa,d7dab321-61ed-4b6b-bbf5-8da26ec19c83',
      'Cache-Control': 'no-cache',
      Accept: '*/*',
      'User-Agent': 'PostmanRuntime/7.11.0',
      Authorization: 'Basic NjNkNTI1NTUtYjAyZC00MTQzLTk1NTktZWE5ZDdhOGVjMzA4OmJjMzUyNTBhLTg2MWYtNDVlMC05MjIyLWJlYjcxZjRjZDA0ZQ==' },
    form: 
    { candidateId: '5c5cdc48f5093c611a5ebdbd9c',
      workflow: 'EXPRESS',
      packageType: 'PKG_BASIC',
      'jobLocation.city': 'San Francisco',
      'jobLocation.region': 'CA',
      'jobLocation.country': 'US' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
  request.get(options).pipe(res); 
})

module.exports = router;