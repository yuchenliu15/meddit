const express = require('express');
const router = express.Router();
const Comments = require('../model/Comments')
const comment = new Comments();


router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');
  
  comment.get(id)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(200).send(e.code))

});

router.get('/', function(req, res, next) {
  comment.getAll()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(200).send(e.code))
});

router.post('/', function(req, res, next) {
  const content = req.body.content
  const user_id = req.body.user_id
  if(!content)
    res.status(404).end('missing content');
  if(!user_id)
    res.status(404).end('missing user_id');

  console.log(content)
  console.log(user_id)
  comment.create(content, user_id)
    .then(() => res.status(200).end())
    .catch(e => res.status(200).send(e.code))

});

module.exports = router;
