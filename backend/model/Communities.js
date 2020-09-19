const firebase = require('./index')

class Communities {
    async create() {
        let newCommunitiesKey = firebase.database().ref("/Communities").push().key;
        let newCommunities_idKey = firebase.database().ref("/Communities/id").push().key;

        let community = {
            id: newCommunities_idKey,
            postIDs: "",
            pinnedPost: ""
        }
        let updates = {};
        updates["/Communities/" + newCommunitiesKey] = community;
        // updates['/user-Communities/' + uid + '/' + newCommunitiesKey] = community;

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

    async createPost(){

    }
}

module.exports = Communities;