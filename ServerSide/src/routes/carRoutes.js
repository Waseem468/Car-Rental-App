const express = require("express");
const {
  addCar,
  getAllCarsByAdmin,
  deleteCar,
  editCar,
  getAllCars
} = require("../controllers/carController");
const adminAuth = require("../middlewares/adminAuth");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Add car route, protected by adminAuth and handling image upload via GridFS
router.post("/add-car", adminAuth, addCar);

// Get all cars added by the admin
router.get("/my-cars", adminAuth, getAllCarsByAdmin);

// Edit a car
router.put("/edit-car/:id", adminAuth, editCar);

// Delete a car
router.delete("/delete-car/:id", adminAuth, deleteCar);

// Route to get all cars, protected by authentication middleware
router.get("/all-cars", authMiddleware, getAllCars);

module.exports = router;
