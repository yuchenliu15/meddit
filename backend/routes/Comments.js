const express = require('express');
const router = express.Router();
const Comments = require('../model/Comments')
var CommentsTable = new Comments();

router.param('id', function(req, res, next, id) {
  return next();
});

// Get all comments
// TO DO: add /communities/id/posts/id/ before /comments
router.get('/comments/:id', function(req, res, next) {
  res.send(CommentsTable.getAll());
});



module.exports = router;
