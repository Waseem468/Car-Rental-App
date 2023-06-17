const express = require("express");
const {UserRegisterMethod,loginController} = require("../Controller/usercontroller");

const router = express.Router();

router.post("/register", UserRegisterMethod);

//login
router.post("/login", loginController);

module.exports = router;