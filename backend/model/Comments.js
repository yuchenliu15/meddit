const firebase = require('./index')

class Comments {

    constructor() {
        this.db = firebase.database()
    }

    async create(content, user_id) {
        const newKey = firebase.database().ref("/Comments").push().key;

        const comment = {
            user_id,
            content,
            timestamp: Date.now()
        }

        const updates = {};
        updates["/Comments/" + newKey] = comment;

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