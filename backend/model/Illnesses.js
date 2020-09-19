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




    check_symptoms(data){
        headers = {
            'App-Id': os.getenv('API_APP_ID'),
            'App-Key': os.getenv('API_APP_KEY'),
            'Content-Type': 'application/json'
          }
          NLP_URL = "https://api.infermedica.com/v2/parse"
          symptoms = requests.post(NLP_URL, headers=headers, json=data).json()
          response_object = {
              'status': 'success',
              'message': 'Successfully processed user symptom request',
              'symptoms_json': symptoms
          }
          return response_object, 200
    }
}

module.exports = Illnesses;