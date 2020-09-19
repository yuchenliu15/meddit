const express = require('express');
const router = express.Router();

const Illnesses = require('../model/Illnesses')
const illnesses = new Illnesses();
const Diagnoses = require('../model/Diagnoses')
const diagnoses = new Diagnoses();
const Symptoms = require('../model/Symptoms')
const symptoms = new Symptoms();
const Users = require('../model/Users')
const users = new Users();

router.post('/', function(req, res, next) {
    return Illnesses.check_symptoms(data);
    // const title = req.body.title
    // const description = req.body.description
    // const content = req.body.content
    // const topic = req.body.topic
    // const symptoms = req.body.symptoms
  
  
    // if(!content)
    //   res.status(404).end('missing content');
    // if(!title)
    //   res.status(404).end('missing title');
    // if(!topic)
    //   res.status(404).end('missing topic');
    
    // post.create(title, description, content, topic, symptoms)
    //   .then(() => res.status(200).end())
    //   .catch(e => res.status(200).send(e.code))
  
});

module.exports = router;