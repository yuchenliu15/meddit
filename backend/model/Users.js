const firebase = require('./index')

class Users {

    async create(username, password) {
        const res = await firebase.auth()
            .createUserWithEmailAndPassword(
                username, password
            );

        return res;
    }
}

module.exports = Users;