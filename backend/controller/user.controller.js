var { User,validateLogin,validateSignupData } = require("../model/user");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports.signup = async (req,res) => {
     /**
     * validate signup data
     */

      const {error} = validateSignupData(req.body);

      if(error){
          return res.status(403).send({error:error})
      }

      try {

      const isExistUserName = await User.findOne({username:req.body.username});

      if(isExistUserName){

        return res.status(400).send({error:'user already exists'});

      }else{

          
          /**
           * try to sign up user with encrypted password
           */
         bcrypt.hash(req.body.password,10, async (error,encrypted)=>{
            if(error){
                return res.status(400).send({error:error});
            }
            const user = new User({
                username:req.body.username,
                password:encrypted,
                email:req.body.email
              });

              console.log(user);
    
             const result = await user.save();
    
             return res.status(200).send({message:'Sign Up Success',data:result});
         });
   
          
    }

} catch (error) {

    console.error(error);

    return res.send({error:error});
      
}

}

module.exports.signin = async (req,res) => {

    /**
     * validate login data
     */

    const {error} = validateLogin(req.body);

    if(error){
        return res.status(403).send({error:error})
    }


    /**
     * try to verify user
     */

    try {

        const user = await User.findOne({username:req.body.username});

        if(!user){
            return res.status(400).send({error: 'User not found'});
        }

        const isValiduser = bcrypt.compare(user.password, req.body.password);

        if(!isValiduser){
            return res.status(403).send({error:'Invalid password'});
        }else{

            //sign jsonwebtoken 
            const payload = {
                username:user.username,
                email:user.email
            }
            
            const token = jwt.sign(payload,process.env.JWT_SECRET,{algorithm:'ES256',expiresIn:'4H'});

            return res.status(200).send(token);

        }
        
    } catch (error) {
        return res.status(400).send({error:error});
    }

}