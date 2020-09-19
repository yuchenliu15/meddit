const express = require('express');
const router = express.Router();
const Comments = require('../model/Comments')
var CommentsTable = new Comments();

// Get all comments
// TO DO: add /communities/id/posts/id/ before /comments
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(CommentsTable.getAll());
});



module.exports = router;
