const jwt = require('jsonwebtoken')
const firebase = require('./index')
const secretToken = `09f26e402586e2faa8da4c98a35f1
  b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9
  d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611`

class Users {

    create(username, password) {
        return firebase.auth()
            .createUserWithEmailAndPassword(
                username, password
            );
    }

    auth(username,  password) {
        return firebase.auth().signInWithEmailAndPassword(
            username,
            password
        );
    }

    generateAccessToken(username) {
        return jwt.sign(username, secretToken);
    }
}

module.exports = Users;
// ****************************************************
// NOTE: Might need the fields from here in the future
// ****************************************************
// function writeUser() {
//     // Get a key for a new Post.
//     let newUsersKey = firebase.database().ref("/Users").push().key;
//     let newUsers_idKey = firebase.database().ref("/Users/id").push().key;
  
  
//     let user = {
//       id: newUsers_idKey,
//       password: "example password",
//       communityIDs: ["example", "example1"],
//       postIDs: ["example", "example1"]
//     }
//     // Write the new post's data simultaneously in the posts list (and the user's post list).
//     let updates = {};
//     updates["/Users/" + newUsersKey] = user;
//     // updates['/user-projects/' + uid + '/' + newPostKey] = project;
  
//     return firebase
//       .database()
//       .ref()
//       .update(updates, function (error) {
//         if (error) {
//           // The write failed...
  
//         } else {
//           // Data saved successfully!
  
//         }
//       });
// }
  