const firebase = require('./index')

class Symptoms {

    constructor() {
        this.db = firebase.database()
    }

    async create(user_id, illness_id) {
        const newKey = firebase.database().ref("/Symptoms").push().key;

        const symptom = {
            user_id = user_id,
            illness_id: illness_id,
            timestamp: Date.now(),
            data: ''
        }
        // data: JSON format
        // {
        //     "id": "s_1782",
        //     "name": "Abdominal pain, mild",
        //     "common_name": "Mild stomach pain",
        //     "orth": "mild stomach ache",
        //     "choice_id": "present",
        //     "type": "symptom"
        // }

        const updates = {};
        updates["/Symptoms/" + newKey] = symptom;

        return this.db.ref().update(updates);
    }

    get(id){
        return this.db.ref('/Symptoms/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Symptoms;