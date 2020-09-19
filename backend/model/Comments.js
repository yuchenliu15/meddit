const firebase = require('./index')

class Comments {

    constructor() {
        this.db = firebase.database()
    }

    async create(username, content, postCallback, userCallback) {
        const newKey = firebase.database().ref("/Comments").push().key;

        const comment = {
            username,
            content,
            timestamp: Date.now()
        }

        const updates = {};
        updates["/Comments/" + newKey] = comment;

        await postCallback(newKey)
        await userCallback(newKey)

        return this.db.ref().update(updates);
    }

    async createPost(){

    }

    getAll(){
        return this.db.ref('/Comments/').orderByChild('timestamp')
            .once('value').then(snapshot => snapshot.val());
    }

    get(id){
        return this.db.ref('/Comments/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Comments;