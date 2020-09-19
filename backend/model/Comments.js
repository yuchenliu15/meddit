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

    // Get all comments
    async getAll(){
        const res = await realtimeDatabase.ref('/comments/').orderByChild("name").once('value').then(function (snapshot) {
            console.log(retrievedCommunities);
            let retrievedCommunities = snapshot.val();

            // let descendingCommunities = [];
            // For descending order
            // for (let key in retrievedCommunities){
            //     descendingCommunities.unshift(retrievedCommunities[key]);
            // }
            // return descendingCommunities;

            return retrievedCommunities;
        });
        return res;
    }
}

module.exports = Comments;