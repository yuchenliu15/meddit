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


router.post('/', function(req, res, next) {
  const title = req.body.title
  const description = req.body.description
  const content = req.body.content
  const topic = req.body.topic
  const symptoms = req.body.symptoms


  if(!content)
    res.status(404).end('missing content');
  if(!title)
    res.status(404).end('missing title');
  if(!topic)
    res.status(404).end('missing topic');
  
  post.create(title, description, content, topic, symptoms)
    .then(() => res.status(200).end())
    .catch(e => res.status(200).send(e.code))

});

module.exports = router;
