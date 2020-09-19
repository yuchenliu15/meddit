const firebase = require('./index')

class Users {

    create(username, password) {
        return firebase.auth()
            .createUserWithEmailAndPassword(
                username, password
            );
    }

    auth(username,  password) {
        return firebase.auth().signInWithEmailAndPassword(
            username,
            password
        );
    }
}

module.exports = Users;