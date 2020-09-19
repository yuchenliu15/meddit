const jwt = require('jsonwebtoken')
const firebase = require('./index')
const secretToken = `09f26e402586e2faa8da4c98a35f1
  b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9
  d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611`

class Users {

    constructor() {
        this.db = firebase.database()
    }

    addPost(username){
        return async (postID) => {
            const before = await this.get(username);
            const beforePosts = before.posts ? before.posts: [];
    
            before.posts = [...beforePosts, postID]
            const updates = {};
            updates["/Users/" + username] = before;
            return await this.db.ref().update(updates);
        }
    }

    async createRecord(username) {
        const user = {
            name: username
        };
        const updates = {};
        updates["/Users/" + username.replace(/\./g,'')] = user;
        return await this.db.ref().update(updates);
    }

    async createPost(){

    }

    getAll(){
        return this.db.ref('/Users/').orderByChild("name")
            .once('value').then(snapshot => snapshot.val());
    }

    get(id){
        return this.db.ref('/Users/' + id)
            .once('value').then(snapshot => snapshot.val());
    }

    async update(username, data) {
        const before = await this.get(username);

        const dataPosts = data.posts ? data.posts: [];
        const beforePosts = before.posts ? before.posts: [];
        const dataComments = data.comments ? data.comments: [];
        const beforeComments = before.comments ? before.comments: [];
        const dataCommunities = data.communities ? data.communities: [];
        const beforeCommunities = before.communities ? before.communities: [];

        const user = {
            name: username,
            communities: [...dataCommunities, ...beforeCommunities],
            comments: [...dataComments, ...beforeComments],
            posts: [...dataPosts, ...beforePosts]
        };
        const updates = {};
        updates["/Users/" + username] = user;
        return await this.db.ref().update(updates);

    }

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

    generateAccessToken(username) {
        return jwt.sign(username, secretToken);
    }
}

module.exports = Users;
