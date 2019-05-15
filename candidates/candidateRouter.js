const router = require('express').Router();

const Candidates = require('./candidateModel.js');


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
