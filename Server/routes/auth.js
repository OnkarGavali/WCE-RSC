const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/User');

const verifyJWT = (req,res,next) => {
    const token = req.headers["x-access-token"];
    if(!token)
        res.send("Yoo you dont have any token");
    else{
        jwt.verify(token,"miniProject",(err,decoded) => {
            if(err){
                res.json({auth:false,msg:"You failed to authenticate"});
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }
}


router.post('/register',(req,res) => {
    const {Username,Password} = req.body;
    if(!Username || !Password)
    {
        res.status(400).json({msg:"Please enter all fields"});
    }
    
    User.findOne({Username})
        .then((user) => {
            if(user){
               return res.status(400).json({msg:"User already exists"});
            }

            const newUser = new User({
                Username,
                Password
            });

            bcrypt.genSalt(10,(err,salt) => {
                bcrypt.hash(newUser.Password,salt,(err,hash) => {
                    //if(err) throw err;
                    newUser.Password = hash;
                    newUser.save()
                        .then((user) => {

                            jwt.sign(
                                {id:user._id},
                                "miniProject",
                                {expiresIn:3600},
                                (err,token) => {
                                    res.json({
                                        token:token,
                                        user:{
                                            id:user.id,
                                            username:user.Username,  
                                        }
                                    });
                                }
                            )
                            
                        });
                });
            });

            
        })
});

router.post('/login',(req,res) => {
   const {Username,Password} = req.body;
    if(!Username || !Password)
    {
        res.status(400).json({msg:"Please enter all fields"});
    }

    User.findOne({Username})
        .then((user) => {
            if(!user){
                return res.json({msg:"User does not exists"});
            }

            bcrypt.compare(Password,user.Password)
                .then(isMatched => {
                    if(!isMatched) return res.json({msg:"Invalid Credentials"});

                    jwt.sign(
                        {id:user._id},
                        "miniProject",
                        {expiresIn:3600},
                        (err,token) => {
                            res.json({
                                token:token,
                                user:{
                                    id:user.id,
                                    username:user.Username,  
                                }
                            });
                        }
                    )
                });
        });
});

router.get('/admin',verifyJWT,(req,res) => {
    res.send("Admin Page");
});

module.exports = router;