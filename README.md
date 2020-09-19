### backend
- install nodemon globally!
    `npm install -g nodemon` 
- go to /backend

    `npm i` 

    `npm start` (listen to port 3000 default)
    

- endpoints
  - users
    - post {username, password} `/users/create`
    - post {username, password} `/users/login`
    - put {communities(array), posts(array), comments(array)} `/users/:username`
      - use this to add communities and stuff to user
    - get `/users/:username`
      - user info
  - communities
    - post {name} `/communities/`
    - get `/communities/`
      - all communities
    - get `/communities/:id`
    - get `/communities/:id/posts`
      - get all posts for this community
    - post {title, description, content, topic, symptoms} `/communities/:id/posts`
      - add a new post to the community, symptoms are custom symptoms a user sets for the post, whereas a community's pinned post has static symptoms tied with it

  - comments
    - post {content, user_id} `/comments/`
    - get `/comments/`
      - all comments
    - get `/comments/:id`
  - posts

    - get `/posts/`
      - all posts
    - get `/posts/:id`

- disable user auth
  - comment out line 16 `app.use(authenticateToken)` in backend/app.js