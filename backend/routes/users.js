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

router.get('/:username', function(req, res, next) {
  const username = req.params.username;

  if(!username)
    res.status(404).end('missing username');
  
  user.get(username.replace(/\./g, ''))
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e.code))

});

router.put('/:username', function(req, res, next) {
  const username = req.params.username;
  const body = req.body

  if(!username)
    res.status(404).end('missing data');
  
  user.update(username.replace(/\./g, ''), body)
    .then(() => res.status(200).end())
    .catch(e => {res.status(400).send(e.code); console.log(e)})

});

module.exports = router;
