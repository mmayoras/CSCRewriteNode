import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../src/webapp/model/User';

let router = express.Router();

router.post('/signup', function(req, res){
  let user = new User({
    email: req.body.email,
    password: req.body.password
  });
  console.log(JSON.stringify(user));
  user.save(function(err, data){
    if(err){
      return res.json({error: true});
    }
    res.json({error:false});
  })
});

router.post('/authenticate', function(req, res){
  let data = {
    email: req.body.email,
    password: req.body.password
  };
  User.findOne(data).lean().exec(function(err, user){
    if(err){
      return res.json({error: true});
    }
    if(!user){
      return res.status(404).json({'message':'User not found!'});
    }
    console.log(user);
    let token = jwt.sign(user, global.config.jwt_secret, {
      expiresIn: 1440 // expires in 1 hour
    });
    res.json({error:false, token: token});
  })
});

export default router;
