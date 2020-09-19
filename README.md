### backend
- install nodemon globally!
    `npm install -g nodemon` 
- go to /backend

    `npm i` 

    `npm start` (listen to port 3000 default)
    
### check the desired route file for more info on endpoints

- endpoints
  - users
    - post {username, password} `/users/create`
    - post {username, password} `/users/login`
    - get `/users/:username`
      - user info, ***such as communities and posts***
  - communities
    - post {name} `/communities/`
    - get `/communities/`
      - all communities
    - get `/communities/:id`
    - get `/communities/:id/posts`

      - get all posts ***(these are full posts, not IDs! so call directly, no need looping)*** for this community
    - post {username, title, description, content, topic, symptoms} `/communities/:id/posts`

      - add a new post to the community, symptoms are custom symptoms a user sets for the post, whereas a community's pinned post has static symptoms tied with it


  - posts
    - post {title, description, content, topic} `/posts/`
      - create a new post
    - get `/posts/`
      - all posts
    - get `/posts/:id`
    - get `/posts/:id/comments`
      - get all comments under post with post ID
    - post {username, content} `/posts/:id/comments`
      - create comments under the post with post ID
  

- disable user auth
  - comment out line 16 `app.use(authenticateToken)` in backend/app.js
