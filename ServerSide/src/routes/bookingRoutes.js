const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
  getAllBookingsForUser,
} = require("../controllers/bookingController");

// Route for creating a new booking
router.post("/", createBooking);

// Route for getting a booking by ID
router.get("/:bookingId", getBookingById);

// Route for updating a booking by ID
router.put("/:bookingId", updateBooking);

// Route for deleting a booking by ID
router.delete("/:bookingId", deleteBooking);

// Route for getting all bookings for a specific user
router.get("/user/:userId", getAllBookingsForUser);

module.exports = router;
