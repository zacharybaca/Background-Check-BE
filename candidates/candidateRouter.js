const router = require('express').Router();

const Candidates = require('./candidateModel.js');


var request = require("request");

var options = { method: 'GET',
  url: 'https://api.accuratebackground.com/v3/candidate',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.accuratebackground.com',
     'Postman-Token': '5f32126e-60f4-4dad-8dc1-a3b44ce47ffc,205b9389-bfd3-4e7b-b7ea-732ddc5baa67',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.11.0',
     Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==',
     'Content-Type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});








var options = { method: 'POST',
  url: 'https://api.accuratebackground.com/v3/candidate',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'content-length': '3368',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.accuratebackground.com',
     'Postman-Token': 'bdba8d9c-8c38-4df9-96d7-f060c0522a73,1dfd59ed-5b45-4d5b-8302-101ac41e653e',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.11.0',
     Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==',
     'Content-Type': 'application/json' },

  body: 
   { resource: 'CANDIDATE',
     id: '5cdc4074093c611a5ebdbd6d',
     created: '2019-05-15T16:38:12Z',
     updated: '2019-05-15T16:38:12Z',
     revision: '1',
     masked: false,
     firstName: 'Second Test',
     lastName: 'for POST2',
     middleName: 'G',
     suffix: 'Jr',
     dateOfBirth: '1990-05-26',
     ssn: '898881234',
     email: 'bob@johnson.com',
     phone: '415-234-5678',
     address: '123 Main St.',
     city: 'Irvine',
     region: 'CA',
     country: 'US',
     postalCode: '12345',
     governmentId: { country: 'CA', type: 'SIN', number: 'PAPANDRERM238FL' },
     aliases: [ { firstName: 'Bob', lastName: 'Johnson', middleName: 'M' } ],
     educations: 
      [ { school: 'UCI',
          country: 'US',
          region: 'CA',
          city: 'Irvine',
          degree: 'Master of Something',
          major: 'Major',
          startDate: '2000-05',
          endDate: '2004-06',
          graduated: 'true',
          graduationDate: '2004-06',
          presentlyEnrolled: 'false' } ],
     prevEmployed: 'true',
     employments: 
      [ { employer: 'BestBuy',
          country: 'US',
          region: 'CA',
          city: 'Irvine',
          startDate: '2000-05',
          endDate: '2004-06',
          presentlyEmployed: 'true',
          position: 'Sales',
          supervisor: 'John Doe',
          reasonForLeaving: 'none',
          okToCall: 'true',
          phone: '1234567899',
          salary: '1000' } ],
     licenses: 
      [ { category: 'professional-license',
          type: 'Nursing',
          number: 'D4535156',
          issuingAuthority: 'DMV',
          country: 'US',
          region: 'CA',
          city: 'N/A' } ],
     convicted: 'true',
     convictions: 
      [ { convictionDate: '2002-05-13',
          description: 'some description',
          country: 'US',
          region: 'CA',
          region2: 'Orange',
          city: 'Irvine' } ],
     references: 
      [ { name: 'Jane Doe',
          relationship: 'co-worker',
          phone: '1234567899',
          email: 'reference@email.com',
          country: 'US',
          region: 'CA',
          city: 'Irvine',
          postalCode: 'ABZ13' } ],
     addressHistory: 
      [ { address: '123 Canada Lane',
          address2: 'Rm 8',
          city: 'Vancouver',
          region: 'abc',
          postalCode: '8383-33e',
          country: 'CA',
          fromDate: '2004-10-31',
          toDate: '2005-01-08' } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});




router.get('/candidates', (req, res) => {
  Candidates.find()
    .then(candidate => {
        res.json(candidate);
    })
    .catch(err => 
        res.status(500).json(err));
});

router.get('/candidates/:id', (req, res) => {
  Candidates.findById(req.params.id)
    .then(candidate => {
        res.json(candidate);
    })
    .catch(err => 
        res.status(500).json(err));
});

router.post('/', (req, res) => {
  Candidates.add(req.body)
    .then(candidate => {
        res.json(candidate);
    })
    .catch(err =>
        res.status(500).json(err));
});

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
