const express = require('express');
const router = express.Router();
const Communities = require('../model/Communities')
var CommunitiesTable = new Communities();

router.param('id', function(req, res, next, id) {
  return next();
});

// The community page for this community
router.get('/communities/:id', function(req, res, next) {
  res.send(CommunitiesTable.get(id));
});

// All communities for this user
router.get('/communities', function(req, res, next) {
  // console.log(CommunitiesTable.getAll());
  res.send(CommunitiesTable.getAll());
});



module.exports = router;
