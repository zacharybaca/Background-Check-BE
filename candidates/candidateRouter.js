const router = require('express').Router();

const Candidates = require('./candidateModel.js');

// sanity check
// router.get('/', (req, res) => {
//   res.status(200).json('API is running');
// });

//# Create a Candidate with key 
// returns extra long json data (including orders)
var https = require('https');
var username = '63d52555-b02d-4143-9559-ea9d7a8ec308';
var password = 'bc35250a-861f-45e0-9222-beb71f4cd04e';
var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    };
var options = {
    host: 'api.accuratebackground.com',
    port: 443,
    path: '/v3/candidate',
    headers: headers,
    };
var req = https.request(options, function(res) {
    var body = "";
    res.on('data', function(data) {
        body += data;
    });
    res.on('end', function() {
        //here we have the full response, html or json object
         console.log(body);
    })
    res.on('error', function(e) {
        console.log("Got error: " + e.message);
    });
});
var dataString = JSON.stringify({
        'firstName' : 'Albert',
        'lastName': 'Einstein',
        'phone' : '206-555-1212',
        'dateOfBirth' : '1972-05-26',
        'ssn' : '531-90-1234',
        'email' : 'bert@physics.org'
    });
req.write(dataString);
req.end();




// GET CANDIDATE
// shows in console.log & in Postman
// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.accuratebackground.com/v3/candidate',
//   headers: 
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'accept-encoding': 'gzip, deflate',
//      Host: 'api.accuratebackground.com',
//      'Postman-Token': 'a40453ee-623f-436f-a882-114a57ee645e,75c01411-63a2-4672-b603-23e249b90a46',
//      'Cache-Control': 'no-cache',
//      Accept: '*/*',
//      'User-Agent': 'PostmanRuntime/7.13.0',
//      Authorization: 'Basic NjNkNTI1NTUtYjAyZC00MTQzLTk1NTktZWE5ZDdhOGVjMzA4OmJjMzUyNTBhLTg2MWYtNDVlMC05MjIyLWJlYjcxZjRjZDA0ZQ==',
//      'Content-Type': 'application/x-www-form-urlencoded' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

router.get('/', (req, res) => {
  var options = { method: 'GET',
  url: 'https://api.accuratebackground.com/v3/candidate',
  headers: 
   { 
     Authorization: 'Basic NjNkNTI1NTUtYjAyZC00MTQzLTk1NTktZWE5ZDdhOGVjMzA4OmJjMzUyNTBhLTg2MWYtNDVlMC05MjIyLWJlYjcxZjRjZDA0ZQ==',
   } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
  request.get(options).pipe(res);
})



// // // POST CANDIDATE
// // // shows in console.log & in Postman
// // // error in console log but working in Postman:
// // // {
// // //   "errors" : [ {
// // //     "code" : "102",
// // //     "message" : "invalid request data",
// // //     "param" : null
// // //   } ]
// // // }
// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://api.accuratebackground.com/v3/candidate/',
//   headers: 
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'content-length': '3367',
//      'accept-encoding': 'gzip, deflate',
//      Host: 'api.accuratebackground.com',
//      'Postman-Token': '22f25894-851b-4fe4-a388-54cee957ae03,399eca6f-9950-4548-9378-08eac8a6089a',
//      'Cache-Control': 'no-cache',
//      Accept: '*/*',
//      'User-Agent': 'PostmanRuntime/7.11.0',
//      Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==',
//      'Content-Type': 'application/json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

router.post('/', (req, res) => {
  var options = { method: 'POST',
  url: 'https://api.accuratebackground.com/v3/candidate/',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'content-length': '152',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.accuratebackground.com',
     'Postman-Token': '34005f17-b685-4458-aef1-f7fb5e1a5bd4,118873d7-abe9-4f77-a794-18b8ade3fc0e',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.13.0',
     Authorization: 'Basic NjNkNTI1NTUtYjAyZC00MTQzLTk1NTktZWE5ZDdhOGVjMzA4OmJjMzUyNTBhLTg2MWYtNDVlMC05MjIyLWJlYjcxZjRjZDA0ZQ==',
     'Content-Type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
  request.get(options).pipe(res);
})



// // GET ORDER
// // shows in console.log & in Postman
// // same 102 error as for Post
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
})






// POST ORDER for Candidate
// shows in console.log & in Postman
// same 102 error as for Post
var request = require("request");

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
     Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==' },
  form: 
   { candidateId: '5cdc4074093c611a5ebdbd6d',
     workflow: 'EXPRESS',
     packageType: 'PKG_BASIC',
     'jobLocation.city': 'San Francisco',
     'jobLocation.region': 'CA',
     'jobLocation.country': 'US' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



// module.exports = server => {
//   server.get('/api/candidates', getCandidates);
// };

// function getCandidates(req, res) {
//   const requestOptions = {
//     headers: { accept: 'application/json' },
//   };

//   axios
//     .get('https://api.accuratebackground.com/v3/candidate/', requestOptions)
//     .then(response => {
//       res.status(200).json(response.data.results);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Error Fetching Candidates', error: err });
//     });
// }




// candidateRouter
// router.get('/', (req, res) => {
//   Candidates.find()
//     .then(candidate => {
//         res.json(candidate);
//     })
//     .catch(err => 
//         res.status(500).json(err));
// });

// router.get('/:id', (req, res) => {
//   Candidates.findById(req.params.id)
//     .then(candidate => {
//         res.json(candidate);
//     })
//     .catch(err => 
//         res.status(500).json(err));
// });

// router.post('/', (req, res) => {
//   Candidates.add(req.body)
//     .then(candidate => {
//         res.json(candidate);
//     })
//     .catch(err =>
//         res.status(500).json(err));
// });

// router.put('/:id', (req, res) => {
//   Candidates.update(req.params.id, req.body)
//       .then(candidates => {
//         res.json(candidates);
//       })
//       .catch(err => 
//         res.status(500).json(err));
// });

// router.delete('/:id', async (req, res) => {
//     try {
//       const deleteCandidate = await Candidates.remove(req.params.id);
//       res.status(200).json(deleteCandidate);
//     } catch (error) {
//       res.status(500).json({
//         message: 'Error deleting candidate',
//       });
//     }
// });

module.exports = router;