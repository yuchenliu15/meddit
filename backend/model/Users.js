import firebase from './index'

class Users {
    constructor() {
        this.username = 'ahha@dsfds.sdf'
        this.password = 'sdfsdfdsfsd'
    }

    async create() {
        const res = await firebase.auth()
            .createUserWithEmailAndPassword(
                this.username, this.password
            );

        return res;

    }

}

export default Users;