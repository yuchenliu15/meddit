const express = require('express');
const router = express.Router();
const Users = require('../model/Users');
const user = new Users();


router.post('/create', async function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  
  user.create(username, password)
    .then(() => { user.createRecord(username)})
    .then(() => res.status(200).end())
    .catch(e => res.status(400).end(e.code))

})

router.post('/login', function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  
  user.auth(username, password)
    .then(() => {
      const token = user.generateAccessToken(username)
      console.log(token)
      res.status(200).end(token)
    })
    .catch(e => {
      res.status(400).end(e.code)
      console.log(e)
    })
})


module.exports = router;
