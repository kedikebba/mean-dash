const express = require('express')

const router = express.Router()
const Contact  = require('../models/contacts')
router.get('/contacts', (req, res, next) =>{
  Contact.find(function(err, contacts){
    if (err){
      res.send("The is an error: "+ err)
    }else{
          res.json(contacts)
    }

  })
})
router.post('/contacts', (req, res, next)=>{
  let newContact = new Contact ({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  })
  newContact.save((err, contact)=>{
    if (err){
      res.json({msg: "Failed to add the contact"})
    }else{
      res.json({msg: "Contact saved Succesfully"})
    }
  })
})
router.delete('/contacts/:id', (req, res, next)=>{
  Contact.remove({_id: req.params.id}, (err, result)=>{
    if (err) {
      res.send(err)
    }else{
      res.send(result)
    }
  })
})

module.exports =  router
