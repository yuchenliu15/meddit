const firebase = require('./index')

class Diagnoses {

    constructor() {
        this.db = firebase.database()
    }

    async create(user_id, illness_id) {
        const newKey = firebase.database().ref("/Diagnoses").push().key;

        const diagnosis = {
            user_id: user_id,
            illness_id: illness_id,
            timestamp: Date.now(),
            data: ''
        }

        const updates = {};
        updates["/Diagnoses/" + newKey] = diagnosis;

        return this.db.ref().update(updates);
    }

    get(id){
        return this.db.ref('/Diagnoses/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Diagnoses;