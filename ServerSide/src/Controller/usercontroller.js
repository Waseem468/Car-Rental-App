const ExpressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const ValidateDbID = require('../Utils/ValidateID');
const GenrateToken = require('../Utils/GenrateToken');
const SECRET_KEY = process.env.SECRET_KEY
const userModel = require("../Model/userSchema");


const UserRegisterMethod = async (req, res) => {
    try {
        let { password, email } = req.body;
        let HashPassword = await bcrypt.hash(password, 10);
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ status: "Failed", field: "email", message: "Email already exist!!" })
        }
        let newUser = await new userModel({
            ...req.body,
            password: HashPassword
        });
        newUser = await newUser.save();
        res.status(201).json({ status: 'success', user: newUser })
    }

    catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }

}

//LOGIN
const UserLoginMethod = ExpressAsyncHandler(async (req, res) => {
  try{
      let user = await userModel.findOne({email:req.body.email})//
      if(user){
          let ValidPassword = await bcrypt.compare(req.body.password, user.password)
          if(ValidPassword){
            const token = await jwt.sign({_id:user._id}, SECRET_KEY);
            res.status(200).send({status:"Successfully login" , token:token , name:user.name , userId:user._id})
          }else{
              res.status(401).send({status:"fail",massage:"Please Enter Correct Details"})
          }
      }else{
          res.status(401).send({status:"fail",massage:"Please Enter Correct Details"})
      }
  
  }catch(error){
      res.status(400).send(error.message);
  }
});
module.exports = { UserRegisterMethod, UserLoginMethod };