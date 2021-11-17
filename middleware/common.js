const jwt = require('jsonwebtoken')

const verifyJWT = (req,res,next) => {
    const token = req.headers["x-access-token"];
    if(!token)
        res.send("Yoo you dont have any token");
    else{
        jwt.verify(token,process.env.jwtSecret,(err,decoded) => {
            if(err){
                res.json({auth:false,msg:"You failed to authenticate"});
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }
}

module.exports = verifyJWT;