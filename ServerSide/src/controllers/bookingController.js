const Booking = require("../models/bookingModel");

// Create a new booking
const createBooking = async (req, res) => {
  const {
    userId,
    carName,
    details,
    carNumber,
    origin,
    destination,
    startDate,
    endDate,
    bookingId,
    bookingDate,
    bookingTime,
    image,
  } = req.body;

  try {
    const newBooking = await Booking.create({
      userId,
      carName,
      details,
      carNumber,
      origin,
      destination,
      startDate,
      endDate,
      bookingId,
      bookingDate,
      bookingTime,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating booking",
      error: error.message,
    });
  }
};

// Get booking by booking id
const getBookingById = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving booking",
      error: error.message,
    });
  }
};

// Update a booking by booking id
const updateBooking = async (req, res) => {
  const { bookingId } = req.params;  // bookingId is the UUID string passed in the URL
  const updateData = req.body;

  try {
    const updatedBooking = await Booking.findOneAndUpdate(
      { bookingId }, // Find by bookingId (UUID)
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating booking",
      error: error.message,
    });
  }
};

// Delete a booking by booking ID
const deleteBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting booking",
      error: error.message,
    });
  }
};

// Get all bookings for a user
const getAllBookingsForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.find({ userId });

    if (bookings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No bookings found for this user",
      });
    }

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving bookings",
      error: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
  getAllBookingsForUser,
};
