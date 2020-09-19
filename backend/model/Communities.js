const firebase = require('./index')

class Communities {
    async create() {
        let newCommunitiesKey = firebase.database().ref("/Communities").push().key;
        let newCommunities_idKey = firebase.database().ref("/Communities/id").push().key;

        let community = {
            id: newCommunities_idKey,
            name: "",
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

    // Get all communities
    async getAll(){
        const res = await realtimeDatabase.ref('/communities/').orderByChild("name").once('value').then(function (snapshot) {
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

    // Get one community
    async get(id){
        const res = await realtimeDatabase.ref('/communities/' + id).once('value').then(function (snapshot) {
            let retrievedCommunity = snapshot.val();
      
            return retrievedCommunity;
        });
        return res;
    }
}

module.exports = Communities;