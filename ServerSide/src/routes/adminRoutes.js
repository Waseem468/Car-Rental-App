const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

// Route for admin registration
router.post("/register", registerAdmin);

// Route for admin login
router.post("/login", loginAdmin);

module.exports = router;
