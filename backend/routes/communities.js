const express = require('express');
const router = express.Router();
const Communities = require('../model/Communities')
var CommunitiesTable = new Communities();


// The community page for this community
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.send(CommunitiesTable.get(id));
});

// All communities for this user
router.get('/', function(req, res, next) {
  res.send(CommunitiesTable.getAll());
});



module.exports = router;
