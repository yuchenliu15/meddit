const express = require('express');
const router = express.Router();
const Posts = require('../model/Posts')
var PostsTable = new Posts();

router.param('id', function(req, res, next, id) {
  return next();
});

// A single post 
router.get('/posts/:id', function(req, res, next) {
  res.send(PostsTable.get(id));
});



module.exports = router;
