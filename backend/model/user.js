var mongoose = require('mongoose') ;
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
  });

const validateSignupData = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label('username is required'),
    password: Joi.string().required().label('password is required'),
    email: Joi.string().required().label('email is required')
})
  return schema.validate(data);
}

const validateLogin = (data) => {

const schema = 

  Joi.object({
    username: Joi.string().required().label('username is required'),
    password: Joi.string().required().label('password is required')
  })

  return schema.validate(data);
} 

const User = mongoose.model('User', userSchema);

module.exports = {User,validateLogin,validateSignupData}