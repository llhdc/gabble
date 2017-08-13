const router = require('express').Router();
const models = require('../models');
const passport = require('passport')

router.get / login

router.post('/login', (req, res) => {
  models.User.find({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if(user.auth(req.body.password)){
      console.log("SUCCESSFUL LOGIN");
      res.redirect('/home')
    } else {
      console.log('PASS WRONG');
      res.redirect('/login')
    }
  })
  .catch(err => {
    console.log('USER NOT FOUND', err);
  })
});
