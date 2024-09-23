const Car = require("../models/carModel");
const cloudinary = require("../utils/cloudinary");

//add car
const addCar = async (req, res) => {
  try {
    const {
      carName,
      carType,
      carModel,
      mileage,
      carNumber,
      availableFrom,
      availableUntil,
      pricePerKm,
      description,
      carDetails,
      details,
      capacity,
    } = req.body;

    // Validate required fields
    if (
      !carName ||
      !carType ||
      !carModel ||
      !carNumber ||
      !availableFrom ||
      !availableUntil ||
      !pricePerKm ||
      !capacity
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Ensure the image was uploaded
    if (!req.files || !req.files.image) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // Upload image to Cloudinary
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "cars",
    });

    // Create new car with the uploaded image URL from Cloudinary
    const newCar = new Car({
      carName,
      carType,
      carModel,
      mileage,
      carNumber,
      availableFrom,
      availableUntil,
      pricePerKm,
      description,
      carDetails,
      details,
      capacity,
      image: result.secure_url,
      adminId: req.admin.id,
    });

    // Save car to the database
    const savedCar = await newCar.save();

    res.status(201).json({
      success: true,
      message: "Car added successfully",
      car: savedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Car addition failed",
      error: error.message,
    });
  }
};

//Get All Cars Added by the Admin
const getAllCarsByAdmin = async (req, res) => {
  try {
    const adminId = req.admin.id;

    // Find cars that belong to the current admin
    const cars = await Car.find({ adminId });

    res.status(200).json({
      success: true,
      message: "Cars retrieved successfully",
      cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve cars",
      error: error.message,
    });
  }
};

//Delete a Car by the Admin
const deleteCar = async (req, res) => {
  try {
    const carId = req.params.id.trim(); // Trim the ID to remove any extra characters

    // Find and delete the car
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
      car: deletedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete car",
      error: error.message,
    });
  }
};

//edit a Car by the Admin
const editCar = async (req, res) => {
  try {
    const carId = req.params.id.trim();
    const {
      carName,
      carType,
      carModel,
      mileage,
      carNumber,
      availableFrom,
      availableUntil,
      pricePerKm,
      description,
      carDetails,
      details,
      capacity,
    } = req.body;

    // Find the car by ID
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    // If a new image is uploaded, upload to Cloudinary
    let newImageUrl;
    if (req.files && req.files.image) {
      const file = req.files.image.tempFilePath;
      const result = await cloudinary.uploader.upload(file, {
        folder: "car_images",
      });

      // Update the image URL
      newImageUrl = result.secure_url;
    }

    // Update the car's details
    const updatedCar = await Car.findByIdAndUpdate(
      carId,
      {
        carName: carName || car.carName,
        carType: carType || car.carType,
        carModel: carModel || car.carModel,
        mileage: mileage || car.mileage,
        carNumber: carNumber || car.carNumber,
        availableFrom: availableFrom || car.availableFrom,
        availableUntil: availableUntil || car.availableUntil,
        pricePerKm: pricePerKm || car.pricePerKm,
        description: description || car.description,
        carDetails: carDetails || car.carDetails,
        details: details || car.details,
        capacity: capacity || car.capacity,
        images: newImageUrl ? [newImageUrl] : car.images,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      car: updatedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update car",
      error: error.message,
    });
  }
};

//This function will query the database to retrieve all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json({
      success: true,
      cars: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve cars",
      error: error.message,
    });
  }
};

module.exports = { addCar, getAllCarsByAdmin, deleteCar, editCar, getAllCars };
