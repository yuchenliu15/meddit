const firebase = require('./index')

class Posts {

    constructor() {
        this.db = firebase.database()
    }

    async create(content, title) {
        const newCommunitiesKey = firebase.database().ref("/Posts").push().key;

        const post = {
            content: content,
            title: title,
        }
        const updates = {};
        updates["/Posts/" + newCommunitiesKey] = post;

        return this.db.ref().update(updates);
    }

    getAll(){
        return this.db.ref('/Posts/').orderByChild("name")
            .once('value').then(snapshot => snapshot.val());
    }

    get(id){
        return this.db.ref('/Posts/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Posts;