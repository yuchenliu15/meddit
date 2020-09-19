const firebase = require('./index')

class Comments {
    async create() {
        let newCommentsKey = firebase.database().ref("/Comments").push().key;
        let newComments_idKey = firebase.database().ref("/Comments/id").push().key;

        let comment = {
            id: newComments_idKey,
            content: ""
        }
        let updates = {};
        updates["/Comments/" + newCommentsKey] = comment;
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
}

module.exports = Comments;