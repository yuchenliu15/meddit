const express = require('express');
const router = express.Router();
const Posts = require('../model/Posts')
var PostsTable = new Posts();

// A single post
// TO DO: add /communities/id/ before /posts
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(PostsTable.get(id));
});



module.exports = router;
