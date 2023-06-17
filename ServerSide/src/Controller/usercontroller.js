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
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    //check user
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user is not registered",
      });
    }
    const matchPassword = await comparePassword(password, user.password);
    if (!matchPassword) {
      return res.status(200).json({
        success: false,
        message: "Invalid Password",
      });
    }
    //token create
    const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "20d",
    });
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
      error,
    });
  }
};
module.exports = { UserRegisterMethod, loginController };