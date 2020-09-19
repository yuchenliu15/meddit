const firebase = require('./index')

class Illnesses {

    constructor() {
        this.db = firebase.database()
    }

    async create(user_id, symptoms, diagnoses) {
        const newKey = firebase.database().ref("/Illnesses").push().key;

        const illness = {
            user_id = user_id,
            symptoms: symptoms,
            diagnoses: diagnoses,
            timestamp: Date.now(),
            active: true
        }

        const updates = {};
        updates["/Illnesses/" + newKey] = illness;

        return this.db.ref().update(updates);
    }

    get(id){
        return this.db.ref('/Illnesses/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Illnesses;