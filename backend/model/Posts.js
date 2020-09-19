const firebase = require('./index')

class Posts {

    constructor() {
        this.db = firebase.database()
    }

    async create(username, content, title, topic, description, symptoms, communityCallback, userCallback) {

        const newKey = firebase.database().ref("/Posts").push().key;

        const post = {
            title: title,
            description: description,
            content: content,
            topic: topic,
            symptoms: symptoms,
            timestamp: Date.now(),
            username: username

        }
        const updates = {};
        updates["/Posts/" + newKey] = post;

        await communityCallback(newKey)
        await userCallback(newKey)

        return this.db.ref().update(updates);
    }

    addComment(postID){
        return async (commentID) => {
            const before = await this.get(postID);
            const beforePosts = before.comments ? before.comments: [];
    
            before.comments = [...beforePosts, commentID]
            const updates = {};
            updates["/Posts/" + postID] = before;
            return await this.db.ref().update(updates);
        }
    }

    getAll(){
        return this.db.ref('/Posts/').orderByChild("title")
            .once('value').then(snapshot => snapshot.val());
    }

    get(id){
        return this.db.ref('/Posts/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Posts;