const firebase = require('./index')

class Users {

    create(username, password) {
        return firebase.auth()
            .createUserWithEmailAndPassword(
                username, password
            );

    }
}

module.exports = Users;