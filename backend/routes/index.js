const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  writeUser();
});



function writeUser() {
  // Get a key for a new Post.
  let newUsersKey = firebase.database().ref("/Users").push().key;
  let newUsers_idKey = firebase.database().ref("/Users/id").push().key;


  let user = {
    id: newUsers_idKey,
    password: "hiiiii",
    communityIDs: ["8128937192392198", "aldjnkanwkjekawnjke"]
  }
  // Write the new post's data simultaneously in the posts list (and the user's post list).
  let updates = {};
  updates["/Users/" + newUsersKey] = user;
  // updates['/user-projects/' + uid + '/' + newPostKey] = project;

  return firebase
    .database()
    .ref()
    .update(updates, function (error) {
      if (error) {
        // The write failed...

      } else {
        // Data saved successfully!

      }
    });
}

module.exports = router;
