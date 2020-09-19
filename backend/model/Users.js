const firebase = require('./index')

class Users {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    async create() {
        const res = await firebase.auth()
            .createUserWithEmailAndPassword(
                this.username, this.password
            );

        return res;

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
  