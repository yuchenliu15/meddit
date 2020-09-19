const express = require('express');
const Comments = require('../model/Comments');
const router = express.Router();
const Posts = require('../model/Posts');
const Users = require('../model/Users');
const post = new Posts();
const comment = new Comments();
const user = new Users();


router.get('/:id/comments', async function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');
  
  const communityInfo = await community.get(id);
  const postIDs = communityInfo.posts;
  const posts = [];
  for(const id of postIDs) {
    const currentPost = await post.get(id);
    if(currentPost) {
      currentPost['id'] = id
      posts.push(currentPost)
    }
  }

  res.status(200).send(posts)

});

router.post('/:id/comments', async function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');

  const username = req.body.username
  const content = req.body.content


  if(!username)
    res.status(404).end('missing username');
  if(!content)
    res.status(404).end('missing content');


  comment.create(username, content,
    post.addComment(id), user.addComment(username.replace(/\./g, '')))
    .then(() => res.status(200).end())
    .catch(e => res.status(400).send(e.code))
});


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


  if(!content)
    res.status(404).end('missing content');
  if(!description)
    res.status(404).end('missing description');
  if(!title)
    res.status(404).end('missing title');
  if(!topic)
    res.status(404).end('missing topic');
  
  post.create(title, description, content, topic)
    .then(() => res.status(200).end())
    .catch(e => res.status(200).send(e.code))

});

module.exports = router;
