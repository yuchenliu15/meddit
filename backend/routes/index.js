const express = require('express');
const router = express.Router();

const firebase = require('../model/index');

const Users = require('../model/Users')
const Communities = require('../model/Communities')
const Posts = require('../model/Posts')
const Comments = require('../model/Comments')





// NOTE: These all create new records
// const CommunitiesTable = new Communities();
// CommunitiesTable.create();
// const PostsTable = new Posts();
// PostsTable.create();
// const CommentsTable = new Comments();
// CommentsTable.create();

// TO DO: this one doesn't work
// const UsersTable = new Users();
// UsersTable.create();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  

});

module.exports = router;
