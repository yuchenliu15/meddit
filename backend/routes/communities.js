const express = require('express');
const router = express.Router();
const Communities = require('../model/Communities')
const community = new Communities();


// The community page for this community
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  community.get(id).then((data) => {
    res.send(data);
  })
});

// All communities for this user
router.get('/', function(req, res, next) {
  community.getAll().then((data) => {
    res.send(data);
  })
});

router.post('/', function(req, res, next) {
  const name = req.body.name

  community.create(name)
    .then(() => res.status(200).end())
});

module.exports = router;
