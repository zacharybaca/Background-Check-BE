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



router.get('/candidates', (req, res) => {
  Candidates.find()
    .then(candidate => {
        res.json(candidate);
    })
    .catch(err => 
        res.status(500).json(err));
});

// router.get('/candidates/:id', (req, res) => {
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
