const express = require('express');
const router = express.Router();
const Communities = require('../model/Communities');
const Posts = require('../model/Posts');
const Users = require('../model/Users');
const community = new Communities();
const post = new Posts();
const user = new Users()

// Create/update a community's info
router.post('/', function(req, res, next) {
  const name = req.body.name
  const description = req.body.description
  const posts = req.body.posts ? req.body.posts: []
  const pinnedPost = req.body.pinnedPost ? req.body.pinnedPost: []
  const defaultSymptoms = req.body.defaultSymptoms ? req.body.defaultSymptoms: []

  if(!name)
    res.status(404).end('missing name');
  if(!description)
    res.status(404).end('missing description');

  community.create(name, description, posts, pinnedPost, defaultSymptoms)
    .then(() => res.status(200).end())
    .catch(e => res.status(400).send(e.code))

});

// Create/update a post for a community
router.post('/:id/posts', async function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');

  const username = req.body.username
  const content = req.body.content
  const title = req.body.title
  const topic = req.body.topic
  const description = req.body.description
  // const symptoms = req.body.symptoms

  if(!username)
    res.status(404).end('missing username');
  if(!content)
    res.status(404).end('missing content');
  if(!title)
    res.status(404).end('missing title');
  if(!topic)
    res.status(404).end('missing topic');
  if(!description)
    res.status(404).end('missing description');
  // if(!symptoms)
  //   res.status(404).end('missing symptoms');


  post.create(content, title, topic, description, community.addPost(id), user.addPost(username.replace(/\./g, '')))
    .then(() => res.status(200).end())
    .catch(e => res.status(400).send(e.code))
});

// Get all posts + community info for community
router.get('/:id/posts', async function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');

  
  const communityInfo = await community.get(id);
  const postIDs = communityInfo.posts;
  const posts = [];
  for(const id of postIDs) {
    const currentPost = await post.get(id);
    posts.push(currentPost)
  }

  res.status(200).send(posts)

});

// Get community info
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(!id)
    res.status(404).end('missing id');
  
  community.get(id)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e.code))

});

// Get all communities period
router.get('/', function(req, res, next) {
  community.getAll()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e.code))
});

module.exports = router;
