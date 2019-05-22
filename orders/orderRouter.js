const router = require('express').Router();

// GET ORDER
// shows in console.log & in Postman
// same 102 error as for Post
var request = require("request");

router.get('/order', (req, res) => {
  var options = { method: 'GET',
    url: 'https://api.accuratebackground.com/v3/order/',
    headers: 
    { 
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
    { 
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