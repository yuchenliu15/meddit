const firebase = require('./index')

class Communities {

    constructor() {
        this.db = firebase.database()
    }

    async create(name) {
        const newCommunitiesKey = firebase.database().ref("/Communities").push().key;

        const community = {
            name: name,
            description: '',
            posts: [],
            pinnedPost: '',
            defaultSymptoms: []
        }
        const updates = {};
        updates["/Communities/" + newCommunitiesKey] = community;

        return this.db.ref().update(updates);
    }

    addPost(communityID){
        return async (postID) => {
            const before = await this.get(communityID);
            const beforePosts = before.posts ? before.posts: [];
    
            before.posts = [...beforePosts, postID]
            const updates = {};
            updates["/Communities/" + communityID] = before;
            return await this.db.ref().update(updates);
        }
    }

    getAll(){
        return this.db.ref('/Communities/').orderByChild("name")
            .once('value').then(snapshot => snapshot.val());
    }

    get(id){
        return this.db.ref('/Communities/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Communities;