const router = require('express').Router();

const Users = require('./userModel.js');


router.get('/', (req, res) => {
    Users.find()
    .then(user => {
        res.json(user);
    })
    .catch(err => 
        res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(err => 
        res.status(500).json(err));
});

router.post('/', (req, res) => {
    Users.add(req.body)
    .then(user => {
        res.json(user);
    })
    .catch(err =>
        res.status(500).json(err));
});

router.put('/:id', (req, res) => {
    Users.update(req.params.id, req.body)
      .then(users => {
        res.json(users);
      })
      .catch(err => 
        res.status(500).json(err));
});

router.delete('/:id', async (req, res) => {
    try {
      const deleteUser = await Users.remove(req.params.id);
      res.status(200).json(deleteUser);
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting User',
      });
    }
});

module.exports = router;
