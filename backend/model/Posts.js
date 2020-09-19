const firebase = require('./index')

class Posts {
    async create() {
        let newPostsKey = firebase.database().ref("/Posts").push().key;
        let newPosts_idKey = firebase.database().ref("/Posts/id").push().key;

        let post = {
            id: newPosts_idKey,
            commentIDs: "",
            title: "",
            summary: "",
            content: "",
            mediaURL: ""
        }
        let updates = {};
        updates["/Posts/" + newPostsKey] = post;
        // updates['/user-Posts/' + uid + '/' + newPostsKey] = post;

        const res = await firebase
        .database()
        .ref()
        .update(updates, function (error) {
        if (error) {
            // The write failed...

        } else {
            // Data saved successfully!

        }
        });
        return res;
    }

    // Get one post
    async get(id){
        const res = await realtimeDatabase.ref('/posts/' + id).once('value').then(function (snapshot) {
            let retrievedPost = snapshot.val();
      
            return retrievedPost;
        });
        return res;
    }
}

module.exports = Posts;