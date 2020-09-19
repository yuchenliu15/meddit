const firebase = require('./index')

class Users {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    async create() {
        const res = await firebase.auth()
            .createUserWithEmailAndPassword(
                this.username, this.password
            );

        return res;

    }
}

module.exports = Users;