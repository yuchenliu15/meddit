const express = require('express');
const router = express.Router();
const Posts = require('../model/Posts')
const post = new Posts();



router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');
  
  post.get(id)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(200).send(e.code))

});

router.get('/', function(req, res, next) {
  post.getAll()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(200).send(e.code))
});

module.exports = router;
