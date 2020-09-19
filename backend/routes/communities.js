const express = require('express');
const router = express.Router();
const Communities = require('../model/Communities')
const community = new Communities();


// The community page for this community
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');
  
  community.get(id)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(200).send(e.code))

});

// All communities for this user
router.get('/', function(req, res, next) {
  community.getAll()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(200).send(e.code))
});

router.post('/', function(req, res, next) {
  const name = req.body.name
  if(!name)
    res.status(404).end('missing name');

  community.create(name)
    .then(() => res.status(200).end())
    .catch(e => res.status(200).send(e.code))

});

module.exports = router;
