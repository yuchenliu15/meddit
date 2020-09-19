const express = require('express');
const router = express.Router();
const Communities = require('../model/Communities');
const Posts = require('../model/Posts');
const community = new Communities();
const post = new Posts();

router.get('/:id/posts', async function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');

  const community = await community.get(id);
  console.log(community.posts)

});

router.post('/:id/posts', async function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');

  const content = req.body.content
  const title = req.body.title
  const topic = req.body.topic

  if(!content)
    res.status(404).end('missing content');
  if(!title)
    res.status(404).end('missing title');
  if(!topic)
    res.status(404).end('missing topic');


  post.create(content, title, topic, community.addPost(id))
    .then(() => res.status(200).end())
    .catch(e => res.status(400).send(e.code))
});


// The community page for this community
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');
  
  community.get(id)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e.code))

});

// All communities for this user
router.get('/', function(req, res, next) {
  community.getAll()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e.code))
});

router.post('/', function(req, res, next) {
  const name = req.body.name
  if(!name)
    res.status(404).end('missing name');

  community.create(name)
    .then(() => res.status(200).end())
    .catch(e => res.status(400).send(e.code))

});

module.exports = router;
